import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { PicksPentagon } from "../picks-pentagon";
import { Header } from "../header";
import { RulesButton } from "../rules-button";

function Game() {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <PicksPentagon />
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
  }
});

export default Game;
