// src/pages/NotFound.jsx
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen w-full flex items-center justify-center px-6 py-12 md:py-20 ">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl">
                <div className="w-full max-w-sm md:max-w-md flex justify-center">
                    <img
                        src="/assets/ilust/notfound.svg"
                        alt="Halaman Tidak Ditemukan"
                        className="w-full h-auto max-h-80 object-contain"
                    />
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-apple-heading tracking-tight mb-3">
                        Nothing Interesting Here
                    </h1>

                    <p className="text-base sm:text-lg mb-8 leading-relaxed">
                        Looks like you stumbled upon an empty room. Let's get you back to where the feast begins.
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <Button
                            name="Back to Main"
                            variant="solid"
                            onClick={() => navigate("/")}
                        />
                        <Button
                            name="Explore Menu"
                            variant="outlined"
                            onClick={() => navigate("/menu")}
                        />
                    </div>
                </div>

            </div>
        </main>
    );
}