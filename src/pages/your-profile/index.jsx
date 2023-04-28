import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ProfileHeader from "../../components/profile-header";
import Alert from "../../components/alert";
import ProfileCard from "../../components/profile-card";
import CompleteProfileLink from "../../components/complete-profile-link";
import HighLightsCard from "../../components/highlights-card";
import styles from "./styles";

const data = [
  {
    title: "Parceiros",
    subTitle: "Diabetes: Alimentos para evitar",
    backImage: "",
  },
  {
    title: "Capacitações",
    subTitle: "Como ministrar doses",
    backImage: "",
  },
]; //um objecto para simular que os dados estão sendo pegos de uma API
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
        <View style={styles.informationContainer}>
          <Text style={styles.informationTitle}>
            Capacitações profissionais
          </Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Ver mais</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={({ item }) => (
            <HighLightsCard
              title={item.title}
              subTitle={item.subTitle}
              backImageUrl={require("../../images.jpeg")}
            />
          )}
          keyExtractor={(i, index) => index}
          style={styles.list}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
