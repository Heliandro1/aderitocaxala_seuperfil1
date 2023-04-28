import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function CompleteProfileLink() {
  //Componente criado com a inteção de existir um roteamento e ao efetuar um clique a navegação do aplicativo deverá leva-lo a página correspondente
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.linkText}>
          Completar perfil{" "}
          <Ionicons name="arrow-forward-sharp" size={20} color="#07689F" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
