import { NormalMovies } from "@prisma/client";

export type ActionsButtonsProps = {
  movieId: string;
  movie: NormalMovies;
  isMyList: boolean;
};
