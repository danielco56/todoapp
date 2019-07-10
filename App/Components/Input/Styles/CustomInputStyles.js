import { StyleSheet } from "react-native";
import { Metrics, Colors, Fonts } from "../../../Themes";

export default StyleSheet.create({
  textInput: {
    height: 50,
    padding: 10,
    borderBottomWidth: Metrics.horizontalLineHeight,
    borderColor: "black",
    marginHorizontal: 50,
    marginTop: Metrics.doubleBaseMargin,
    color: "black"
  }
});
