import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { HeaderWithoutBG } from "../components/header";
import Card from "../components/card";

export default function MainPage() {
    const navigate = useNavigate();
    const [foodRecommendations, setFoodRecommendations] = useState([]);
    const [menuError, setMenuError] = useState("");
    const [menuRequestKey, setMenuRequestKey] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        setMenuError("");

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
                        alt: item.alt,
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
    }, [menuRequestKey]);

    return (
        <main>
            <section className="bg-[url('/assets/img/Utama/NasiCampurBali2.png')] bg-cover bg-fixed bg-center bg-no-repeat w-full h-screen flex bg-black/50 bg-blend-darken" id="hero-section">
                <div className="flex h-full w-full flex-row items-center justify-start px-5 ">
                    <div className="flex w-full flex-col justify-center gap-y-3 bg-apple-cream p-5 md:mx-5 md:w-1/3 md:p-10">
                        <img src="/assets/img/logo2.png" className="w-52 h-auto" alt="Warung Hati Logo"/>
                        <h1 className="text-5xl font-extrabold text-start text-apple-heading">
                            Nusantara Taste, Crafted with Hati.
                        </h1>
                        <p className="text-apple-body md:text-lg">
                            Experience the authentic flavors of Indonesia with our handcrafted dishes, made with love and the freshest ingredients.
                        </p>
                        <section className="flex items-center gap-5" id="cta">
                            <Button name="Explore Menu" onClick={() => navigate('/menu')} />
                            <Button variant="outlined" name="Learn More" onClick={() => navigate('/aboutus')} />
                        </section>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center bg-background px-4 py-24 md:px-0 md:py-32" id="short-intro">
                <div className="container mx-auto flex w-full flex-col items-center justify-center gap-10 md:flex-row">
                    <div className="flex h-[32vh] min-h-64 w-full items-stretch gap-2 md:h-[420px] md:gap-4">
                        <img
                            src="/assets/img/Utama/NasiBetutu.png"
                            alt="Freshly cooked meal"
                            className="h-full w-2/5 min-w-0 rounded-lg object-cover"
                        />
                        <img
                            src="/assets/img/aboutus/OurPartnerOrganicFarmerFromSidoarjo.jpeg"
                            alt="Our local farmer"
                            className="h-full w-[30%] min-w-0 rounded-lg object-cover"
                        />
                        <img
                            src="/assets/img/Minuman/EsCendol.png"
                            alt="Refreshing Es Cendol"
                            className="h-full w-[30%] min-w-0 rounded-lg object-cover"
                        />
                    </div>
                    <div className="flex flex-col md:basis-2/6">
                        <HeaderWithoutBG subtitle="A table with roots" title="Indonesian heritage, served with care." />
                        <p className="mb-4 max-w-2xl text-lg">
                            Warung Hati brings Indonesia's cultural heritage to the table through recipes shaped by place, season, and memory. We cook with indigenous herbs, spices, and natural ingredients to keep every plate generous, grounded, and unmistakably ours.
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full bg-seed-body" id="our-recommendations">
                <div className="container mx-auto px-4 py-10 md:px-10">
                    <div className="mx-auto flex items-center justify-between border-b-2 border-white">
                        <h2 className="text-2xl font-bold">A Few Recommendations</h2>
                        <button
                            type="button"
                            className="font-semibold text-apple-red underline underline-offset-4 hover:text-apple-red-hover"
                            onClick={() => navigate("/menu")}
                        >
                            View full menu
                        </button>
                    </div>
                    {menuError ? (
                        <div className="flex flex-col items-center gap-4 py-10 text-center">
                            <p className="text-red-600">{menuError}</p>
                            <button
                                type="button"
                                className="font-semibold text-apple-red underline underline-offset-4"
                                onClick={() => setMenuRequestKey((key) => key + 1)}
                            >
                                Try again
                            </button>
                        </div>
                    ) : foodRecommendations.length === 0 ? (
                        <p className="py-10 text-center text-seed-body">Featured dishes are coming soon.</p>
                    ) : (
                        <div className="grid gap-3 py-7 md:grid-cols-4 md:grid-rows-2">
                            {foodRecommendations.slice(0, 5).map((item, index) => {
                                const layoutClasses = [
                                    "md:col-span-3 md:row-span-2",
                                    "md:col-span-1",
                                    "md:col-span-1",
                                    "md:col-span-2",
                                    "md:col-span-2"
                                ];

                                return (
                                    <Card
                                        key={item.id}
                                        title={item.title}
                                        description={item.description}
                                        imageUrl={item.imageUrl}
                                        alt={item.alt}
                                        imageClassName="aspect-[4/3]"
                                        descriptionClassName={index === 0 ? "line-clamp-4" : "line-clamp-3"}
                                        className={`group min-h-48 transition-transform duration-300 hover:scale-[1.01] ${layoutClasses[index]}`}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
            <section className="bg-background py-40 px-4" id="contact-us">
                <div className="container flex lg:flex-row flex-col gap-10 mx-auto px-4 md:px-0">
                    <div className="w-full lg:basis-3/5">
                        <HeaderWithoutBG subtitle="Get in touch" title="Contact us" />
                        <div className="flex flex-col">
                            <p className="text-lg mb-4">
                                Curious about our food or have a special request? Drop us a
                                line and enjoy tasty Indonesian dishes made with fresh,
                                organic, locally sourced ingredients.
                            </p>
                            <div className="flex flex-col gap-4">
                                <Button header="Email" subheader="info@warunghati.com" icon="fi fi-rr-envelope" />
                                <Button header="Phone" subheader="+62 812-3456-7890" icon="fi fi-brands-whatsapp" />
                                <p className="text-center">or</p>
                                <p className="text-lg">Check out our social media for more updates and special offers!</p>
                                <div className="container mx-auto flex flex-row justify-center gap-4">
                                    <Button
                                        icon="fi fi-brands-instagram"
                                        iconOnly
                                        ariaLabel="Instagram Warung Hati"
                                        onClick={() => window.open("https://www.instagram.com/warunghati", "_blank")}
                                    />
                                    <Button
                                        icon="fi fi-brands-facebook"
                                        iconOnly
                                        ariaLabel="Facebook Warung Hati"
                                        onClick={() => window.open("https://www.facebook.com/profile.php?id=100080306831431", "_blank")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <script src="https://elfsightcdn.com/platform.js" async></script>
                        <div className="elfsight-app-c2ec6df7-89c7-4b7d-9c3c-c4c2a9b520c4" data-elfsight-app-lazy></div>
                    </div>
                </div>
            </section>
        </main>
    )
}