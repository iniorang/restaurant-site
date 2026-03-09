import React from "react";

export function Button({ name, onClick }) {
    return (
        <button
            className=""
            onClick={onClick}
        >
            {name}
        </button>
    )
}