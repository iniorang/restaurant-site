import { useEffect, useMemo, useState } from "react";

const categories = [
    { key: "all", label: "Everything" },
    { key: "main", label: "Main dishes" },
    { key: "snack", label: "Jajanan" },
    { key: "side", label: "Lauk" },
    { key: "vegetable", label: "Sayur" },
    { key: "drink", label: "Drinks" },
    { key: "party", label: "Celebrations" },
];

export default function MenuPage() {
    const [menu, setMenu] = useState([]);
    const [category, setCategory] = useState("all");
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        fetch("/menu.json", { signal: controller.signal })
            .then((response) => {
                if (!response.ok) throw new Error("Menu request failed");
                return response.json();
            })
            .then(setMenu)
            .catch((requestError) => {
                if (requestError.name !== "AbortError") setError("The menu could not be loaded. Please try again.");
            });

        return () => controller.abort();
    }, []);

    const visibleItems = useMemo(
        () => category === "all" ? menu : menu.filter((item) => item.category === category),
        [category, menu]
    );

    return (
        <main className="menu-page page-shell">
            <header className="page-masthead">
                <h1>Come hungry.<br /><em>Leave with a story.</em></h1>
                <p>Browse dishes rooted in the places, produce, and rituals of Indonesia. Take your time; there is plenty to discover.</p>
            </header>

            <nav className="menu-filter" aria-label="Menu categories">
                {categories.map((item) => (
                    <button
                        key={item.key}
                        type="button"
                        className={category === item.key ? "is-active" : ""}
                        aria-pressed={category === item.key}
                        onClick={() => setCategory(item.key)}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>

            {error ? <p className="page-message page-message--error">{error}</p> : null}
            {!error && menu.length === 0 ? <p className="page-message">Gathering the menu...</p> : null}
            {!error && menu.length > 0 && visibleItems.length === 0 ? <p className="page-message">There are no dishes in this chapter yet. Try another part of the table.</p> : null}
            <section className="menu-grid" aria-live="polite" aria-label="Menu items">
                {visibleItems.map((item, index) => (
                    <article className={`menu-item ${index % 5 === 0 ? "menu-item--feature" : ""}`} key={item.id}>
                        <div className="menu-item__image-wrap">
                            <img src={item.pict} alt={item.alt} />
                            {item.featured ? <span className="menu-item__tag">House favourite</span> : null}
                        </div>
                        <div className="menu-item__copy">
                            <h2>{item.name}</h2>
                            <p>{item.desc}</p>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    )
}