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
        <main className="about-page">
            <section className="about-hero page-shell">
                <div>
                    <h1>The heart behind<br /><em>the table.</em></h1>
                </div>
                <img src="/assets/img/aboutus/HealthyFoodEducationtoYoungsters2.jpg" alt="A Warung Hati food education session with young people" />
            </section>

            <section className="about-story page-shell" aria-labelledby="story-heading">
                <div className="about-story__lead">
                    <h2 id="story-heading">Hati means heart.</h2>
                </div>
                <div className="about-story__copy">
                    <p>In Bahasa, “Hati” means heart. We pour ours into every dish we create and everything we do. Warung Hati is more than a catering service; it is a journey driven by passion and purpose.</p>
                    <p>Our story began in January 2017, when Farid, a passionate health activist in Surabaya, set out to bring health and wellness to the heart of our community.</p>
                    <p>We believe food can transform individual wellbeing while supporting environmental sustainability, local farmers, and the wider community.</p>
                </div>
            </section>

            <section className="about-commitments" aria-labelledby="commitment-heading">
                <div className="page-shell">
                    <div className="about-section-heading">
                        <div>
                            <h2 id="commitment-heading">Good food has a wider table.</h2>
                        </div>
                        <p>Our commitments show up in the ingredients we choose, the people we work with, and the knowledge we share.</p>
                    </div>
                    <div className="about-commitment-list">
                        {commitments.map((commitment) => (
                            <article className="about-commitment" key={commitment.title}>
                                <img src={commitment.image} alt={commitment.alt} />
                                <div>
                                    <h3>{commitment.title}</h3>
                                    <p>{commitment.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}