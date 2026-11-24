import { useEffect, useRef } from "react";

export default function useParallax(speed = 0.35) {
    const elementRef = useRef(null);

    useEffect(() => {
        let animationFrameId;

        const handleScroll = () => {
            if (!elementRef.current) return;
            const scrollY = Math.max(0, window.scrollY);
            if (scrollY <= window.innerHeight * 1.5) {
                elementRef.current.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
            }
        };

        const onScroll = () => {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(handleScroll);
        };

        // Jalankan sekali saat pertama kali di-load agar langsung sinkron tanpa pop/jump
        handleScroll();

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [speed]);

    return elementRef;
}
