import { NormalMovies } from "@prisma/client";

export type BlockMoviesProps = {
  title: string;
  movies: NormalMovies[];
  isMyList: boolean;
};
