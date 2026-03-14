import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay, Parallax } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/effect-fade"

export default function Carrousel({ items = [] }) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
            effect="fade"
            spaceBetween={50}
            slidesPerView={1}
            style={{ width: "100%", height: "100%" }}
            loop={true}
            navigation
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
        >
            {items.map((item, index) => (
                <SwiperSlide
                    key={index}
                    className="bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                    <div className="w-full h-full hidden md:flex px-20 items-center bg-black/40">
                        <div className="text-white flex gap-5 flex-col max-h-xl">
                            <h3 className="font-bold text-7xl">{item.title}</h3>
                            <hr className="my-2 bg-neutral-quaternary" />
                            <p className="text-2xl">{item.description}</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex md:hidden items-end p-10 bg-black/40">
                        <div className="text-white flex gap-5 flex-col max-h-xl">
                            <h3 className="font-bold text-6xl">{item.title}</h3>
                            <hr className="my-1 bg-neutral-quaternary" />
                            <p className="text-xl">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}