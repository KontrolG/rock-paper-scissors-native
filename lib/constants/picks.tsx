import React from "react";
import { COLORS } from "./styles";
import { ScissorsIcon } from "../../components/scissors-icon";
import { SpockIcon } from "../../components/spock-icon";
import { PaperIcon } from "../../components/paper-icon";
import { RockIcon } from "../../components/rock-icon";
import { LizardIcon } from "../../components/lizard-icon";
import { PICKS_NAMES } from "../types/picks";

export const PICKS_PROPS = {
  [PICKS_NAMES.SCISSORS]: {
    colors: COLORS.SCISSORS_GRADIENT,
    icon: <ScissorsIcon />
  },
  [PICKS_NAMES.SPOCK]: {
    colors: COLORS.SPOCK_GRADIENT,
    icon: <SpockIcon />
  },
  [PICKS_NAMES.PAPER]: {
    colors: COLORS.PAPER_GRADIENT,
    icon: <PaperIcon />
  },
  [PICKS_NAMES.ROCK]: {
    colors: COLORS.ROCK_GRADIENT,
    icon: <RockIcon />
  },
  [PICKS_NAMES.LIZARD]: {
    colors: COLORS.LIZARD_GRADIENT,
    icon: <LizardIcon />
  },
  [PICKS_NAMES.NONE]: {
    colors: COLORS.PAPER_GRADIENT,
    icon: <PaperIcon />
  }
};

const DEFAULT_PICK_VERSUS_PICK = Object.keys(PICKS_NAMES).reduce(
  (picks, currentPick) => ({ ...picks, [currentPick]: -1 }),
  {}
);

function createPickVersusPick(
  pickName: PICKS_NAMES,
  itCountersPickNames: PICKS_NAMES[]
) {
  const counterPicks = itCountersPickNames.reduce(
    (picks, currentPick) => ({ ...picks, [currentPick]: 1 }),
    {}
  );
  return { ...DEFAULT_PICK_VERSUS_PICK, ...counterPicks, [pickName]: 0 };
}

export const PICK_VERSUS_PICKS = {
  [PICKS_NAMES.SCISSORS]: createPickVersusPick(PICKS_NAMES.SCISSORS, [
    PICKS_NAMES.PAPER,
    PICKS_NAMES.LIZARD
  ]),
  [PICKS_NAMES.PAPER]: createPickVersusPick(PICKS_NAMES.PAPER, [
    PICKS_NAMES.ROCK,
    PICKS_NAMES.SPOCK
  ]),
  [PICKS_NAMES.ROCK]: createPickVersusPick(PICKS_NAMES.ROCK, [
    PICKS_NAMES.LIZARD,
    PICKS_NAMES.SCISSORS
  ]),
  [PICKS_NAMES.LIZARD]: createPickVersusPick(PICKS_NAMES.LIZARD, [
    PICKS_NAMES.SPOCK,
    PICKS_NAMES.PAPER
  ]),
  [PICKS_NAMES.SPOCK]: createPickVersusPick(PICKS_NAMES.SPOCK, [
    PICKS_NAMES.SCISSORS,
    PICKS_NAMES.ROCK
  ])
};
