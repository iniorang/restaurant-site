import React from "react"

export default function MainPage() {
    return (
        <main>
            <section className="bg-[url('/assets/img/Utama/NasiCampurBali2.png')] bg-cover bg-center bg-no-repeat w-full h-screen flex bg-black/50 bg-blend-darken" id="hero-section">
                <div className="flex items-center justify-between px-10">
                    <div>
                        <h1 className="text-white text-9xl">
                            Lorem ipsum dolor sit
                        </h1>
                        <p className="text-white z-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.
                        </p>
                    </div>
                    <div className="bg-white/50 p-5 rounded-lg ml-10">
                        <p>test</p>
                        <p>test</p>
                        <p>test</p>
                    </div>
                </div>
            </section>
        </main>
    )
}