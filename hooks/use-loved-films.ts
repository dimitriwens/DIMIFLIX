import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { NormalMovies } from "@prisma/client";
import { toast } from "./use-toast";
import { useCurrentNetflixUser } from "./use-current-user";

interface UseAddFilmMyList {
  lovedFilmsByUser: { [userId: string]: NormalMovies[] };
  addLovedFilm: (data: NormalMovies) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedFilms = create(
  persist<UseAddFilmMyList>(
    (set, get) => ({
      lovedFilmsByUser: {},

      addLovedFilm: (data: NormalMovies) => {
        const { currentUser } = useCurrentNetflixUser.getState();

        if (!currentUser) {
          return toast({
            title: "No user selected",
          });
        }

        const currentLovedItems = get().lovedFilmsByUser[currentUser.id] || [];
        const existingItem = currentLovedItems.find(
          (item: NormalMovies) => item.id === data.id
        );

        if (existingItem) {
          return toast({
            title: "This movie is already in your list",
            variant: "destructive",
          });
        }

        set({
          lovedFilmsByUser: {
            ...get().lovedFilmsByUser,
            [currentUser.id]: [...currentLovedItems, data],
          },
        });

        toast({
          title: "Movie added to your list",
        });
      },

      removeLovedItem: (id: string) => {
        const { currentUser } = useCurrentNetflixUser.getState();

        if (!currentUser) {
          return toast({
            title: "No user selected",
            variant: "destructive",
          });
        }

        const currentLovedItems = get().lovedFilmsByUser[currentUser.id] || [];

        set({
          lovedFilmsByUser: {
            ...get().lovedFilmsByUser,
            [currentUser.id]: currentLovedItems.filter(
              (item) => item.id !== id
            ),
          },
        });

        toast({
          title: "This movie has been removed from your list",
        });
      },
    }),
    {
      name: "add-loved-films-by-user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
