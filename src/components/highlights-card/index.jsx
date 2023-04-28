import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export default function HighLightsCard({ title, subTitle, backImageUrl }) {
  title = title.toLowerCase();
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <Image
        source={backImageUrl}
        resizeMode="contain"
        style={styles.backImage}
      />
      <View style={styles.informationContainer}>
        <View style={styles.titleContainer(title)}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
      <LinearGradient
        style={styles.gradient}
        colors={["transparent", "rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
      />
    </TouchableOpacity>
  );
}
