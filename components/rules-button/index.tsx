import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../lib/constants/styles";
import Text from "../styled-text";

function RulesButton() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rules</Text>
    </View>
  );
}

const fontSize = 24;

const styles = StyleSheet.create({
  container: {
    paddingVertical: fontSize * 0.5,
    paddingHorizontal: fontSize * 2,
    borderColor: COLORS.HEADER_OUTLINE,
    borderWidth: 4,
    borderRadius: 8,
    alignSelf: "center"
  },
  text: { textAlign: "center", fontSize }
});

export { RulesButton };
