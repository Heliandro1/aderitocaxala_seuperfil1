import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileCard({ userName, location, stars }) {
  return (
    <View>
      <Text>Seu perfil</Text>
      <View>
        <Ionicons name="" size={30}/>
      </View>
    </View>
  );
}
