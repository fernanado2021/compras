import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    height: 150,
    width: "100%",
    marginTop: 20,
  },
  content: {
    marginHorizontal: 40,
    marginTop: 15,
  },
  text:{
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 18
  },
  textRegister:{
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 30
  },
  textLink:{
    textAlign: 'center',
    fontWeight: "bold",
    color: "#2b67ea",
    textDecorationLine: 'underline',
    fontSize: 15
  }
});
