import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";

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
        <main className="home-page">
            <section className="home-hero" id="hero-section">
                <div className="home-hero__image" aria-hidden="true" />
                <div className="home-hero__wash" aria-hidden="true" />
                <div className="home-hero__inner">
                    <div className="home-hero__panel">
                        <img src="/assets/img/logo2.png" alt="Warung Hati" className="home-hero__logo" />
                        <p className="home-kicker">Indonesian heritage, held with care</p>
                        <h1>Food that carries a place, a memory, a little heart.</h1>
                        <p className="home-hero__lede">
                            Traditional Indonesian dishes made with indigenous herbs, natural ingredients, and the patience they deserve.
                        </p>
                        <div className="home-hero__actions">
                            <Button name="Explore the menu" onClick={() => navigate('/menu')} />
                            <button className="home-text-link" type="button" onClick={() => navigate('/aboutus')}>
                                Meet Warung Hati <span aria-hidden="true">↗</span>
                            </button>
                        </div>
                    </div>
                    <div className="home-hero__note" aria-label="Warung Hati introduction">
                        <span className="home-hero__note-line" />
                        <span>From the archipelago<br />to your table</span>
                    </div>
                </div>
            </section>

            <section className="home-intro page-shell" id="short-intro">
                <div className="home-intro__copy">
                    <p className="home-kicker">A living tradition</p>
                    <h2>Modern in the way we care. Traditional in what we serve.</h2>
                    <p>
                        Warung Hati brings the richness of Indonesia's cultural heritage to the table through recipes shaped by indigenous herbs, spices, and natural ingredients. We keep the wisdom intact, then make room for you.
                    </p>
                    <button className="home-text-link home-text-link--green" type="button" onClick={() => navigate('/aboutus')}>
                        Our story <span aria-hidden="true">↗</span>
                    </button>
                </div>
                <div className="home-intro__images" aria-label="Warung Hati ingredients and partners">
                    <figure className="home-image home-image--main">
                        <img src="/assets/img/Utama/NasiBetutu.png" alt="Nasi Betutu, a Balinese spiced dish" />
                        <figcaption>Slow-cooked, spice-wrapped Nasi Betutu</figcaption>
                    </figure>
                    <figure className="home-image home-image--small">
                        <img src="/assets/img/aboutus/OurPartnerOrganicFarmerFromSidoarjo.jpeg" alt="A local organic farmer partner" />
                        <figcaption>Grown with our partners</figcaption>
                    </figure>
                    <span className="home-stamp" aria-hidden="true">from<br />the soil</span>
                </div>
            </section>

            <section className="home-featured" id="our-recommendation" aria-labelledby="featured-title">
                <div className="page-shell">
                    <div className="home-section-heading">
                        <div>
                            <p className="home-kicker">The table is open</p>
                            <h2 id="featured-title">A few favourites, today.</h2>
                        </div>
                        <button className="home-text-link home-text-link--green" type="button" onClick={() => navigate('/menu')}>
                            See the full menu <span aria-hidden="true">↗</span>
                        </button>
                    </div>
                    {menuError ? (
                        <p className="home-message home-message--error">{menuError}</p>
                    ) : foodRecommendations.length === 0 ? (
                        <p className="home-message">Gathering today's dishes...</p>
                    ) : (
                        <div className="home-dishes">
                            {foodRecommendations.slice(0, 3).map((item, index) => (
                                <article className={`home-dish home-dish--${index + 1}`} key={item.id}>
                                    <div className="home-dish__image-wrap">
                                        <img src={item.imageUrl} alt={item.alt} className="home-dish__image" />
                                        <span className="home-dish__number">0{index + 1}</span>
                                    </div>
                                    <div className="home-dish__copy">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="home-contact page-shell" id="contact-us">
                <div className="home-contact__intro">
                    <p className="home-kicker">Come closer</p>
                    <h2>Save a seat in the story.</h2>
                    <p>Have a question, a special request, or simply want to say hello? We would love to hear from you.</p>
                </div>
                <div className="home-contact__details">
                    <Button header="Email" subheader="info@warunghati.com" icon="fi fi-rr-envelope" />
                    <Button header="WhatsApp" subheader="+62 812-3456-7890" icon="fi fi-brands-whatsapp" />
                    <div className="home-socials">
                        <span>Follow the table</span>
                        <Button icon="fi fi-brands-instagram" iconOnly ariaLabel="Instagram Warung Hati" onClick={() => window.open("https://www.instagram.com/warunghati", "_blank", "noopener,noreferrer")} />
                        <Button icon="fi fi-brands-facebook" iconOnly ariaLabel="Facebook Warung Hati" onClick={() => window.open("https://www.facebook.com/profile.php?id=100080306831431", "_blank", "noopener,noreferrer")} />
                    </div>
                </div>
            </section>
        </main>
    )
}