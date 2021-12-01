import React from "react";
import { StyleSheet, View } from "react-native";
import { PicksPentagon } from "../picks-pentagon";
import { Header } from "../header";
import { RulesButton } from "../rules-button";
import useStore from "../../lib/hooks/store";
import Maybe from "../maybe";
import { PICKS_NAMES } from "../../lib/types/picks";
import { PicksSelected } from "../picks-selected";
import { GameResult } from "../game-result";

function Game() {
  const youHadPicked = useStore(({ youPick }) => youPick !== PICKS_NAMES.NONE);
  const houseHadPicked = useStore(
    ({ housePick }) => housePick !== PICKS_NAMES.NONE
  );

  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <Maybe it={!youHadPicked}>
        <PicksPentagon />
      </Maybe>
      <Maybe it={youHadPicked}>
        <PicksSelected />
        <Maybe it={houseHadPicked}>
          <GameResult style={styles.gameResult} />
        </Maybe>
      </Maybe>
      <RulesButton style={styles.rulesButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  header: {
    marginBottom: "auto"
  },
  rulesButton: {
    marginTop: "auto"
  },
  gameResult: {
    marginTop: 64
  }
});

export default Game;
