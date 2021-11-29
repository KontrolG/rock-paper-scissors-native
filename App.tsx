import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "./lib/constants/styles";
import BackgroundGradient from "./components/background-gradient";
import {
  useFonts,
  BarlowSemiCondensed_400Regular,
  BarlowSemiCondensed_700Bold
} from "@expo-google-fonts/barlow-semi-condensed";
import AppLoading from "expo-app-loading";
import Game from "./components/game";

function App() {
  const [fontsAreLoaded] = useFonts({
    BarlowSemiCondensed_400Regular,
    BarlowSemiCondensed_700Bold
  });

  if (!fontsAreLoaded) return <AppLoading />;

  return (
    <View style={styles.container}>
      <BackgroundGradient />
      <Game />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND[0],
    paddingVertical: 32
  }
});

export default App;
