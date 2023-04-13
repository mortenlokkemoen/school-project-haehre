import { StyleSheet, View, Image } from "react-native";

export const TriangleDown = () => {
  return (
    <View style={styles.triangleContainer}>
      <Image
        source={require("../assets/TriangleDown.png")}
        style={styles.triangle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  triangleContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
  },
  triangle: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
