import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../lib/constants/styles";
import useStore from "../../lib/hooks/store";
import Text from "../styled-text";

function Score() {
  const score = useStore(({ score }) => score);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.scoreLabel]}>Score</Text>
      <Text style={[styles.text, styles.scoreNumber]}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 16
  },
  text: { textAlign: "center" },
  scoreLabel: { fontSize: 18, color: COLORS.SCORE_TEXT },
  scoreNumber: {
    fontSize: 48,
    fontWeight: "bold",
    color: COLORS.DARK_TEXT
  }
});

export { Score };
