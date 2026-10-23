import React from "react";
const baseStyles =
    "inline-flex items-center justify-center gap-2 font-bold py-2 px-4 rounded transition-colors cursor-pointer";

const variantStyles = {
    solid: "bg-accent hover:bg-accent-dark text-white",
    outlined:
        "border-2 border-accent text-white hover:bg-accent-dark hover:border-accent-dark",
};

export function Button({ name, onClick, icon, variant = "solid", className = "" }) {

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant] || variantStyles.solid} ${className}`}
            onClick={onClick}
        >
            {icon && <i className={icon}></i>}
            {name && <span>{name}</span>}
        </button>
    );
}

export function TwoLineButton({ header, subheader, onClick, icon }) {
    return (
        <button
            className={'inline-flex w-full items-center gap-2 font-bold py-2 px-4 rounded transition-colors cursor-pointer bg-accent hover:bg-accent-dark text-white'}
            onClick={onClick}
        >
            <div className="flex shrink-0 items-center justify-center">
                {icon && <i className={`${icon} text-4xl leading-none`}></i>}
            </div>
            <div className="flex min-w-0 flex-col items-start text-start">
                {header && (
                    <span className="w-fit border-b border-white ">
                        {header}
                    </span>
                )}
                {subheader && <span>{subheader}</span>}
            </div>
        </button>
    );
}