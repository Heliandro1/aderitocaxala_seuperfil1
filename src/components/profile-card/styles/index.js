import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 20,
    marginTop: 30,
  },
  classificationContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  profileTitle: {
    fontSize: 20,
    paddingLeft: 15,
  },
  horizontalRow: {
    height: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: "#D3D3D3",
  },
  profileImage: {
    backgroundColor: "#D3D3D3",
    width: 80,
    height: 80,
    borderRadius: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImg: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
  },
  userName: {
    fontSize: 18,
    fontWeight: "700",
  },
  dataContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "80%",
    flex: 1,
    paddingLeft: 20,
    gap: 15,
  },
  location: {
    color: "#848484",
    fontSize: 14,
    marginTop: 3,
    marginBottom: 10,
  },
  stars: {
    color: "#848484",
  },
});

export default styles;
