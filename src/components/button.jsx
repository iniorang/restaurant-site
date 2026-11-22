const baseStyles =
    "items-center border-b-2 rounded-lg px-5 py-3 gap-2 font-bold py-2 px-4 transition-colors cursor-pointer";

const variantStyles = {
    solid: "bg-apple-red hover:bg-apple-red-hover text-white",
    outlined:
        "border-2 border-accent text-apple-red hover:bg-apple-red-hover hover:border-apple-red-hover hover:text-apple-cream",
};

export function Button({ name, onClick, className = "", variant = "solid", ariaLabel }) {
    return (
        <button
            aria-label={ariaLabel}
            className={`${baseStyles} ${variantStyles[variant] || variantStyles.solid} ${className}`}
            onClick={onClick}
        >
            {name}
        </button>
    )
}

export function TextButton({ name, onClick, className = "" }) {
    return (
        <button
            type="button"
            className={`font-bold text-apple-red-hover w-fit text-start hover:text-apple-red cursor-pointer transition ${className}`}
            onClick={onClick}
        >
            {name}
            <i className="fi fi-rr-arrow-up-right-from-square ml-1 text-lg" />
        </button>
    )
}