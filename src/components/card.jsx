export default function Card({
    title,
    description,
    imageUrl,
    alt = title,
    className = "",
    imageClassName = "aspect-square",
    descriptionClassName = "line-clamp-3"
}) {
    return (
        <article className={`flex h-full flex-col bg-apple-card p-4 shadow-xl transition-transform duration-300 hover:scale-[1.01] ${className}`}>
            <img
                src={imageUrl}
                alt={alt}
                className={`min-h-48 w-full object-cover ${imageClassName}`}
            />
            <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                <h3 className="mb-2 text-2xl font-semibold text-apple-heading">{title}</h3>
                <p className={`mb-4 text-apple-body ${descriptionClassName}`}>{description}</p>
            </div>
        </article>
    );
}