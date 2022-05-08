import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/lazaro.png")} />
      <Text style={styles.title}>Nome Sobrenome</Text>
      <CardSocial>
        <>
          <Text style={styles.link}> Habilitado há: 5 anos</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <Text style={styles.link}> Avaliação: 5</Text>
          <FontAwesome5 name="star" style={styles.icon} />
        </>
      </CardSocial>
      <Button
        title="Alterar Senha"
        type="primary"
        onPress={() => console.log("Alterar Senha")}
      />
      <Button
        title="Sair"
        type="primary"
        onPress={() => console.log("Sair")}
      />
      </View>
  );
}