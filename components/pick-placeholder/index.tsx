import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";

interface PickPlaceholderProps {
  size?: number;
}

function PickPlaceholder({ size }: PickPlaceholderProps) {
  const dimensions = useWindowDimensions();
  const containerWidth = typeof size === "number" ? size : dimensions.width / 3;

  return <View style={getStyles(containerWidth)} />;
}

function getStyles(width: number) {
  return StyleSheet.create({
    container: {
      width,
      height: width,
      borderRadius: width / 2,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.15)"
    }
  }).container;
}

export { PickPlaceholder };
