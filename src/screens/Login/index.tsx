import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";

export default function Login({ navigation }: LoginTypes) {
  async function handleSignIn() {
    navigation.navigate("Drawer");
  }
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView>
          <View style={styles.viewimage}>
            <Image source={require("../../assets/favicon.png")} style={styles.imagem}/>
          </View>
          <Text style={styles.title}>LOGIN</Text>
          <View style={styles.formRow}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              placeholderTextColor='white'
              style={styles.input}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.formRow}>
            <Entypo name="key" style={styles.icon} />
            <TextInput
              placeholderTextColor='white'
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <Button title="Login" type="secondary" onPress={handleSignIn} />
          <Button
            title="Cadastre-se"
            type="secondary"
            onPress={handleCadastrar}
          />
        </KeyboardAvoidingView>
    </View>
  );
}