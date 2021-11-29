import * as React from "react";
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";
import { StyleSheet, useWindowDimensions } from "react-native";

const styles = StyleSheet.create({
  container: { position: "absolute", zIndex: -1 }
});

function BackgroundGradient() {
  const { width, height } = useWindowDimensions();
  const heightHalf = height / 2;
  const widthHalf = width / 2;

  return (
    <Svg width={width} height={height} fill="none" style={styles.container}>
      <Path
        fill="url(#prefix__paint0_radial_1_2)"
        d={`M0 0h${width}v${height}H0z`}
      />
      <Defs>
        <RadialGradient
          id="prefix__paint0_radial_1_2"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform={`matrix(0 ${heightHalf} -${widthHalf} 0 ${widthHalf} ${heightHalf})`}
        >
          <Stop stopColor="#1F3756" />
          <Stop offset={1} stopColor="#141539" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default BackgroundGradient;
