import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
export default function Alert({ title, information }) {
  return (
    <View style={styles.container}>
      <Ionicons name="warning-outline" size={20} color="#926D2B" />
      <Text style={styles.info}>
        <Text style={styles.title}>{title}</Text>: {information}
      </Text>
    </View>
  );
}
