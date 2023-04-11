import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import createWithLocalStorage from "./createWithLocalStorage";

const config = (set) => {
  const initalState = {
    counterChampion: 0,
    versions: [],
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

    // versions
    setVersions: (_versions) => {
      set((draft) => {
        draft.versions = _versions;
      });
    },

    // unowned champion
    setUnownedChampion: (_unownedChampionArrary) => {
      set((draft) => {
        draft.unownedChampion = _unownedChampionArrary;
      });
    },
    removeUnownedChampion: (_champion) => {
      set((draft) => {
        draft.unownedChampion = draft.unownedChampion.filter(
          (element) => element.id !== _champion.id
        );
      });
    },

    // owned champion
    updateOwnedChampion: (_champion) => {
      set((draft) => {
        draft.ownedChampion.push(_champion);
      });
    },
    removeOwnedChampion: (_champion) => {
      set((draft) => {
        draft.ownedChampion = draft.ownedChampion.filter(
          (element) => element.id !== _champion.id
        );
      });
    },
    isOwned: (_champion) => {
      return !!useStore
        .getState()
        .ownedChampion.find((element) => element.id === _champion.id);
    },
  };

  return initalState;
};

const useStore = create(immer(config));

export default useStore;
