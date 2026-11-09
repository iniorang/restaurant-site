import { useMemo, useState } from "react";
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
    const { data, loading, error, reload } = UseLoadJson();
    const [selectedCategory, setSelectedCategory] = useState("all");

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
    }, [data, selectedCategory]);

    const errorMenu = error
        ? "Failed to load dishes. Please try again later."
        : null;

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
                        Hang on while we load the dishes...
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
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
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
                                {menuItems.map((item) => (
                                    <Card
                                        key={item.id}
                                        title={item.title}
                                        description={item.description}
                                        imageUrl={item.imageUrl}
                                        alt={item.alt}
                                        descriptionClassName="line-clamp-5"
                                    />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </section>
        </main>
    );
}