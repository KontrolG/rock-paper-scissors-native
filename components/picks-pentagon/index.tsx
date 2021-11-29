import React from "react";
import { useWindowDimensions, View, StyleSheet } from "react-native";
import { Pick } from "../pick";
import { COLORS } from "../../lib/constants/styles";
import { ScissorsIcon } from "../scissors-icon";
import { SpockIcon } from "../spock-icon";
import { PaperIcon } from "../paper-icon";
import { RockIcon } from "../rock-icon";
import { LizardIcon } from "../lizard-icon";
import { PentagonBackground } from "../pentagon-background";

const PICKS_PROPS = {
  SCISSORS: {
    colors: COLORS.SCISSORS_GRADIENT,
    icon: <ScissorsIcon />
  },
  SPOCK: {
    colors: COLORS.SPOCK_GRADIENT,
    icon: <SpockIcon />
  },
  PAPER: {
    colors: COLORS.PAPER_GRADIENT,
    icon: <PaperIcon />
  },
  ROCK: {
    colors: COLORS.ROCK_GRADIENT,
    icon: <RockIcon />
  },
  LIZARD: {
    colors: COLORS.LIZARD_GRADIENT,
    icon: <LizardIcon />
  }
};

function PicksPentagon() {
  const { height } = useWindowDimensions();
  const test = height * 0.035;

  return (
    <View style={styles.container}>
      <PentagonBackground style={styles.background} />
      <View style={styles.topRow}>
        <Pick {...PICKS_PROPS.SCISSORS} />
      </View>
      <View style={[styles.middleRow, { top: -test }]}>
        <Pick {...PICKS_PROPS.SPOCK} />
        <Pick {...PICKS_PROPS.PAPER} />
      </View>
      <View style={styles.bottomRow}>
        <Pick {...PICKS_PROPS.LIZARD} />
        <Pick {...PICKS_PROPS.ROCK} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  background: { position: "absolute" },
  topRow: { alignSelf: "center" },
  middleRow: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "relative"
  },
  bottomRow: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
  }
});

export { PicksPentagon };
