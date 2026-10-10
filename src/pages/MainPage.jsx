import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonOutlined } from "../components/button";
import Carrousel from "../components/carrousel";

export default function MainPage() {
    const navigate = useNavigate();
    const [foodRecommendations, setFoodRecommendations] = useState([]);
    const [menuError, setMenuError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        async function loadFeaturedMenu() {
            try {
                const response = await fetch("/menu.json", {
                    signal: controller.signal
                });

                if (!response.ok) {
                    throw new Error(`Menu request failed with status ${response.status}`);
                }

                const menu = await response.json();
                const featuredItems = menu
                    .filter((item) => item.featured === true)
                    .map((item) => ({
                        id: item.id,
                        title: item.name,
                        description: item.desc,
                        imageUrl: item.pict
                    }));

                setFoodRecommendations(featuredItems);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setMenuError("Menu unggulan tidak dapat dimuat.");
                    console.error("Failed to load featured menu:", error);
                }
            }
        }

        loadFeaturedMenu();

        return () => controller.abort();
    }, []);

    return (
        <main>
            <section className="bg-[url('/assets/img/Utama/NasiCampurBali2.png')] bg-cover bg-fixed bg-center bg-no-repeat w-full h-screen flex bg-black/50 bg-blend-darken" id="hero-section">
                <div className="flex flex-row justify-between pl-15 pr-5 py-5 w-full h-full">
                    <div className="flex flex-col justify-center max-w-4xl">
                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white">
                            Warung Hati
                        </h1>
                        <h2 className="text-white text-lg max-w-xl mb-5">
                            The Authentic Indonesia’s Heritage Cuisine with Organic and Natural Ingredients
                        </h2>
                        <section className="flex items-center gap-5" id="cta">
                            <Button name="Explore Menu" onClick={() => navigate('/menu')} />
                            <ButtonOutlined name="Learn More" onClick={() => navigate('/about')} />
                        </section>
                    </div>
                </div>
            </section>
            <section className="bg-background py-40 px-4" id="short-intro">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="md:relative hidden md:block h-full w-full">
                        <img
                            src="/assets/img/Utama/NasiBetutu.png"
                            alt="Freshly cooked meal"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 h-auto object-cover rounded-lg shadow-xl transform -rotate-3"
                        />
                        <img
                            src="/assets/img/aboutus/OurPartnerOrganicFarmerFromSidoarjo.jpeg"
                            alt="Our local farmer"
                            className="absolute top-5 left-5 w-4/12 h-auto object-cover rounded-lg shadow-lg border-4 border-white transform rotate-6"
                        />
                        <img
                            src="/assets/img/Minuman/EsCendol.png"
                            alt="Refreshing Es Cendol"
                            className="absolute bottom-5 right-5 w-5/12 h-auto object-cover rounded-lg shadow-2xl border-4 border-white transform -rotate-6"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-5xl font-extrabold text-primary mb-6 leading-tight">
                            Welcome to your life-changing journey
                        </h2>
                        <p className="mb-4 text-lg">
                            Experience the authentic taste of Indonesia's cultural heritage with Warung Hati's cuisine. Our menu is crafted with indigenous herbs, spices, and natural ingredients that have been passed down from our ancestors. We believe that this wisdom is the key to achieving the balance between humans and nature, and is also the secret to prime health and longevity.
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full h-screen" id="our-recomendation">
                <div className="w-full h-full">
                    {menuError ? (
                        <p className="flex h-full items-center justify-center text-red-600">
                            {menuError}
                        </p>
                    ) : (
                        <Carrousel items={foodRecommendations} />
                    )}
                </div>
            </section>
        </main>
    )
}