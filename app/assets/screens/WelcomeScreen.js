import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={7}
      style={styles.background}
      source={require("../background.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../logo.png")} />
        <Text style={styles.welcomeText}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="LogIn" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 110,
    height: 110,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "600",

    fontWeight: "bold",
  },
});
export default WelcomeScreen;
