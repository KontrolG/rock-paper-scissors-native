import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { COLORS } from "../../lib/constants/styles";
import { LogoBonus } from "../logo-bonus";
import { Score } from "../score";

interface HeaderProps extends ViewProps {}

function Header({ style, ...props }: HeaderProps) {
  return (
    <View style={[styles.container, style]} {...props}>
      <View style={styles.title}>
        <LogoBonus />
      </View>
      <Score />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    borderColor: COLORS.HEADER_OUTLINE,
    borderWidth: 4,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    display: "flex",
    flexDirection: "column"
  },
  titleWord: {
    fontWeight: "bold",
    fontSize: 18
  }
});

export { Header };
