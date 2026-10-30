const plans = [
	{
		title: "A balanced table",
		image: "/assets/img/Utama/NasiCampurBali.png",
		description: "A considered mix of vegetables, grains, and comforting Indonesian favourites for everyday nourishment.",
	},
	{
		title: "A plant-rich table",
		image: "/assets/img/Utama/Gado-Gado3.png",
		description: "Let indigenous vegetables, tofu, tempeh, and peanut sauces take the lead in a colourful spread.",
	},
	{
		title: "A table for gathering",
		image: "/assets/img/Perayaan/NasiBancaan.png",
		description: "For shared moments: generous plates, familiar spices, and the pleasure of eating together.",
	},
];

export default function PlansPage() {
	return (
		<main className="plans-page page-shell">
			<header className="page-masthead plans-masthead">
				<h1>Make a little room<br /><em>for feeling well.</em></h1>
				<p>Our meal plans bring together healthy meals, familiar flavours, and the everyday ritual of taking care of yourself and the people around you.</p>
			</header>
			<section className="plans-list" aria-label="Meal plan approaches">
				{plans.map((plan) => (
					<article className="plan-row" key={plan.title}>
						<img src={plan.image} alt="" />
						<div>
							<h2>{plan.title}</h2>
							<p>{plan.description}</p>
						</div>
					</article>
				))}
			</section>
			<section className="plans-note">
				<h2>Every table can be made personal.</h2>
				<p>Tell us what you are looking for and we can talk through the dishes, ingredients, and rhythm that fit your day.</p>
				<a className="home-text-link home-text-link--green" href="mailto:info@warunghati.com">Email Warung Hati <span className="arrow-mark" aria-hidden="true" /></a>
			</section>
		</main>
	);
}
