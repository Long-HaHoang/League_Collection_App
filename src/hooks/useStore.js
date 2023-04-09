import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import createWithLocalStorage from "./createWithLocalStorage";

const config = (set) => {
  const initalState = {
    counterChampion: 0,
    ownedChampions: [],

    // counter methods
    increaseCounter: () => {
      set((draft) => {
        draft.counterChampion = draft.counterChampion + 1;
      });
    },
    decreaseCounter: () => {
      set((draft) => {
        draft.counterChampion = draft.counterChampion - 1;
      });
    },

    // champion
    updateOwnedChampion: (_champion) => {
      set((draft) => {
        draft.ownedChampions.push(_champion);
      });
    },
  };

  return initalState;
};

const useStore = create(immer(config));

export default useStore;
