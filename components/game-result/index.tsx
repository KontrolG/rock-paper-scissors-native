import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, ViewProps } from "react-native";
import { COLORS } from "../../lib/constants/styles";
import useStore from "../../lib/hooks/store";
import { calculateGameScoreResult } from "../../lib/utils/calculate-game-score-result";
import Text from "../styled-text";

interface GameResultProps extends ViewProps {}

function GameResult(props: GameResultProps) {
  const restartGame = useStore(({ restartGame }) => restartGame);
  const gameScoreResult = useStore(({ youPick, housePick }) =>
    calculateGameScoreResult(youPick, housePick)
  );
  const setScore = useStore(({ setScore }) => setScore);

  useEffect(() => {
    setScore((previousScore) => {
      const newScore = previousScore + gameScoreResult;
      return newScore < 0 ? 0 : newScore;
    });
  }, []);

  const gameResultText =
    gameScoreResult === 0
      ? "Draw"
      : gameScoreResult > 0
      ? "You win"
      : "You lose";

  return (
    <View {...props}>
      <Text style={styles.gameResultText}>{gameResultText}</Text>
      <TouchableOpacity style={styles.playAgainButton} onPress={restartGame}>
        <Text style={styles.playAgainButtonText}>Play again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  gameResultText: { fontSize: 64, alignSelf: "center", fontWeight: "bold" },
  playAgainButton: {
    marginTop: 16,
    backgroundColor: COLORS.LIGHT,
    paddingHorizontal: 80,
    paddingVertical: 16,
    alignSelf: "center",
    borderRadius: 14
  },
  playAgainButtonText: {
    color: COLORS.DARK_TEXT,
    fontSize: 24
  }
});

export { GameResult };
