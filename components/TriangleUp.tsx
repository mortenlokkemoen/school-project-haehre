import { StyleSheet, View, Image } from "react-native";

export const TriangleUp = () => {
  return (
    <View style={styles.triangleContainer}>
      <Image
        source={require("../assets/TriangleUp.png")}
        style={styles.triangle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  triangleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  triangle: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
