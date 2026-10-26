export function HeaderWithoutBG({ subtitle, title }) {
    return (
        <div className="flex flex-col">
            <p className="font-semibold uppercase tracking-widest text-accent">
                {subtitle}
            </p>
            <h2 className="text-5xl font-extrabold text-primary mb-6 leading-tight text-left">
                {title}
            </h2>
        </div>
    );
}