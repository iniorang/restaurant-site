import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

export default function Carrousel({ items = [], ariaLabel = "Carrousel" }) {
    const hasMultipleItems = items.length > 1
    const [loadedIndexes, setLoadedIndexes] = useState(() => new Set([0]))

    if (items.length === 0) {
        return (
            <div className="flex h-full items-center justify-center px-6 text-center">
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
            onSlideChange={(swiper) => {
                const index = swiper.realIndex
                setLoadedIndexes((current) => {
                    if (current.has(index)) return current
                    return new Set(current).add(index)
                })
            }}
            aria-label={ariaLabel}
        >
            {items.map((item, index) => (
                <SwiperSlide
                    key={item.id ?? item.imageUrl ?? index}
                    className="relative flex h-screen overflow-hidden bg-seed-bg"
                >
                    {loadedIndexes.has(index) && (
                        <img
                            src={item.imageUrl}
                            alt={item.alt ?? item.title}
                            className="absolute inset-0 h-full w-full object-cover"
                            fetchPriority={index === 0 ? "high" : "auto"}
                            decoding="async"
                        />
                    )}
                    <div className="absolute bottom-0 left-0 flex h-1/6 w-full items-center bg-black/40 p-5">
                        <div className="flex flex-col text-white">
                            <h2 className="text-4xl font-bold md:text-6xl">
                                {item.title}
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}