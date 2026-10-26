import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
    return (
        <footer className="w-full h-auto bg-primary flex flex-col space-y-10 justify-center py-10">
            <p className="text-center text-white font-medium">&copy; 2026 Warung Hati. All rights reserved.</p>
        </footer>
    )
}