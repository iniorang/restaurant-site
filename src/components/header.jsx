import useParallax from "../hook/useParallax";

export function HeaderWithoutBG({
    subtitle,
    title,
    titleId,
    subtitleColor = "text-apple-red",
    titleColor = "text-leaf",
    align = "text-left",
    className = ""
}) {
    return (
        <div className={`flex flex-col ${className}`}>
            {subtitle && (
                <p className={`font-semibold uppercase tracking-widest ${subtitleColor}`}>
                    {subtitle}
                </p>
            )}
            <h2 id={titleId} className={`text-5xl font-extrabold mb-6 leading-tight ${align} ${titleColor}`}>
                {title}
            </h2>
        </div>
    );
}

export function HeaderWithBG({ subtitle, title, backgroundImageUrl, titleId }) {
    const bgRef = useParallax(0.35);

    return (
        <section
            className="relative flex min-h-[70vh] items-end overflow-hidden"
            aria-labelledby={titleId}
        >
            <img
                ref={bgRef}
                src={backgroundImageUrl}
                alt=""
                className="absolute inset-0 h-[125%] w-full object-cover will-change-transform pointer-events-none"
            />
            <div className="absolute inset-0 bg-seed-bg/60" />
            <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:px-12">
                <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-white">
                    {subtitle}
                </p>
                <h1 id={titleId} className="text-5xl font-extrabold leading-tight text-left text-white md:text-7xl">
                    {title}
                </h1>
            </div>
        </section>
    );
}