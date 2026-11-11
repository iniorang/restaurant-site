import { HeaderWithBG } from "../components/header";
import PlanTable from "../components/plan";

const plans = [
    {
        img: "/assets/img/Utama/NasiPecel2.webp",
        title: "Sapu Jagad",
        description: "Selection of healthy meals to support the immune system and improve stamina.",
        goal: "Immune booster, increase energy and stamina",
        menu: "Nasi Pecel Kacang Mente with Organic Tempeh Bacem",
        included: [
            "6 days package",
            "2 healthy main course",
            "1 healthy beverage (cold-pressed juice or smoothies)",
            "1.500 calories/day",
        ],
    },
    {
        img: "/assets/img/Jajanan/Ketoprak.webp",
        title: "Seger Waras",
        description: "Specially designed for those who are on their healing journey from certain health conditions.",
        goal: "Detoxification, hormone balancing, and healing",
        menu: "Ketoprak bumbu mente with steamed organic tofu, tempeh, and boiled egg",
        included: [
            "6 days package",
            "2 healthy main course",
            "1 healthy beverage (cold-pressed juice or smoothies)",
            "1.300 calories/day",
        ],
    },
    {
        img: "/assets/img/Utama/Gado-Gado3.webp",
        title: "SingSet",
        description: "Who says weight loss should be dull and agonizing? Our singset menu will indulge your tongue and make the body's goals journey fun.",
        goal: "Weight loss, increased fullness, detoxification, and reduced craving for unhealthy food",
        menu: "Gado-gado bumbu kenari with organic tofu and omega egg",
        included: [
            "6 days package",
            "2 healthy main course",
            "1 healthy beverage (cold-pressed juice or smoothies)",
            "1.200 calories/day",
        ],
    },
    {
        img: "/assets/img/Utama/NasiTimbel3.webp",
        title: "Ibu Suri",
        description: "Every mother is a warrior. They deserve nutrient-dense meals to support their miraculous phase as women: pregnancy and breastfeeding.",
        goal: "Nutrition booster, ASI booster, and post-birth care",
        menu: "Nasi timbel beras merah with Sundanese sayur asem and ungkep chicken",
        included: [
            "6 days package",
            "2 healthy main course",
            "2 healthy beverage (cold-pressed juice or smoothies)",
            "2 healthy desserts/appetizers",
            "1.600 - 1.800 calories/day",
        ],
    },
];

export default function plansPage() {
    return (
        <main>
            <HeaderWithBG
                subtitle="A Plan for"
                title="Better Minds and Bodies"
                backgroundImageUrl="/assets/img/Perayaan/NasiBancaan.webp"
                titleId="menu-title"
            />
            <article className="flex items-center justify-center mx-auto px-4 py-8" section="plans-meal">
                <div className="container gap-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center">
                    {plans.map((plan) => (
                        <PlanTable key={plan.title} {...plan} />
                    ))}
                </div>
            </article>
        </main>
    )
}