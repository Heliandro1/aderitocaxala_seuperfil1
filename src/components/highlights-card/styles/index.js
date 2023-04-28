import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 160,
    margin: 10,
    marginTop: 0,
  },
  informationContainer: {
    zIndex: 1,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
  },
  backImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  titleContainer(sub) {
    /** This function is used to switch the color of the title based on its value */
    const container = {
      height: 25,
      borderRadius: 7,
      padding: 3,
    };
    if (sub === "parceiros") container.backgroundColor = "#D48A04";
    else container.backgroundColor = "#3B2D72";
    return container;
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    color: "#FFFF",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFFF",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    borderRadius: 14,
    backgroundColor: "transparent",
  },
});

export default styles;
