import { PICKS_NAMES } from "../types/picks";

function getRandomPick() {
  let randomPick = PICKS_NAMES.NONE;

  while (randomPick === PICKS_NAMES.NONE) {
    const pickNamesKeys = Object.keys(PICKS_NAMES);
    const randomPickKeyIndex = Math.floor(Math.random() * pickNamesKeys.length);
    const pickName = pickNamesKeys[
      randomPickKeyIndex
    ] as keyof typeof PICKS_NAMES;
    randomPick = PICKS_NAMES[pickName];
  }
  return randomPick;
}

export { getRandomPick };
