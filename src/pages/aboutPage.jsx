import { HeaderWithoutBG, HeaderWithBG } from "../components/header";

const commitments = [
    {
        title: "Delicious and Healthy Meals with Balanced Proteins",
        image: "/assets/img/Utama/NasiCampurBali.png",
        alt: "Balanced Indonesian meal",
        description:
            "We make healthy food delicious by using more plant-based sources and handpicking organic animal-based protein in moderate proportions.",
    },
    {
        title: "From Community To Community",
        image: "/assets/img/aboutus/CollaborationwithSurabayaSehatCommunityandItsArtisans,Farmers,andProducers 2.jpg",
        alt: "Collaboration with the Surabaya Sehat community",
        description:
            "Collaboration is the secret ingredient in our recipe for success. We empower underprivileged women by creating opportunities, building skills, and supporting brighter futures for their families.",
    },
    {
        title: "Empowering Local Producers",
        image: "/assets/img/aboutus/OurPartnerOrganicFarmerFromSidoarjo.jpeg",
        alt: "Organic farmer partner from Sidoarjo",
        description:
            "We proudly use indigenous and natural ingredients from nearby farmers and producers across Indonesia, including brown rice from Banyuwangi, vegetables from Mojokerto, and sea salt from Bali.",
    },
    {
        title: "Inclusive Pricing",
        image: "/assets/img/aboutus/HealthyFoodDonationtoOrphanage.jpg",
        alt: "Healthy food donation to an orphanage",
        description:
            'Our local ingredients help us offer diverse products at accessible prices. Through our "Buy 1, Give 1" program, customers can share healthy meals with people in need.',
    },
    {
        title: "Environmentally Responsible",
        image: "/assets/img/aboutus/DegradableCupForTakeaway.JPG",
        alt: "Eco-friendly takeaway packaging",
        description:
            "Nourishing the body while saving the world is our pledge. We use natural, biodegradable products and encourage customers to bring their own containers.",
    },
    {
        title: "Health and Sustainability Education",
        image: "/assets/img/aboutus/HealthyFoodEducationtoYoungsters1.JPG",
        alt: "Health and sustainability education for youngsters",
        description:
            "We nurture the next generation through farmers markets, hands-on cooking classes, and campaigns that promote wholesome local food and sustainable living.",
    },
];

export default function AboutPage() {
    return (
        <main className="bg-background ">
            <HeaderWithBG
                subtitle="Our story"
                title="The Story of Hati"
                backgroundImageUrl="/assets/img/aboutus/HealthyFoodEducationtoYoungsters2.jpg"
                titleId="about-title"
            />
            <section
                className="flex lg:flex-row flex-col"
                aria-labelledby="story-heading"
            >
                <div className="overflow-hidden lg:basis-3/5">
                    <img
                        src="/assets/img/aboutus/HealthyFoodEducationtoYoungsters3.jpg"
                        alt="Healthy food education session with youngsters"
                        className="h-full min-h-96 w-full object-cover object-left"
                    />
                </div>
                <div className="flex flex-col justify-center gap-y-5 px-4 py-12 md:px-11 md:py-24 lg:basis-2/5">
                    <HeaderWithoutBG
                        subtitle="A journey driven by purpose"
                        title={'The Story of "Hati"'}
                        titleId="story-heading"
                    />
                    <div className="space-y-5 text-lg leading-relaxed">
                        <p>
                            In Bahasa, “Hati” means heart. We pour our hearts into every dish we create and everything we
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
            </section>

            <section className="bg-white px-6 py-24 md:px-12" aria-labelledby="commitment-heading">
                <div className="mx-auto max-w-7xl">
                    <HeaderWithoutBG
                        subtitle="What we stand for"
                        title="Warung Hati’s Impact Commitment"
                        titleId="commitment-heading"
                    />
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {commitments.map((commitment) => (
                            <article
                                key={commitment.title}
                                className="overflow-hidden rounded-2xl bg-background shadow-lg transition-transform duration-300 hover:-translate-y-2"
                            >
                                <img
                                    src={commitment.image}
                                    alt={commitment.alt}
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="mb-3 text-2xl font-bold text-primary">
                                        {commitment.title}
                                    </h3>
                                    <p className="leading-relaxed">{commitment.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}