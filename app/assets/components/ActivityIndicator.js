import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../animations/Animation - 1697463108086.json")}
    />
  );
}

export default ActivityIndicator;
