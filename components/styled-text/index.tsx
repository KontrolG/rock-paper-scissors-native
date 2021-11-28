import React from "react";
import { Text as BaseText, TextProps } from "react-native";
import { COLORS } from "../../lib/constants/styles";

function Text(props: TextProps) {
  return (
    <BaseText
      {...props}
      style={[
        {
          fontFamily: "BarlowSemiCondensed_400Regular",
          color: COLORS.TEXT
        },
        props.style
      ]}
    />
  );
}

export default Text;
