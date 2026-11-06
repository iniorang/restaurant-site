import { HeaderWithoutBG, HeaderWithBG } from "../components/header";
import Card from "../components/card";

const commitments = [
    {
        title: "Delicious and Healthy Meals with Balanced Proteins",
        image: "/assets/img/Utama/NasiCampurBali.webp",
        alt: "Balanced Indonesian meal",
        description:
            "We make healthy food delicious by using more plant-based sources and handpicking organic animal-based protein in moderate proportions.",
    },
    {
        title: "From Community To Community",
        image: "/assets/img/aboutus/CollaborationwithSurabayaSehatCommunityandItsArtisans,Farmers,andProducers 2.webp",
        alt: "Collaboration with the Surabaya Sehat community",
        description:
            "Collaboration is the secret ingredient in our recipe for success. We empower underprivileged women by creating opportunities, building skills, and supporting brighter futures for their families.",
    },
    {
        title: "Empowering Local Producers",
        image: "/assets/img/aboutus/OurPartnerOrganicFarmerFromSidoarjo.webp",
        alt: "Organic farmer partner from Sidoarjo",
        description:
            "We proudly use indigenous and natural ingredients from nearby farmers and producers across Indonesia, including brown rice from Banyuwangi, vegetables from Mojokerto, and sea salt from Bali.",
    },
    {
        title: "Inclusive Pricing",
        image: "/assets/img/aboutus/HealthyFoodDonationtoOrphanage.webp",
        alt: "Healthy food donation to an orphanage",
        description:
            'Our local ingredients help us offer diverse products at accessible prices. Through our "Buy 1, Give 1" program, customers can share healthy meals with people in need.',
    },
    {
        title: "Environmentally Responsible",
        image: "/assets/img/aboutus/DegradableCupForTakeaway.webp",
        alt: "Eco-friendly takeaway packaging",
        description:
            "Nourishing the body while saving the world is our pledge. We use natural, biodegradable products and encourage customers to bring their own containers.",
    },
    {
        title: "Health and Sustainability Education",
        image: "/assets/img/aboutus/HealthyFoodEducationtoYoungsters1.webp",
        alt: "Health and sustainability education for youngsters",
        description:
            "We nurture the next generation through farmers markets, hands-on cooking classes, and campaigns that promote wholesome local food and sustainable living.",
    },
];

export default function AboutPage() {
    return (
        <main>
            <HeaderWithBG
                subtitle="Our story"
                title="The Story of Hati"
                backgroundImageUrl="/assets/img/aboutus/SeminaraboutFoodandItsImpact.webp"
                titleId="about-title"
            />
            <section
                className="flex items-center justify-center bg-background px-4 py-24 md:px-0 md:py-32"
                aria-labelledby="story-heading"
                id="story-section"
            >
                <div className="container mx-auto flex w-full flex-col items-center justify-center gap-10 md:flex-row">
                    <div className="w-full overflow-hidden rounded-lg p-5 md:basis-3/5">
                        <img
                            src="/assets/img/aboutus/HealthyFoodEducationtoYoungsters3.webp"
                            alt="Healthy food education session with youngsters"
                            className="h-full min-h-96 w-full rounded-lg object-cover object-left"
                        />
                    </div>
                    <div className="flex w-full flex-col justify-center md:basis-2/6">
                        <HeaderWithoutBG
                            subtitle="A journey driven by purpose"
                            title={'The Story of "Hati"'}
                            titleId="story-heading"
                        />
                        <div className="space-y-5 text-lg leading-relaxed">
                            <p>
                                In Bahasa, "Hati" means heart. We pour our hearts into every dish we create and everything we
                                do. Warung Hati is more than a catering service; it is a journey driven by passion and purpose.
                            </p>
                            <p>
                                Our story began in January 2017, when Farid, a passionate health activist in Surabaya, set out
                                to bring health and wellness to the heart of our community.
                            </p>
                            <p>
                                Warung Hati grew from a response to Indonesia’s growing health challenges. We believe food can
                                transform individual wellbeing while supporting environmental sustainability, local farmers,
                                and the wider community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-seed-body px-6 py-24 md:px-12" aria-labelledby="commitment-heading">
                <div className="mx-auto max-w-7xl">
                    <HeaderWithoutBG
                        subtitle="What we stand for"
                        title="Warung Hati’s Impact Commitment"
                        titleId="commitment-heading"
                        titleColor="text-seed"
                        subtitleColor="text-apple-red-bright"
                    />
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {commitments.map((commitment) => (
                            <Card
                                key={commitment.title}
                                title={commitment.title}
                                description={commitment.description}
                                imageUrl={commitment.image}
                                alt={commitment.alt}
                                descriptionClassName=""
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}