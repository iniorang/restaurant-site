import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextButton } from "../components/button";
import { HeaderWithoutBG } from "../components/header";
import useLoadJson from "../hook/useLoadJson";
import Carrousel from "../components/carrousel";

const contactItems = [
    {
        type: "manual",
        label: "WhatsApp",
        value: "+62 813-3300-3734",
        icon: "fi fi-brands-whatsapp",
    },
    {
        type: "manual",
        label: "Email",
        value: ["info","warunghati.com"].join("\u0040"),
        icon: "fi fi-rr-envelope",
    },
    {
        type: "link",
        label: "Instagram",
        value: "@warunghati",
        href: "https://www.instagram.com/warunghati",
        icon: "fi fi-brands-instagram",
    },
    {
        type: "link",
        label: "Facebook",
        value: "Warung Hati",
        href: "https://www.facebook.com/profile.php?id=100080306831431",
        icon: "fi fi-brands-facebook",
    },
];

export default function MainPage() {
    const navigate = useNavigate()
    const [copiedLabel, setCopiedLabel] = useState(null)

    const handleCopy = (label, text) => {
        navigator.clipboard.writeText(text)
        setCopiedLabel(label)
        setTimeout(() => setCopiedLabel(null), 2000)
    }

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
                    <div className="flex flex-col justify-center gap-y-3 landscape:max-xl:gap-y-4 landscape:max-xl:w-1/2 landscape:max-xl:p-10 bg-[#FFFDF7] p-10 sm:w-1/2 lg:w-1/3 h-fit self-center">
                        <img src="/assets/img/logo2.png" className="h-auto w-40 landscape:max-xl:w-40 lg:w-52" alt="Warung Hati Logo" />
                        <h1 className="lg:text-lg font-semibold">
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
                    <div className="flex lg:flex-row justify-center items-center md:gap-x-5 flex-col">
                        <h2 className="text-5xl text-leaf font-extrabold mb-6 leading-tight lg:basis-xs"> Welcome to Your life-changing journey</h2>
                        <div className="flex flex-col lg:basis-2xl">
                            <p className="mb-2 text-lg md:text-justify text-left">
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
                        title="Get in touch"
                        align="text-center"
                        className="items-center"
                    />
                    <p className="text-lg md:text-center text-start mb-10 max-w-xl">
                        Curious about our food, event collaborations, or have a special request?
                        Drop us a line and stay connected with us!
                    </p>
                    <div className="w-full divide-y divide-stone-200/80 border-y border-stone-200/80">
                        {contactItems.map((item) => {
                            const isManual = item.type === "manual";
                            const isCopied = copiedLabel === item.label;

                            const content = (
                                <>
                                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-apple-card text-apple-body/80 group-hover:bg-apple-red group-hover:text-white transition-colors duration-200">
                                            <i className={`${item.icon} text-lg flex items-center justify-center`}></i>
                                        </span>
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 min-w-0 text-left">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 sm:w-24 shrink-0 group-hover:text-apple-red transition-colors duration-200">
                                                {item.label}
                                            </span>
                                            <span className="text-base sm:text-lg font-bold text-apple-heading select-all group-hover:text-apple-red transition-colors duration-200">
                                                {item.value}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="shrink-0 pl-3">
                                        {isManual ? (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleCopy(item.label, item.value);
                                                }}
                                                aria-label={`Salin ${item.label}`}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${isCopied
                                                    ? "bg-leaf/15 text-leaf border border-leaf/30"
                                                    : "bg-apple-card text-apple-body hover:bg-apple-red hover:text-white"
                                                    }`}
                                            >
                                                <i className={`text-xs ${isCopied ? "fi fi-rr-check" : "fi fi-rr-copy"}`}></i>
                                                <span>{isCopied ? "Copied!" : "Copy"}</span>
                                            </button>
                                        ) : (
                                            <span className="flex items-center gap-1 text-xs font-medium text-neutral-400 group-hover:text-apple-red transition-colors">
                                                <span className="hidden sm:inline">Visit</span>
                                                <i className="fi fi-rr-arrow-up-right text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"></i>
                                            </span>
                                        )}
                                    </div>
                                </>
                            );

                            return isManual ? (
                                <div
                                    key={item.label}
                                    className="group flex items-center justify-between py-4 sm:py-5 px-3 sm:px-4 transition-all duration-200 hover:bg-apple-card/40"
                                >
                                    {content}
                                </div>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between py-4 sm:py-5 px-3 sm:px-4 transition-all duration-200 hover:bg-apple-card/40 cursor-pointer"
                                >
                                    {content}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}