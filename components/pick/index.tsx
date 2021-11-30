import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";

export interface PickProps {
  colors: string[];
  icon: ReactNode;
  size?: number;
}

function Pick({ colors, icon, size }: PickProps) {
  const dimensions = useWindowDimensions();
  const containerWidth = typeof size === "number" ? size : dimensions.width / 3;
  const innerContainerWidth = containerWidth * 0.8;

  return (
    <LinearGradient colors={colors} style={getStyles(containerWidth)}>
      <View
        style={[getStyles(innerContainerWidth), { backgroundColor: "white" }]}
      >
        {icon}
      </View>
    </LinearGradient>
  );
}

function getStyles(width: number) {
  return StyleSheet.create({
    container: {
      width,
      height: width,
      borderRadius: width / 2,
      alignItems: "center",
      justifyContent: "center"
    }
  }).container;
}

export { Pick };
