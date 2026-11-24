import { useState } from "react";

export default function Card({
    title,
    description,
    imageUrl,
    alt = title,
    className = "",
    loadMode = "lazy",
    imageClassName = "aspect-square",
    descriptionClassName = "line-clamp-3"
}) {
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <article className={`flex h-full flex-col bg-apple-card p-4 shadow-xl transition-transform duration-300 hover:scale-[1.01] ${className}`}>
            <div className={`relative min-h-48 w-full overflow-hidden bg-neutral-300 dark:bg-neutral-700 ${imageClassName}`}>
                {!isLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-neutral-300 dark:bg-neutral-700" />
                )}
                <img
                    src={imageUrl}
                    alt={alt}
                    loading={loadMode}
                    decoding="async"
                    onLoad={() => setIsLoaded(true)}
                    className={`h-full w-full object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"
                        }`}
                />
            </div>
            <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                <h3 className="mb-2 text-2xl font-semibold text-apple-heading">{title}</h3>
                <p className={`mb-4 text-apple-body ${descriptionClassName}`}>{description}</p>
            </div>
        </article>
    )
}

export function CardSkeleton({ className = "" }) {
    return (
        <article className={`flex h-full flex-col bg-apple-card p-4 shadow-xl animate-pulse ${className}`}>
            <div className="min-h-48 w-full aspect-square bg-neutral-300 dark:bg-neutral-700 rounded-md" />
            <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                <div className="mb-3 h-7 w-3/4 rounded bg-neutral-300 dark:bg-neutral-700" />
                <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
                    <div className="h-4 w-4/5 rounded bg-neutral-200 dark:bg-neutral-800" />
                </div>
            </div>
        </article>
    );
}