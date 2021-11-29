import React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function PentagonBackground(props: SvgProps) {
  return (
    <Svg width={329} height={313} {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeWidth={15}
        d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z"
        opacity={0.2}
      />
    </Svg>
  );
}

export { PentagonBackground };
