import { PICK_VERSUS_PICKS } from "../constants/picks";
import { PICKS_NAMES } from "../types/picks";

export const calculateGameScoreResult = (
  youPick: PICKS_NAMES,
  housePick: PICKS_NAMES
) => {
  return PICK_VERSUS_PICKS?.[youPick]?.[housePick];
};
