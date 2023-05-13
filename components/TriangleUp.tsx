import { StyleSheet, View, Image, Dimensions } from "react-native";

export const TriangleUp = () => {
  const screenHeight = Dimensions.get("window").height;
  const triangleSize = screenHeight * 0.1 > 100 ? screenHeight * 0.1 : 100;

  return (
    <View style={styles.triangleContainer}>
      {/* <View style={[styles.triangleInnerContainer, { height: triangleSize }]}> */}
      <Image
        source={require("../assets/TriangleUp.png")}
        style={[styles.triangle, { height: triangleSize }]}
      />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  triangleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  // triangleContainer: {
  //   alignItems: "stretch",
  //   justifyContent: "flex-end",
  // },

  // triangleInnerContainer: {
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   width: "100%",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  triangle: {
    width: "100%",
    resizeMode: "contain",
  },
});
