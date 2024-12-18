import { Logo } from "@/components/Shared/Logo";

import { NormalMovies } from "./components/NormalMovies";
import { TrendingMovies } from "./components/TrendingMovies";

export default function UploadMoviesPage() {
    return (
    <div className="bg-zinc-900 h-full flex flex-col justify-center items-center">
    <Logo />
    <h1 className="text-2xl my-8 font-semibold">
        Upload your favorite movies 🍿
        </h1>
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4">
            <NormalMovies />
            <TrendingMovies />
        </div>
    </div>
    );
}