import { useNavigate } from "react-router-dom";
import { Button, TextButton } from "../components/button";
import { HeaderWithoutBG } from "../components/header";
import useLoadJson from "../hook/useLoadJson";
import Carrousel from "../components/carrousel";

export default function MainPage() {
    const navigate = useNavigate()

    const { data } = useLoadJson()

    const recommendations = data
        .filter(item => item.featured === true)
        .map(item => ({
            id: item.id,
            title: item.name,
            description: item.desc,
            imageUrl: item.pict,
            alt: item.alt
        }))

    return (
        <main>
            <section className="w-full h-screen landscape:max-xl:h-[180svh] relative overflow-hidden pt-24" id="hero-section">
                <img src="/assets/img/Utama/NasiCampurBali2.webp" alt="Nasi Campur Bali" className="absolute h-full w-full object-cover brightness-50" />
                <div className="relative z-5 flex h-full w-full flex-row px-5 items-center justify-start">
                    <div className="flex flex-col justify-center gap-y-3 landscape:max-xl:gap-y-4 landscape:max-xl:w-1/2 landscape:max-xl:p-10 bg-apple-cream p-10 sm:w-1/2 lg:w-1/3 h-fit self-center">
                        <img src="/assets/img/logo2.png" className="h-auto w-40 landscape:max-xl:w-40 lg:w-52" alt="Warung Hati Logo" />
                        <h1 className="text-apple-body text-xl font-semibold">
                            The Authentic Indonesia’s Heritage Cuisine with Organic and Natural Ingredients
                        </h1>
                        <div className="flex items-center gap-5 landscape:max-xl:gap-5 landscape:max-xl:mt-3" id="cta">
                            <Button name="Explore Menu" onClick={() => navigate('/menu')} />
                            <TextButton
                                name="Our story"
                                onClick={() => navigate("/aboutus")}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center px-4 py-24 md:px-0 md:py-32" id="short-intro">
                <div className="container mx-auto flex w-full flex-col items-center justify-center gap-10 ">
                    <div className="flex h-[32vh] min-h-64 w-full items-stretch gap-2 md:h-105 md:gap-4">
                        <img
                            src="/assets/img/Utama/NasiBetutu.webp"
                            alt="Freshly cooked meal"
                            className="h-full w-[20%] sm:w-[30%] rounded-lg object-cover"
                        />
                        <img
                            src="/assets/img/aboutus/OurPartnerOrganicFarmerFromSidoarjo.webp"
                            alt="Our local farmer"
                            className="h-full w-[60%] sm:w-[40%] rounded-lg object-cover"
                        />
                        <img
                            src="/assets/img/Minuman/EsCendol.webp"
                            alt="Refreshing Es Cendol"
                            className="h-full w-[20%] sm:w-[30%] rounded-lg object-cover"
                        />
                    </div>
                    <div className="flex gap-x-5 md:flex-row justify-center w-auto flex-col">
                        <div className="">
                            <HeaderWithoutBG subtitle="Welcome to" title="Your life-changing journey" />
                        </div>
                        <div className="flex flex-col">
                            <p className="mb-2 max-w-2xl text-lg md:text-justify text-left">
                                Experience the authentic taste of Indonesia's cultural heritage with Warung Hati's cuisine. Our menu is crafted with indigenous herbs, spices, and natural ingredients that have been passed down from our ancestors. We believe that this wisdom is the key to achieving the balance between humans and nature, and is also the secret to prime health and longevity.
                            </p>
                            <TextButton
                                name="More about us"
                                onClick={() => navigate("/aboutus")}
                                className="text-start"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-seed-body" id="our-recommendations">
                <div className="mx-auto px-4 py-10 md:px-10">
                    <div className="mx-auto flex items-center container justify-between border-b-2 border-white ">
                        <h2 className="md:text-3xl text-xl font-bold text-seed-badge">Recommendations</h2>
                        <TextButton
                            name="All Dishes"
                            onClick={() => navigate("/menu")}
                        />
                    </div>
                    <div className="mt-2 h-[75vh] w-full mx-auto overflow-hidden self-center container rounded-lg">
                        <Carrousel items={recommendations.slice(0, 5)} />
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center px-4 py-20 md:py-28" id="contact-us">
                <div className="container mx-auto flex flex-col items-center text-center max-w-2xl">
                    <HeaderWithoutBG
                        subtitle="Get in touch"
                        title="Contact us"
                        align="text-center"
                        className="items-center"
                    />
                    <p className="text-lg mb-8">
                        Curious about our food, event collaborations, or have a special request?
                        Drop us a line and stay connected with us!
                    </p>
                    <div className="flex flex-col items-center gap-6 w-full">
                        <div className="grid sm:grid-cols-2 gap-4 w-full max-w-lg">
                            <Button
                                header="Email"
                                subheader="info&#64;warunghati.com"
                                icon="fi fi-rr-envelope"
                                onClick={() => window.location.href = "mailto:info@warunghati.com"}
                            />
                            <Button
                                header="WhatsApp"
                                subheader="+62 813-3300-3734"
                                icon="fi fi-brands-whatsapp"
                                onClick={() => window.open("https://wa.me/6281333003734", "_blank")}
                            />
                        </div>
                        <div className="flex flex-col items-center gap-3 mt-2">
                            <p className="text-sm text-neutral-500 uppercase tracking-wider font-semibold">
                                Follow our updates
                            </p>
                            <div className="flex flex-row justify-center gap-4">
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
            </section>
        </main>
    )
}