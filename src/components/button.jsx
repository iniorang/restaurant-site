import React from "react";
const baseStyles =
    "inline-flex items-center justify-center gap-2 font-bold py-2 px-4 transition-colors cursor-pointer";

const variantStyles = {
    solid: "bg-accent hover:bg-accent-dark text-white",
    outlined:
        "border-2 border-accent text-white hover:bg-accent-dark hover:border-accent-dark",
};

export function Button({
    name,
    header,
    subheader,
    onClick,
    icon,
    iconOnly = false,
    ariaLabel,
    variant = "solid",
    className = "",
}) {
    const isTwoLine = header || subheader;
    const buttonStyles = isTwoLine ? "w-full justify-start" : "";
    const iconOnlyStyles = iconOnly ? "size-12 rounded-full p-0" : "";

    return (
        <button
            aria-label={ariaLabel}
            className={`${baseStyles} ${buttonStyles} ${iconOnlyStyles} ${variantStyles[variant] || variantStyles.solid} ${className}`}
            onClick={onClick}
        >
            {icon && (
                <i className={isTwoLine ? `${icon} text-4xl align-middle p-0.5 leading-none` : icon}></i>
            )}
            {isTwoLine ? (
                <span className="flex w-full flex-col gap-y-0.5 items-start text-start">
                    {header && (
                        <>
                            <p>{header}</p>
                            <div className="w-full border-b border-white" />
                        </>
                    )}
                    {subheader && <span>{subheader}</span>}
                </span>
            ) : (
                name && <span>{name}</span>
            )}
        </button>
    );
}