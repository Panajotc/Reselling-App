import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

import { AntDesign } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <AntDesign name="closecircleo" size={30} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <AntDesign name="delete" size={30} color="white" />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    position: "absolute",
    top: 60,
    right: 30,
  },
  closeIcon: {
    position: "absolute",
    top: 60,
    left: 30,
  },
});

export default ViewImageScreen;
