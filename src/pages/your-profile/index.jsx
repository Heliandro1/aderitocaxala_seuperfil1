import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import ProfileHeader from "../../components/profile-header";
import Alert from "../../components/alert";
import ProfileCard from "../../components/profile-card";

export default function Profile() {
  return (
    <SafeAreaView>
      <ProfileHeader />
      <ScrollView>
        <Alert
          title="Completar perfil"
          information="Preencha suas informações para encontrar pacientes"
        />
        <ProfileCard
          userName="Carolina Magalhães"
          location="São Paulo - SP"
          numberOfStars={0}
        />
      </ScrollView>
    </SafeAreaView>
  );
}