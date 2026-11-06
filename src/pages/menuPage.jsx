import { HeaderWithBG } from "../components/header";
import Card from "../components/card";
import UseLoadJson from "../hook/useLoadJson"

export default function MenuPage() {
    const { data, loading, error, reload } = UseLoadJson()

    const menuItems = data.map(item => ({
        id: item.id,
        title: item.name,
        description: item.desc,
        imageUrl: item.pict,
        alt: item.alt
    }))

    const errorMenu = error ? "Failed to load food items. Please try again later." : null;

    return (
        <main>
            <HeaderWithBG
                subtitle="Our Menu"
                title="Delicious Dishes"
                backgroundImageUrl="/assets/img/Perayaan/NasiBancaan.webp"
                titleId="menu-title"
            />
            <section id="menu-section" className="container mx-auto px-4 py-8">
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
                    <p className="py-10 text-center text-seed-body">Loading Food...</p>
                )
                    : menuItems.length === 0 ? (
                        <p className="py-10 text-center text-seed-body">Dishes are coming soon.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
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
            </section>
        </main>
    )
}