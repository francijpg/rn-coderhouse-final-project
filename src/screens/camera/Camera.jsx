import React from "react";
import { Text, View, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useDispatch } from "react-redux";

import { ButtonIcon } from "../../components";
import { colors } from "../../constants/colors";
import { styles } from "./camera.style";
import { useAuth } from "../../hooks/useAuth";
import { addUserProfilePhoto } from "../../services/firebase";
import { uploadProfileImage } from "../../store/actions/auth.actions";

export default function CameraScreen({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [flash, setFlash] = React.useState(Camera.Constants.FlashMode.off);
  const cameraRef = React.useRef(null);
  const flashColor = Camera.Constants.FlashMode.off
    ? colors.gray
    : colors.white;
  const currentUser = useAuth();
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setImage(photo.uri);
      } catch (error) {
        console.error(`takePicture error: ${error}`);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const data = await MediaLibrary.createAssetAsync(image);
        await addUserProfilePhoto(data, currentUser);
        setImage(null);
        dispatch(uploadProfileImage());
        alert("Picture saved! 🎉");
        navigation.navigate("Profile");
      } catch (error) {
        console.error(`savePicture error: ${error}`);
      }
    }
  };

  if (hasCameraPermission === false) {
    return (
      <View style={styles.noPermission}>
        <Text>No access to camera</Text>
        <ButtonIcon
          title="Ir al Home"
          onPress={() => navigation.navigate("Profile")}
          icon="arrow-left"
          color={colors.primary}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flash}
        >
          <View style={styles.cameraView}>
            <ButtonIcon
              title=""
              icon="retweet"
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
            <ButtonIcon
              onPress={() =>
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                )
              }
              icon="flash"
              color={flash === flashColor}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {image ? (
          <View style={styles.controlsView}>
            <ButtonIcon
              title="Re-take"
              onPress={() => setImage(null)}
              icon="retweet"
            />
            <ButtonIcon title="Save" onPress={savePicture} icon="check" />
          </View>
        ) : (
          <ButtonIcon
            title="Take a picture"
            onPress={takePicture}
            icon="camera"
          />
        )}
      </View>
    </View>
  );
}
