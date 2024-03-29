import "dotenv/config";

export default {
  expo: {
    name: "chat-app",
    slug: "chat-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/app/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./src/assets/app/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: "com.francijpg.coderhouse",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./src/assets/app/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      permissions: [
        "CAMERA",
        "CAMERA_ROLL",
        "LOCATION",
        "WRITE_EXTERNAL_STORAGE",
      ],
    },
    web: {
      favicon: "./src/assets/app/favicon.png",
    },
    extra: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APPID,
    },
  },
};
