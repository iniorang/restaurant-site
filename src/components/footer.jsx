import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
    return (
        <footer className="w-full h-auto flex flex-col space-y-10 justify-center py-10">
            <nav className="flex justify-center flex-wrap gap-6  font-medium">
                <NavLink className="hover:text-accent" to="/">Home</NavLink>
                <NavLink className="hover:text-accent" to="/aboutus">About</NavLink>
                <NavLink className="hover:text-accent" to="/menu">Menu</NavLink>
                <NavLink className="hover:text-accent" to="/mealplans">Meal Plans</NavLink>
            </nav>

            <div className="flex justify-center space-x-5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                </a>
                <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                </a>
            </div>
            <p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reserved.</p>
        </footer>
    )
}