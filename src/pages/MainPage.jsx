import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { HeaderWithoutBG } from "../components/header";
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
    }, []);

    return (
        <main>
            <section className="bg-[url('/assets/img/Utama/NasiCampurBali2.png')] bg-cover bg-fixed bg-center bg-no-repeat w-full h-screen flex bg-black/50 bg-blend-darken" id="hero-section">
                <div className="flex h-full w-full flex-row items-center justify-start px-5 ">
                    <div className="flex w-full flex-col justify-center gap-y-3 bg-apple-cream p-5 md:mx-5 md:w-1/3 md:p-10">
                        <img src="/assets/img/logo2.png" className="w-52 h-auto" />
                        <h2 className="text-5xl font-extrabold text-start text-apple-heading">
                            Ullamco laborum consequat.
                        </h2>
                        <p className="text-apple-body md:text-lg">
                            In ea ea pariatur occaecat anim. In sint ut tempor nulla mollit exercitation consequat. Magna aliquip nostrud non excepteur proident incididunt in minim ullamco.
                        </p>
                        <section className="flex items-center gap-5" id="cta">
                            <Button name="Explore Menu" onClick={() => navigate('/menu')} />
                            <Button variant="outlined" name="Learn More" onClick={() => navigate('/aboutus')} />
                        </section>
                    </div>
                </div>
            </section>
            <section className="flex min-h-screen items-center justify-center bg-background px-4 py-10 md:h-screen md:px-0" id="short-intro">
                <div className="container mx-auto flex h-auto w-full flex-col items-center justify-center gap-10 md:h-full md:flex-row">
                    <div className="flex h-[40vh] min-h-64 w-full items-stretch gap-2 md:h-full md:gap-4">
                        <img
                            src="/assets/img/Utama/NasiBetutu.png"
                            alt="Freshly cooked meal"
                            className="h-full w-1/3 min-w-0 rounded-lg object-cover"
                        />
                        <img
                            src="/assets/img/aboutus/OurPartnerOrganicFarmerFromSidoarjo.jpeg"
                            alt="Our local farmer"
                            className="h-full w-1/3 min-w-0 rounded-lg object-cover"
                        />
                        <img
                            src="/assets/img/Minuman/EsCendol.png"
                            alt="Refreshing Es Cendol"
                            className="h-full w-1/3 min-w-0 rounded-lg object-cover"
                        />
                    </div>
                    <div className="flex flex-col md:basis-2/6">
                        <HeaderWithoutBG subtitle="Welcome to Your" title="Life Changing Journey" />
                        <p className="mb-4 text-lg">
                            Experience the authentic taste of Indonesia's cultural heritage with Warung Hati's cuisine. Our menu is crafted with indigenous herbs, spices, and natural ingredients that have been passed down from our ancestors. We believe that this wisdom is the key to achieving the balance between humans and nature, and is also the secret to prime health and longevity.
                        </p>
                    </div>
                </div>
            </section>
            <section className="h-screen w-full bg-seed-body" id="our-recomendation">
                <div className="container py-4 px-10 mx-auto">
                    <div className="mx-auto flex  items-center justify-between border-b-2 border-white">
                        <h2 className="">Help</h2>
                        <h2 className="">Help</h2>
                    </div>
                    <div className="grid grid-flow-col gap-4">
                        <div></div>
                    </div>
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