import React from "react";
import { Text, View, Image } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { signOut } from "../../store/actions/auth.actions";
import { styles } from "./profile.style";
import { ButtonIcon } from "../../components";
import { colors } from "../../constants/colors";
import { BgImage } from "../../components";
import { useAuth } from "../../hooks/useAuth";

const ProfileScreen = () => {
  const [photo, setPhoto] = React.useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currentUser = useAuth();

  React.useLayoutEffect(() => {
    if (currentUser?.photoURL) {
      setPhoto(currentUser.photoURL);
    }
  }, [currentUser?.photoURL]);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <View style={styles.container}>
      <BgImage />
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text}>{currentUser?.email}</Text>
      <Image source={{ uri: photo }} style={styles.profilePicture} />
      <ButtonIcon
        title="Update Profile Picture"
        onPress={() => navigation.navigate("Camera")}
        icon="camera"
        color={colors.white}
      />
      <ButtonIcon
        title="Sign Out"
        onPress={handleSignOut}
        icon="sign-out"
        color={colors.white}
      />
    </View>
  );
};

export default ProfileScreen;
