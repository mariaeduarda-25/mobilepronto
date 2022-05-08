import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from "react-native";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import Button from "../../components/Button";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";

export default function Cadastrar({ navigation }: LoginTypes) {
  async function handleSignIn() {
    console.log("Cadastrar");
  }
  function handleLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView>
          <View style={styles.viewimage}>
            <Image source={require("../../assets/favicon.png")} style={styles.imagem}/>
          </View>
          <Text style={styles.title}>CADASTRO</Text>
          <View style={styles.formRow}>
            <Ionicons name="person" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Nome" placeholderTextColor='white'/>
          </View>
          <View style={styles.formRow}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              placeholderTextColor='white'
              style={styles.input}
              placeholder="Email"
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
          <Button title="Salvar" type="secondary" onPress={handleSignIn} />
          <Button title="Voltar" type="secondary" onPress={handleLogin} />
        </KeyboardAvoidingView>
    </View>
  );
}
