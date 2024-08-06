import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: "column",
  //   justifyContent: "space-around",
  //   alignItems: "center",
  //   backgroundColor: "ghostwhite",
  //   ...Platform.select({
  //     ios: { paddingTop: 40 },
  //     android: { paddingTop: StatusBar.currentHeight },
  //   }),
  // },
  // box: {
  //   width: 100,
  //   height: 100,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "lightgray",
  //   borderWidth: 1,
  //   borderStyle: "dashed",
  //   borderColor: "darkslategray",
  // },
  // boxText: {
  //   color: "darkslategray",
  //   fontWeight: "bold",
  // },
  // row: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   alignSelf: "stretch",
  // },
  // column: {
  //   flex: 1,
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "space-around",
  //   alignSelf: "stretch",
  // },
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 40,
  },
  item: {
    margin: 5,
    padding: 5,
    color: "slategray",
    backgroundColor: "ghostwhite",
    textAlign: "center",
  },
  filter: {
    height: 40,
    width: 200,
  },
  controls: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
});
