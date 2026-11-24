import { useEffect, useMemo, useState } from "react";
import { HeaderWithBG } from "../components/header";
import Card, { CardSkeleton } from "../components/card";
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

    const maxVisiblePages = 6
    const visiblePageNumbers = useMemo(() => {
        if (totalPages <= maxVisiblePages) {
            return Array.from({ length: totalPages }, (_, index) => index + 1)
        }

        let startPage = Math.max(1, currentPage - 2)
        let endPage = startPage + maxVisiblePages - 1

        if (endPage > totalPages) {
            endPage = totalPages
            startPage = totalPages - maxVisiblePages + 1
        }

        return Array.from(
            { length: endPage - startPage + 1 },
            (_, index) => startPage + index
        )
    }, [currentPage, totalPages])

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
                <div
                    className="mb-8 hidden flex-wrap justify-center gap-3 lg:flex"
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
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                        {Array.from({ length: itemsPerPage }).map((_, i) => (
                            <CardSkeleton key={i} />
                        ))}
                    </div>
                ) : (
                    <>
                        <div
                            className="mb-8 flex justify-center lg:hidden"
                        >
                            <label className="w-full max-w-sm">
                                <span className="sr-only">
                                    Filter menu by category
                                </span>
                                <select
                                    value={selectedCategory}
                                    onChange={(event) =>
                                        changeCategory(event.target.value)
                                    }
                                    aria-label="Filter menu by category"
                                    className="w-full rounded-lg border-2 border-accent bg-apple-card px-4 py-3 font-bold text-apple-red outline-none transition-colors focus:border-accent-dark"
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {labelsMenu[category]}
                                        </option>
                                    ))}
                                </select>
                            </label>
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
                                        loadMode="eager"
                                        descriptionClassName="line-clamp-5"
                                    />
                                ))}
                            </div>
                        )}

                        {totalPages > 1 && (
                            <nav
                                className="mt-8 flex flex-wrap items-center justify-center gap-1 sm:gap-2"
                                aria-label="Menu pagination"
                            >
                                <button
                                    type="button"
                                    onClick={() => changePage(1)}
                                    disabled={currentPage === 1}
                                    aria-label="Go to first page"
                                    title="First page"
                                    className="flex h-8 min-w-[28px] items-center justify-center gap-1 rounded-lg bg-apple-card px-1.5 text-xs font-bold text-apple-heading transition-colors hover:cursor-pointer hover:bg-apple-red hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-apple-card disabled:hover:text-apple-heading sm:h-10 sm:min-w-[40px] sm:px-2.5 sm:text-sm"
                                >
                                    <i className="fi fi-rr-angle-double-small-left flex items-center text-sm leading-none sm:text-base" aria-hidden="true" />
                                    <span className="hidden md:inline">First</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => changePage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    aria-label="Go to previous page"
                                    title="Previous page"
                                    className="flex h-8 min-w-[28px] items-center justify-center gap-1 rounded-lg bg-apple-card px-1.5 text-xs font-bold text-apple-heading transition-colors hover:cursor-pointer hover:bg-apple-red hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-apple-card disabled:hover:text-apple-heading sm:h-10 sm:min-w-[40px] sm:px-2.5 sm:text-sm"
                                >
                                    <i className="fi fi-rr-angle-small-left flex items-center text-sm leading-none sm:text-base" aria-hidden="true" />
                                    <span className="hidden md:inline">Prev</span>
                                </button>

                                {visiblePageNumbers.map((page) => (
                                    <button
                                        key={page}
                                        type="button"
                                        onClick={() => changePage(page)}
                                        aria-current={
                                            currentPage === page
                                                ? "page"
                                                : undefined
                                        }
                                        aria-label={`Go to page ${page}`}
                                        className={`flex h-8 min-w-[28px] items-center justify-center rounded-lg px-1.5 text-xs font-bold transition-colors sm:h-10 sm:w-10 sm:min-w-0 sm:px-0 sm:text-sm ${currentPage === page
                                            ? "bg-apple-red text-white shadow-xs"
                                            : "bg-apple-card text-apple-heading hover:cursor-pointer hover:bg-apple-red hover:text-white"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => changePage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    aria-label="Go to next page"
                                    title="Next page"
                                    className="flex h-8 min-w-[28px] items-center justify-center gap-1 rounded-lg bg-apple-card px-1.5 text-xs font-bold text-apple-heading transition-colors hover:cursor-pointer hover:bg-apple-red hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-apple-card disabled:hover:text-apple-heading sm:h-10 sm:min-w-[40px] sm:px-2.5 sm:text-sm"
                                >
                                    <span className="hidden md:inline">Next</span>
                                    <i className="fi fi-rr-angle-small-right flex items-center text-sm leading-none sm:text-base" aria-hidden="true" />
                                </button>

                                <button
                                    type="button"
                                    onClick={() => changePage(totalPages)}
                                    disabled={currentPage === totalPages}
                                    aria-label="Go to last page"
                                    title="Last page"
                                    className="flex h-8 min-w-[28px] items-center justify-center gap-1 rounded-lg bg-apple-card px-1.5 text-xs font-bold text-apple-heading transition-colors hover:cursor-pointer hover:bg-apple-red hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-apple-card disabled:hover:text-apple-heading sm:h-10 sm:min-w-[40px] sm:px-2.5 sm:text-sm"
                                >
                                    <span className="hidden md:inline">Last</span>
                                    <i className="fi fi-rr-angle-double-small-right flex items-center text-sm leading-none sm:text-base" aria-hidden="true" />
                                </button>
                            </nav>
                        )}
                    </>
                )}
            </section>
        </main>
    );
}