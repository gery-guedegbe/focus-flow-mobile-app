import { IMAGES } from "@/constants/images";
import { COLORS } from "@/constants/theme";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StatusBar, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/(tabs)/focus");
    }, 2000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar barStyle={"light-content"} backgroundColor={COLORS.primary} />

      <Animated.View
        entering={FadeInDown.duration(700).springify()}
        className="items-center gap-6"
      >
        <Image
          source={IMAGES.splash_screen_icon}
          resizeMode="contain"
          className="h-[42px] w-[42px]"
        />

        <View className="items-center gap-2">
          <Text className="font-manrope-extrabold text-primary-2 text-4xl font-extrabold leading-10 tracking-[-1.8px]">
            FocusFlow
          </Text>

          <Text className="font-inter-semibold text-[10px] font-semibold uppercase leading-4 tracking-[4px] text-[#454652]/40">
            Deep Work Sanctuary
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}
