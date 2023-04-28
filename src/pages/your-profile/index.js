import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import ProfileHeader from "../../components/profile-header";
import Alert from "../../components/alert";

export default function Profile() {
  return (
    <SafeAreaView>
      <ProfileHeader />
      <Alert
        title="Completar perfil"
        information="Preencha suas informações para encontrar pacientes"
      />
    </SafeAreaView>
  );
}
