import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./splash.style";

export default function Splash() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>ChatApp</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
