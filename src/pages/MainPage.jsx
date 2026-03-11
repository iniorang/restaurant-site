import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y, Parallax, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/parallax"
import "swiper/css/effect-fade"


export default function MainPage() {
    return (
        <main>
            <section className="bg-[url('/assets/img/Utama/NasiCampurBali2.png')] bg-cover bg-fixed bg-center bg-no-repeat w-full h-screen flex bg-black/50 bg-blend-darken" id="hero-section">
                <div className="flex justify-between pl-15 pr-5 py-5 w-full h-full">
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
                            <button className="text-white font-bold py-2 px-4 rounded border-2 border-accent hover:border-accent-dark">
                                Learn More
                            </button>
                        </section>
                    </div>
                    <div className="bg-white/50 p-5 hidden md:flex md:flex-col rounded-lg text-end self-end">
                        <p>Nama Makanan</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>
            <section className="bg-background py-24 px-4" id="short-intro">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="relative h-125 w-full">
                        <img
                            src="\assets\img\Utama\NasiBetutu.png"
                            alt="Freshly cooked meal"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 h-auto object-cover rounded-lg shadow-xl transform -rotate-3"
                        />
                        <img
                            src="\assets\img\aboutus\OurPartnerOrganicFarmerFromSidoarjo.jpeg"
                            alt="Our local farmer"
                            className="absolute top-5 left-5 w-4/12 h-auto object-cover rounded-lg shadow-lg border-4 border-white transform rotate-6"
                        />
                        <img
                            src="/assets/img/Minuman/EsCendol.png"
                            alt="Refreshing Es Cendol"
                            className="absolute bottom-5 right-5 w-5/12 h-auto object-cover rounded-lg shadow-2xl border-4 border-white transform -rotate-6"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-secondary font-bold text-lg mb-2">Welcome to Warung Hati</h3>
                        <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </h2>
                        <p className="text-gray-600 mb-4 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptates praesentium quia, eveniet tenetur incidunt dicta maiores fuga quasi provident illum est atque. Quaerat sequi, enim dicta libero voluptas nemo.
                        </p>
                        <p className="text-gray-600 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet expedita corrupti aliquam commodi porro
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full h-screen " id="our-pick">
                <div className="mx-auto flex flex-col justify-center h-full">
                    <div className="py-15 bg-primary">
                        <h1 className="text-white font-extrabold text-center text-5xl md:text-8xl mb-10">
                            Our Recomendation
                        </h1>
                    </div>
                    <div className="w-full h-full">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                            effect="fade"
                            spaceBetween={50}
                            slidesPerView={1}
                            style={{ width: "100%", height: "100%"}}
                            loop={true}
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide className="bg-cover bg-center bg-[url('/assets/img/Utama/NasiCampurBali2.png')]">
                                <div className="relative w-full h-full flex items-end p-4 bg-black/40">
                                    <div className="text-white">
                                        <h3 className="text-2xl font-bold">Nasi Campur Bali</h3>
                                        <p>Nasi campur khas Bali dengan berbagai macam lauk pauk pilihan.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="bg-cover bg-center bg-[url('/assets/img/Utama/NasiBetutu.png')]">
                                <div className="relative w-full h-full flex items-end p-4 bg-black/40">
                                    <div className="text-white">
                                        <h3 className="text-2xl font-bold">Nasi Betutu</h3>
                                        <p>Ayam betutu pedas yang disajikan dengan nasi hangat dan sambal matah.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="bg-cover bg-position-[50%_70%] bg-[url('/assets/img/Minuman/EsCendol.png')]">
                                <div className="relative w-full h-full flex items-end p-4 bg-black/40">
                                    <div className="text-white">
                                        <h3 className="text-2xl font-bold">Es Cendol</h3>
                                        <p>Minuman segar dengan cendol, santan, dan gula merah.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </main>
    )
}