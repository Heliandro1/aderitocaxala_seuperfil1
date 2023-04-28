import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileHeader() {
  const [text, setText] = useState(); 
  //This is a component to display a header with a search bar in the top of the page
  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <TouchableOpacity>
          <Ionicons name="search" size={20} color="#424F4D" />
        </TouchableOpacity>
        <TextInput
          placeholder="Buscar capacitações, profissionais..."
          onChangeText={(e) => setText(e)}
        />
      </View>
    </View>
  );
}
