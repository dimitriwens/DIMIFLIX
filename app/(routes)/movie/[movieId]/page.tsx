import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { NavbarFilm } from "./components/NavbarFilm";
import { MovieVideo } from "./components/MovieVideo";

export default async function MovieIdPage({
  params: rawParams,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const params = await rawParams;

  const normalMovies = await db.normalMovies.findUnique({
    where: {
      id: params.movieId,
    },
  });

  const trendingMovies = await db.trendingMovies.findUnique({
    where: {
      id: params.movieId,
    },
  });

  if (!normalMovies && !trendingMovies) {
    redirect("/");
  }

  const currentMovie = normalMovies
    ? normalMovies.movieVideo
    : trendingMovies
    ? trendingMovies.movieVideo
    : "";

  const titleMovie = normalMovies
    ? normalMovies.title
    : trendingMovies
    ? trendingMovies.title
    : "";

  return (
    <div className="h-screen w-full bg-black">
      <NavbarFilm titleMovie={titleMovie} />
      <MovieVideo currentMovie={currentMovie} />
    </div>
  );
}
