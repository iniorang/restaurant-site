import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y, EffectFade, Autoplay, Thumbs, FreeMode, Mousewheel } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "swiper/css/thumbs"
import "swiper/css/free-mode"

export default function Carrousel({ items = [], ariaLabel = "Carrousel", loading = false }) {
    const hasMultipleItems = items.length > 1
    const [loadedIndexes, setLoadedIndexes] = useState(() => new Set([0]))
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    if (loading) {
        return (
            <SkeletonCarrousel/>
        )
    }


    return (
        <div className="relative flex h-full w-full flex-col gap-3 bg-apple-card p-3 md:flex-row">
            <div className="relative h-4/5 w-full overflow-hidden md:h-full md:flex-1">
                <Swiper
                    modules={[Navigation, Pagination, A11y, EffectFade, Autoplay, Thumbs]}
                    thumbs={{
                        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                    }}
                    effect="fade"
                    slidesPerView={1}
                    className="h-full w-full"
                    loop={hasMultipleItems}
                    navigation={hasMultipleItems}
                    pagination={hasMultipleItems ? { clickable: true } : false}
                    autoplay={
                        hasMultipleItems
                            ? {
                                  delay: 5000,
                                  disableOnInteraction: false,
                                  pauseOnMouseEnter: true,
                              }
                            : false
                    }
                    onSlideChange={(swiper) => {
                        const index = swiper.realIndex
                        setLoadedIndexes((current) => {
                            if (current.has(index)) return current
                            return new Set(current).add(index)
                        })
                    }}
                    aria-label={ariaLabel}
                    mousewheel={true}
                >
                    {items.map((item, index) => (
                        <SwiperSlide
                            key={item.id ?? item.imageUrl ?? index}
                            className="relative flex h-full w-full overflow-hidden bg-seed-bg"
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
                            <div className="absolute bottom-0 left-0 flex h-1/5 landscape:h-1/3 md:h-1/6 landscape:md:h-1/5 w-full items-center bg-black/40 p-5">
                                <div className="flex flex-col text-white">
                                    <h2 className="text-3xl font-bold md:text-5xl mb-2">
                                        {item.title}
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {hasMultipleItems && (
                <div className="h-1/5 w-full md:h-full md:w-36 lg:w-64">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        modules={[FreeMode, Thumbs]}
                        spaceBetween={12}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        breakpoints={{
                            768: {
                                direction: "vertical",
                                slidesPerView: 4,
                            },
                        }}
                        className="h-full w-full"
                    >
                        {items.map((item, index) => (
                            <SwiperSlide
                                key={`thumb-${item.id ?? item.imageUrl ?? index}`}
                                className="group relative cursor-pointer overflow-hidden rounded-sm border-2 border-transparent transition-colors duration-300 [&.swiper-slide-thumb-active]:border-apple-red [&.swiper-slide-thumb-active>div]:opacity-0"
                            >
                                <img
                                    src={item.imageUrl}
                                    alt={item.alt ?? item.title}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-white/50 transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    )
}

export function SkeletonCarrousel() {
    return (
        <div className="relative flex h-full w-full flex-col gap-3 bg-apple-card p-3 md:flex-row animate-pulse">
            <div className="relative h-4/5 w-full rounded-lg bg-neutral-300 dark:bg-neutral-700 md:h-full md:flex-1 flex items-end p-6">
                <div className="h-8 w-1/2 rounded bg-neutral-400 dark:bg-neutral-600" />
            </div>
            <div className="hidden h-full flex-col gap-3 md:flex md:w-36 lg:w-64">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-1/4 w-full rounded bg-neutral-300 dark:bg-neutral-700"
                    />
                ))}
            </div>
        </div>
    );
}