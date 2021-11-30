import create from "zustand";
import { PICKS_NAMES } from "../types/picks";

interface State {
  score: number;
  setScore: (value: number | ((score: number) => number)) => void;
  youPick: PICKS_NAMES;
  setYouPick: (youPick: PICKS_NAMES) => void;
  housePick: PICKS_NAMES;
  setHousePick: (housePick: PICKS_NAMES) => void;
  restartGame: () => void;
}

const gameStartingValues = {
  youPick: PICKS_NAMES.NONE,
  housePick: PICKS_NAMES.NONE
};

const useStore = create<State>((set) => ({
  ...gameStartingValues,
  score: 0,
  setScore(value) {
    set((state) => ({
      score: typeof value === "function" ? value(state.score) : value
    }));
  },
  setYouPick(youPick: PICKS_NAMES) {
    set({ youPick });
  },
  setHousePick(housePick: PICKS_NAMES) {
    set({ housePick });
  },
  restartGame() {
    set(gameStartingValues);
  }
}));

export default useStore;
