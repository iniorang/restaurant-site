import React from "react";
const baseStyles = "button items-center gap-2 cursor-pointer";

const variantStyles = {
    solid: "button--solid",
    outlined: "button--outline",
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
    const buttonStyles = isTwoLine ? "button--wide" : "";
    const iconOnlyStyles = iconOnly ? "button--icon-only" : "";

    return (
        <button
            aria-label={ariaLabel}
            type="button"
            className={`${baseStyles} ${buttonStyles} ${iconOnlyStyles} ${variantStyles[variant] || variantStyles.solid} ${className}`}
            onClick={onClick}
        >
            {icon && (
                <span
                    className={
                        isTwoLine
                            ? "button__icon button__icon--large"
                            : iconOnly
                                ? "button__icon"
                                : ""
                    }
                >
                    <i className={`${icon} ${isTwoLine ? "text-5xl leading-none" : iconOnly ? "text-2xl leading-none" : ""}`}></i>
                </span>
            )}
            {isTwoLine ? (
                <span className="flex w-full flex-col gap-y-0.5 items-start text-start">
                    {header && (
                        <>
                            <p>{header}</p>
                            <span className="button__rule" />
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