import create from "zustand";

interface State {
  score: number;
  setScore: (value: number | ((score: number) => number)) => void;
}

const useStore = create<State>((set) => ({
  score: 0,
  setScore: (value) =>
    set((state) => ({
      score: typeof value === "function" ? value(state.score) : value
    }))
}));

export default useStore;
