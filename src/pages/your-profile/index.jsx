import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import React from "react";
import ProfileHeader from "../../components/profile-header";
import Alert from "../../components/alert";
import ProfileCard from "../../components/profile-card";
import CompleteProfileLink from "../../components/complete-profile-link";

const data = {} //um objecto para simular que os dados estão sendo pegos de uma API
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
        <CompleteProfileLink />
        <View>
          <Text>Capacitações profissionais</Text>
          <Text>Ver mais</Text>
        </View>
        <FlatList showsHorizontalScrollIndicator={false} horizontal />
      </ScrollView>
    </SafeAreaView>
  );
}
