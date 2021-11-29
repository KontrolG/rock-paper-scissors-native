import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  useWindowDimensions,
  View
} from "react-native";

interface PickProps extends TouchableOpacityProps {
  colors: string[];
  icon: ReactNode;
}

function Pick({ colors, icon, ...props }: PickProps) {
  const dimensions = useWindowDimensions();
  const containerWidth = dimensions.width / 3;
  const innerContainerWidth = containerWidth * 0.8;

  return (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      <LinearGradient colors={colors} style={getStyles(containerWidth)}>
        <View
          style={[getStyles(innerContainerWidth), { backgroundColor: "white" }]}
        >
          {icon}
        </View>
      </LinearGradient>
    </TouchableOpacity>
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
