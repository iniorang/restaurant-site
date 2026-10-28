import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

export default function Carrousel({ items = [], ariaLabel = "Carrousel" }) {
    const hasMultipleItems = items.length > 1

    if (items.length === 0) {
        return (
            <div className="flex h-full items-center justify-center bg-background px-6 text-center">
                <p className="text-lg text-primary">Loading</p>
            </div>
        )
    }

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
            effect="fade"
            slidesPerView={1}
            className="h-full w-full"
            loop={hasMultipleItems}
            navigation={hasMultipleItems}
            pagination={hasMultipleItems ? { clickable: true } : false}
            autoplay={hasMultipleItems ? {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            } : false}
            aria-label={ariaLabel}
        >
            {items.map((item, index) => (
                <SwiperSlide
                    key={item.id ?? item.imageUrl ?? index}
                    className="relative flex h-screen overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: `url("${item.imageUrl}")` }}
                >
                    <div className="flex h-full w-full items-end bg-black/40 p-10 py-20 lg:items-center md:px-20">
                        <div className="flex max-w-2xl flex-col gap-5 text-white">
                            <h2 className="text-5xl font-bold md:text-7xl">{item.title}</h2>
                            <hr className="my-1 bg-neutral-quaternary md:my-2" />
                            <p className="text-xl md:text-2xl">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}