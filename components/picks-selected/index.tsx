import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import useStore from "../../lib/hooks/store";
import { PICKS_PROPS } from "../../lib/constants/picks";
import { Pick } from "../pick";
import Text from "../styled-text";
import Maybe from "../maybe";
import { PICKS_NAMES } from "../../lib/types/picks";
import useTimeout from "../../lib/hooks/use-timeout";
import { HOUSE_PICKING_DELAY } from "../../lib/constants/game-config";
import { getRandomPick } from "../../lib/utils/get-random-pick";
import { PickPlaceholder } from "../pick-placeholder";

interface PicksSelectedProps extends ViewProps {}

function PicksSelected({ style, ...props }: PicksSelectedProps) {
  const youPick = useStore(({ youPick }) => youPick);
  const housePick = useStore(({ housePick }) => housePick);
  const setHousePick = useStore(({ setHousePick }) => setHousePick);
  const showHousePick = housePick !== PICKS_NAMES.NONE;

  useTimeout(() => {
    setHousePick(getRandomPick());
  }, HOUSE_PICKING_DELAY);

  return (
    <View style={[styles.container, style]} {...props}>
      <View>
        <Pick {...PICKS_PROPS[youPick]} />
        <Text style={styles.PickLabel}>You picked</Text>
      </View>
      <View>
        <Maybe
          it={showHousePick}
          orElse={
            <>
              <PickPlaceholder />
              <Text style={styles.PickLabel}>The House is picking...</Text>
            </>
          }
        >
          <Pick {...PICKS_PROPS[housePick]} />
          <Text style={styles.PickLabel}>The house picked</Text>
        </Maybe>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  PickLabel: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 16,
    textTransform: "uppercase",
    maxWidth: 24 * 8
  }
});

export { PicksSelected };
