import { useEffect, useMemo, useState } from "react";
import { HeaderWithBG } from "../components/header";
import Card from "../components/card";
import { Button } from "../components/button";
import UseLoadJson from "../hook/useLoadJson";

const labelsMenu = {
    all: "All",
    main: "Main Course",
    side: "Side Dish",
    snack: "Snack",
    vegetable: "Vegetable",
    drink: "Drink",
    party: "Party Package",
};

const categories = [
    "all",
    "main",
    "side",
    "snack",
    "vegetable",
    "drink",
    "party",
];

export default function MenuPage() {
    const { data, loading, error, reload } = UseLoadJson()
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(8)

    useEffect(() => {
        const mobileQuery = window.matchMedia("(max-width: 767px)")
        const updateItemsPerPage = () => {
            setItemsPerPage(mobileQuery.matches ? 4 : 8);
        }

        updateItemsPerPage();
        mobileQuery.addEventListener("change", updateItemsPerPage)

        return () =>
            mobileQuery.removeEventListener("change", updateItemsPerPage)
    }, [])

    const menuItems = useMemo(() => {
        return data
            .filter(
                (item) =>
                    selectedCategory === "all" ||
                    item.category === selectedCategory
            )
            .map((item) => ({
                id: item.id,
                title: item.name,
                description: item.desc,
                imageUrl: item.pict,
                alt: item.alt,
            }));
    }, [data, selectedCategory])

    const totalPages = Math.ceil(menuItems.length / itemsPerPage)
    const firstItemIndex = (currentPage - 1) * itemsPerPage
    const visibleItems = menuItems.slice(
        firstItemIndex,
        firstItemIndex + itemsPerPage
    )

    const changeCategory = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    }

    useEffect(() => {
        setCurrentPage((page) => Math.min(page, Math.max(totalPages, 1)))
    }, [totalPages]);

    const changePage = (page) => {
        setCurrentPage(Math.min(Math.max(page, 1), totalPages))
        document
            .getElementById("menu-section")
            ?.scrollIntoView({ behavior: "smooth", block: "start" })
    };

    const errorMenu = error
        ? "Failed to load dishes. Please try again later."
        : null

    return (
        <main>
            <HeaderWithBG
                subtitle="Our Menu"
                title="Delicious Dishes"
                backgroundImageUrl="/assets/img/Perayaan/NasiBancaan.webp"
                titleId="menu-title"
            />

            <section
                id="menu-section"
                className="container mx-auto px-4 py-8"
            >
                {errorMenu ? (
                    <div className="flex flex-col items-center gap-4 py-5 text-center">
                        <p className="text-red-600">{errorMenu}</p>

                        <button
                            type="button"
                            className="font-semibold text-apple-red underline underline-offset-4"
                            onClick={reload}
                        >
                            Try again
                        </button>
                    </div>
                ) : loading ? (
                    <p className="py-10 text-center text-seed-body">
                        Hang on while we load the our best dishes...
                    </p>
                ) : (
                    <>
                        <div
                            className="mb-8 flex flex-wrap justify-center gap-3"
                            role="group"
                            aria-label="Filter menu by category"
                        >
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    name={labelsMenu[category]}
                                    ariaLabel={`Show ${labelsMenu[category]}`}
                                    onClick={() => changeCategory(category)}
                                    variant={
                                        selectedCategory === category
                                            ? "solid"
                                            : "outlined"
                                    }
                                />
                            ))}
                        </div>

                        {menuItems.length === 0 ? (
                            <p className="py-10 text-seed-body">
                                No dishes found in this category.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                                {visibleItems.map((item) => (
                                    <Card
                                        key={item.id}
                                        title={item.title}
                                        description={item.description}
                                        imageUrl={item.imageUrl}
                                        alt={item.alt}
                                        loadmode="eager"
                                        descriptionClassName="line-clamp-5"
                                    />
                                ))}
                            </div>
                        )}

                        {totalPages > 1 && (
                            <nav
                                className="mt-8 flex flex-wrap items-center justify-center gap-2"
                                aria-label="Menu pagination"
                            >
                                <button
                                    type="button"
                                    onClick={() => changePage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="rounded-lg bg-accent px-4 py-2 font-bold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    Previous
                                </button>

                                {Array.from(
                                    { length: totalPages },
                                    (_, index) => index + 1
                                ).map((page) => (
                                    <button
                                        key={page}
                                        type="button"
                                        onClick={() => changePage(page)}
                                        aria-current={
                                            currentPage === page
                                                ? "page"
                                                : undefined
                                        }
                                        className={`size-10 rounded-lg px-3 py-2 font-bold transition-colors ${
                                            currentPage === page
                                                ? "bg-apple-red text-white"
                                                : "bg-apple-card text-apple-heading hover:bg-apple-red hover:text-white"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => changePage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="rounded-lg bg-accent px-4 py-2 font-bold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </nav>
                        )}
                    </>
                )}
            </section>
        </main>
    );
}