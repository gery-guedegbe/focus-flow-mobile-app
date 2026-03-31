import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  title?: string;
  icon?: ImageSourcePropType;
  onIconPress?: () => void;
  children: React.ReactNode;
}

const ScreenWrapper = ({
  title = "FocusFlow",
  icon,
  onIconPress,
  children,
}: ScreenWrapperProps) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="h-full flex-1 bg-[#F9F9F9]">
        <View className="flex h-[64px] flex-row items-center justify-between px-6">
          <Pressable hitSlop={18} onPress={onIconPress}>
            <Image
              source={icon}
              resizeMode="contain"
              className="h-[64px] w-[13px]"
            />
          </Pressable>

          <Text className="font-manrope-bold text-primary-2 text-center text-lg font-bold leading-7">
            {title}
          </Text>

          <View className="h-2 w-2 bg-transparent" />
        </View>

        <View className="flex-1">{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
