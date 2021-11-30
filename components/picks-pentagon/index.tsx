import React from "react";
import {
  useWindowDimensions,
  View,
  StyleSheet,
  GestureResponderEvent,
  ViewProps
} from "react-native";
import { PickButton } from "../pick-button";
import { PentagonBackground } from "../pentagon-background";
import { PICKS_NAMES } from "../../lib/types/picks";
import useStore from "../../lib/hooks/store";
import { PICKS_PROPS } from "../../lib/constants/picks";

interface CustomPickButtonProps {
  pickName: PICKS_NAMES;
  onPress?: (pickName: PICKS_NAMES, event: GestureResponderEvent) => void;
}

function CustomPickButton({ pickName, onPress }: CustomPickButtonProps) {
  function handleOnPress(event: GestureResponderEvent) {
    onPress?.(pickName, event);
  }
  return <PickButton {...PICKS_PROPS[pickName]} onPress={handleOnPress} />;
}

interface PicksPentagonProps extends ViewProps {}

function PicksPentagon({ style, ...props }: PicksPentagonProps) {
  const { height } = useWindowDimensions();
  const secondRowTopOffset = -height * 0.035;
  const setYouPick = useStore(({ setYouPick }) => setYouPick);

  return (
    <View style={[styles.container, style]} {...props}>
      <PentagonBackground style={styles.background} />
      <View style={styles.topRow}>
        <CustomPickButton
          pickName={PICKS_NAMES.SCISSORS}
          onPress={setYouPick}
        />
      </View>
      <View style={[styles.middleRow, { top: secondRowTopOffset }]}>
        <CustomPickButton pickName={PICKS_NAMES.SPOCK} onPress={setYouPick} />
        <CustomPickButton pickName={PICKS_NAMES.PAPER} onPress={setYouPick} />
      </View>
      <View style={styles.bottomRow}>
        <CustomPickButton pickName={PICKS_NAMES.LIZARD} onPress={setYouPick} />
        <CustomPickButton pickName={PICKS_NAMES.ROCK} onPress={setYouPick} />
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
