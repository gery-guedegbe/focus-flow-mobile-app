import React from "react";

import ScreenWrapper from "@/components/ui/ScreenWrapper";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

import { IMAGES } from "@/constants/images";

const FocusingScreen = () => {
  const { title, duration } = useLocalSearchParams();

  const router = useRouter();

  return (
    <ScreenWrapper title="Focusing...">
      <ScrollView className="flex-1">
        <View className="gap-12 px-6 pb-10">
          {/* <View className="h-[384px] w-[384px] rounded-full bg-[#B78EFE]/10 blur-[32px]" /> */}

          <View className="items-center gap-4">
            <Text className="font-inter-semibold text-base font-semibold uppercase leading-6 tracking-[3.2px] text-[#454652]">
              Deep Work Phase
            </Text>

            <Text className="font-manrope-regular text-sm leading-5 text-[#1A1C1C]/40">
              {title}
            </Text>
          </View>

          <View className="border-primary-2 flex h-[288px] w-[288px] items-center justify-center gap-4 self-center rounded-full border-4">
            <Text className="text-primary-2 font-manrope-extrabold text-6xl font-extrabold leading-[60px] tracking-[-3px]">
              24 : 59
            </Text>

            <View className="flex flex-row items-center justify-center gap-1.5">
              <Image
                source={IMAGES.flash_icon}
                resizeMode="contain"
                tintColor="#000666"
                className="h-[12px] w-[12px]"
              />

              <Text className="text-primary-3 font-inter-semibold text-xs font-semibold uppercase leading-3 tracking-[1.2px]">
                FOCUS ACTIVE
              </Text>
            </View>
          </View>

          <View className="gap-6">
            <Pressable
              onPress={() => router.push("/(session)/session-complete")}
              className="flex h-16 flex-row items-center justify-center gap-3 rounded-full bg-[#E8E8E8] "
            >
              <Image
                source={IMAGES.pause_icon}
                resizeMode="contain"
                className="h-[14] w-[14]"
              />

              <Text className="font-manrope-bold text-base font-bold leading-6 text-[#491D8A]">
                Pause
              </Text>
            </Pressable>

            <Pressable className="bg-primary-1 flex h-16 flex-row items-center justify-center gap-3 rounded-full ">
              <Image
                source={IMAGES.stop_icon}
                resizeMode="contain"
                className="h-[14] w-[14]"
              />

              <Text className="font-manrope-bold text-base font-bold leading-6 text-white">
                Finish
              </Text>
            </Pressable>
          </View>

          <View className="flex flex-row items-center justify-between gap-4 rounded-[48px] bg-[#F3F3F3]/50 px-6 py-4 blur-sm">
            <View className="flex h-[40px] w-[28px] items-center justify-center rounded-full bg-[#9FF79F]/20">
              <Image
                source={IMAGES.green_flower_icon}
                resizeMode="contain"
                className="h-4 w-4"
              />
            </View>

            <View className="flex w-[90%] flex-row items-center ">
              <Text className="font-inter-regular text-left text-xs leading-[18px] text-[#454652]">
                You've stayed focused for{" "}
                <Text className="text-primary-2 font-inter-semibold text-xs font-semibold">
                  124 minutes
                </Text>{" "}
                today. Keep the flow!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default FocusingScreen;
