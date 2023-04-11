import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import createWithLocalStorage from "./createWithLocalStorage";

const config = (set) => {
  const initalState = {
    counterChampion: 0,
    ownedChampion: [],
    unownedChampion: [],

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

    // unowned champion

    // owned champion
    updateOwnedChampion: (_champion) => {
      set((draft) => {
        draft.ownedChampion.push(_champion);
      });
    },
  };

  return initalState;
};

const useStore = create(immer(config));

export default useStore;
