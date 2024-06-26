import { ImageBackground } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const theme = {
  light: {
    theme: "rgb(224, 224, 224)",
    backgroundColor: "#fff",
    textColor: "#000",
  },
  dark: {
    theme: "purple",
    backgroundColor: "#060721",
    textColor: "#fff",
    tintColor: "white",
  },
  highContrast: {
    backgroundColor: "#f9f9f9",
    textColor: "#000000",
    // ... other styles
  },
  ocean: {
    backgroundColor: "#c2e0f0",
    textColor: "#333333",
  },
};
export default theme;
