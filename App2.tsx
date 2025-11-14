import React from "react";
import { Image, View } from "react-native";
import { styles } from "./style2";
import icon from "./assets/uber.png";

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
    </View>
  );
};
export default App;
