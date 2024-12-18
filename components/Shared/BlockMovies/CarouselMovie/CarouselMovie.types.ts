import { NormalMovies } from "@prisma/client";

export type CarouselMovieProps = {
  movies: NormalMovies[];
  isMyList: boolean;
};
