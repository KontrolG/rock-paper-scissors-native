import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { PicksPentagon } from "../picks-pentagon";
import { Header } from "../header";
import { RulesButton } from "../rules-button";

function Game() {
  return (
    <View style={styles.container}>
      <Header />
      <PicksPentagon />
      <RulesButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between"
  }
});

export default Game;
