import React from "react"

export default function MainPage() {
    return (
        <main>
            <section className="bg-[url('/assets/img/Utama/NasiCampurBali2.png')] bg-cover bg-center bg-no-repeat w-full h-screen flex bg-black/50 bg-blend-darken" id="hero-section">
                <div className="flex justify-between px-10 py-5 w-full h-full">
                    <div className="flex flex-col justify-center max-w-4xl">
                        <h1 className="text-white font-extrabold text-8xl mb-10">
                            Lorem ipsum dolor sit
                        </h1>
                        <h2 className="text-white text-lg max-w-xl mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.
                        </h2>
                        <section className="flex items-center gap-5 mt-5" id="cta">
                            <button className="text-white font-bold py-2 px-4 rounded bg-accent hover:bg-accent-dark">
                                Explore Menu
                            </button>
                            <p className="text-white">Or</p>
                            <button className="text-white font-bold py-2 px-4 rounded border-2 border-accent hover:border-accent-dark">
                                Learn More
                            </button>
                        </section>
                    </div>
                    <div className="bg-white/50 p-5 rounded-lg text-end self-end">
                        <p>Nama Makanan</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>
            <section>
                
            </section>
        </main>
    )
}