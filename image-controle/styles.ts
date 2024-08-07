import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
  },
  //   image: {
  //     width: 100,
  //     height: 100,
  //     margin: 20,
  //   },
  image: {
    resizeMode: "contain",
  },
  slider: {
    width: 100,
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "azure",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "slategray",
  },
  buttonText: {
    color: "slategray",
  },
  picker: {
    height: 200,
    width: 300,
    marginTop: 20,
  },
  icons: {
    alignSelf: "stretch",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  itemIcon: {
    padding: 10,
    color: "slategray",
  },
  itemText: {
    color: "slategray",
  },
});
