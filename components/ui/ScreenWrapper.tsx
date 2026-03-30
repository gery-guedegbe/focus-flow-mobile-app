import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  title?: string;
  children: React.ReactNode;
}

const ScreenWrapper = ({
  title = "FocusFlow",
  children,
}: ScreenWrapperProps) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="h-full flex-1 bg-[#F9F9F9]">
        <View className="flex h-[64px] items-center justify-center">
          <Text className="font-manrope-bold text-primary-2 text-center text-lg font-bold leading-7">
            {title}
          </Text>
        </View>

        <View className="flex-1">{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
