import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F4C4",
    width: "90%",
    height: 70,
    padding: 10,
    gap: 10,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D6BB8E",
  },
  title: {
    fontWeight: "bold",
    color: "#A68849",
  },
  info: {
    color: "#A6884A",
  },
});

export default styles;
