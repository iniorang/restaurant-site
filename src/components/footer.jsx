import React from "react";
import { NavLink } from "react-router";
import dayjs from "dayjs";

export default function Footer() {
    const currentYear = dayjs().year();
    return (
        <footer className="w-full h-auto bg-apple-green flex flex-col space-y-10 justify-center py-10">
            <p className="text-center text-white font-medium">&copy; {currentYear} Warung Hati. All rights reserved.</p>
        </footer>
    )
}