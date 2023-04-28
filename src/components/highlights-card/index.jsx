import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import styles from "./styles";

export default function HighLightsCard({ title, subTitle, backImageUrl }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <Image
        source={backImageUrl}
        resizeMode="contain"
        style={styles.backImage}
      />
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Text>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
}
