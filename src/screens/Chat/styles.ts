import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    alignItems: "center",
    backgroundColor: "#092327"
  },
  rowSearch: {
    flexDirection: "row",
    backgroundColor: colors.third,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    width: "90%",
    height: 45
  },
  icon: {
    fontSize: 24,
    padding: 5,
    color: colors.white
  },
  input: {
    width: "40%",
    color: colors.third
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor:
   colors.secondary,
    width: 50,
    height: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    },
    buttonText: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "bold",
  },
  list: {
    marginBottom: 10
  }
});

export default styles