import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import styles from "./styles";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo.png")}
        style={styles.container}
      >
        <Image source={require("../../assets/lazaro.png")} />
        <Text>Lázaro Eduardo da Silva</Text>
      </ImageBackground>
    </View>
  );
}