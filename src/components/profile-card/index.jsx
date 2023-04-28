import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function ProfileCard({
  userName,
  location,
  numberOfStars,
  profileImageUrl,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.profileTitle}>Seu perfil</Text>
      <View style={styles.dataContainer}>
        <View style={styles.profileImage}>
          {profileImageUrl ? (
            <Image
              source={{ uri: profileImageUrl }}
              style={styles.profileImg}
              resizeMode="contain"
            />
          ) : (
            <FontAwesome name="user" color="#5D5D5D" size={30} />
          )}
        </View>
        <View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.location}>{location}</Text>
          <View style={styles.classificationContainer}>
            <Ionicons name="star" size={15} color="#D3D3D3" />
            <Ionicons name="star" size={15} color="#D3D3D3" />
            <Ionicons name="star" size={15} color="#D3D3D3" />
            <Ionicons name="star" size={15} color="#D3D3D3" />
            <Ionicons name="star" size={15} color="#D3D3D3" />
            <Text style={styles.stars}>({numberOfStars})</Text>
          </View>
        </View>
      </View>
      <View style={styles.horizontalRow}></View>
    </View>
  );
}
