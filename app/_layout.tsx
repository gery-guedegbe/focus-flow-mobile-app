import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "@/constants/theme";
import { requestNotificationPermission } from "@/services/notificationService";
import { StatusBar } from "expo-status-bar";
import "../styles/global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    // Manrope
    "Manarope-Regular": require("../assets/fonts/manrope/Manrope-Regular.ttf"),
    "Manarope-Medium": require("../assets/fonts/manrope/Manrope-Medium.ttf"),
    "Manarope-SemiBold": require("../assets/fonts/manrope/Manrope-SemiBold.ttf"),
    "Manarope-Bold": require("../assets/fonts/manrope/Manrope-Bold.ttf"),
    "Manrope-ExtraBold": require("../assets/fonts/manrope/Manrope-ExtraBold.ttf"),
    "Manarope-Light": require("../assets/fonts/manrope/Manrope-Light.ttf"),
    "Manarope-ExtraLight": require("../assets/fonts/manrope/Manrope-ExtraLight.ttf"),

    // Inter
    "Inter-Regular": require("../assets/fonts/inter/Inter_18pt-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/inter/Inter_18pt-Medium.ttf"),
    "Inter-SemiBold": require("../assets/fonts/inter/Inter_18pt-SemiBold.ttf"),
    "Inter-Bold": require("../assets/fonts/inter/Inter_18pt-Bold.ttf"),
    "Inter-Light": require("../assets/fonts/inter/Inter_18pt-Light.ttf"),
    "Inter-ExtraLight": require("../assets/fonts/inter/Inter_18pt-ExtraLight.ttf"),
  });

  useEffect(() => {
    if (error) {
      console.error(error);
      throw error;
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar
        style="light"
        backgroundColor={COLORS.primary}
        translucent={false}
      />

      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
