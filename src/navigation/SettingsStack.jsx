import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/profile/Profile";
import SettingsScreen from "../screens/settings/Settings";
import CameraScreen from "../screens/camera/Camera";

const Settings = createNativeStackNavigator();

const mainConfig = {
  headerShown: false,
};

const SettingsStack = () => {
  return (
    <Settings.Navigator screenOptions={mainConfig}>
      <Settings.Screen name="Profile" component={ProfileScreen} />
      <Settings.Screen name="SettingsStack" component={SettingsScreen} />
      <Settings.Screen name="Camera" component={CameraScreen} />
    </Settings.Navigator>
  );
};

export default SettingsStack;
