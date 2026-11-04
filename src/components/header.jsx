export function HeaderWithoutBG({ subtitle, title, titleId, subtitleColor = "text-apple-red", titleColor = "text-leaf"
}) {
    return (
        <div className="flex flex-col">
            <p className={`font-semibold uppercase tracking-widest ${subtitleColor}`}>
                {subtitle}
            </p>
            <h2 id={titleId} className={`text-5xl font-extrabold mb-6 leading-tight text-left ${titleColor}`}>
                {title}
            </h2>
        </div>
    );
}

export function HeaderWithBG({ subtitle, title, backgroundImageUrl, titleId }) {
    return (
        <section
            className="relative flex min-h-[70vh] items-end bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            aria-labelledby={titleId}
        >
            <div className="absolute inset-0 bg-leaf/65" />
            <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:px-12">
                <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-white">
                    {subtitle}
                </p>
                <h1 id={titleId} className="max-w-3xl text-5xl font-extrabold leading-tight text-left text-white md:text-7xl">
                    {title}
                </h1>
            </div>
        </section>
    );
}