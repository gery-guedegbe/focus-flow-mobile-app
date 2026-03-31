import ScreenWrapper from "@/components/ui/ScreenWrapper";
import { IMAGES } from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const SessionCompleteScreen = () => {
  const router = useRouter();

  return (
    <ScreenWrapper
      title="Session Complete"
      icon={IMAGES.close_icon}
      onIconPress={() => router.replace("/focus")}
    >
      <ScrollView className="flex-1">
        <View className="gap-12 px-6 pb-10">
          <View className="relative flex items-center gap-8">
            {/* <View className="absolute -top-12 left-4 h-[292px] w-[292px] self-center rounded-full bg-[#9FF79F]/20 blur-[32px]" /> */}

            <View
              style={{
                boxShadow:
                  "0 10px 30px 0 rgba(26, 35, 126, 0.05), 0 4px 8px 0 rgba(0, 0, 0, 0.02)",
              }}
              className="flex h-[192px] w-[192px] items-center justify-center rounded-full border-[1px] border-solid border-white/50 "
            >
              <Image
                source={IMAGES.complete_icon}
                resizeMode="contain"
                className="h-[60%] w-[60%]"
              />
            </View>

            <View className="gap-3">
              <Text className="text-center font-manrope-extrabold text-4xl font-extrabold leading-10 tracking-[-0.9px] text-primary-3">
                Great work!
              </Text>

              <Text className="px-4 text-center font-inter-regular text-lg leading-7 text-[#454652]">
                You've successfully completed your deep work sprint.
              </Text>
            </View>
          </View>

          <View
            style={{
              boxShadow:
                "0 10px 30px 0 rgba(26, 35, 126, 0.05), 0 4px 8px 0 rgba(0, 0, 0, 0.02)",
            }}
            className="gap-6 rounded-[48px] bg-white p-8"
          >
            <View className="gap-2">
              <Text className="font-inter-semibold text-xs font-semibold uppercase leading-4 tracking-[1.2px] text-[#454652]">
                Time focused
              </Text>

              <Text className="font-manrope-bold text-[36px] font-bold leading-10 text-primary-2">
                45 : 00
              </Text>

              <View className="flex flex-row items-center gap-2">
                <Image
                  source={IMAGES.flash_icon}
                  resizeMode="contain"
                  className=""
                />

                <Text className="font-inter-medium text-sm font-medium leading-5 text-[#6F48B2]">
                  Deep Work
                </Text>
              </View>
            </View>

            <View className="h-[1px] w-full bg-[#EEEEEE]" />

            <View className="gap-2">
              <Text className="font-inter-semibold text-xs font-semibold uppercase leading-4 tracking-[1.2px] text-[#454652]">
                Streak update
              </Text>

              <View className="flex flex-row items-center justify-start gap-4">
                <Image
                  source={IMAGES.streak_icon}
                  resizeMode="contain"
                  tintColor="#BA1A1A"
                  className="h-[22px] w-[20px]"
                />

                <Text className="w-[60%] font-manrope-bold text-[20px] font-bold leading-6 text-primary-3">
                  5 Day Streak Maintained!
                </Text>
              </View>
            </View>
          </View>

          <View className="flex flex-row items-center justify-between gap-4">
            <View className="flex-1 gap-3 rounded-[32px] bg-[#C6C5D4]/5 p-6">
              <Text className="font-inter-semibold text-xs font-semibold uppercase leading-4 tracking-[1.2px] text-[#454652]">
                Efficiency
              </Text>

              <View className="flex flex-row items-end gap-1">
                <Text className="font-manrope-bold text-2xl font-bold leading-8 text-primary-3">
                  92
                </Text>

                <Text className="font-manrope-medium text-sm font-medium leading-5 text-[#454652]">
                  %
                </Text>
              </View>
            </View>

            <View className="flex-1 gap-3 rounded-[32px] bg-[#C6C5D4]/5 p-6">
              <Text className="font-inter-semibold text-xs font-semibold uppercase leading-4 tracking-[1.2px] text-[#454652]">
                Focus score
              </Text>

              <View className="flex flex-row items-end gap-1">
                <Text className="font-manrope-bold text-2xl font-bold leading-8 text-primary-3">
                  85
                </Text>

                <Text className="font-manrope-medium text-sm font-medium leading-5 text-[#454652]">
                  / 100
                </Text>
              </View>
            </View>
          </View>

          <Pressable
            onPress={() => router.replace("/(tabs)/insights")}
            style={{
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",
            }}
            className="flex items-center gap-3 rounded-full bg-primary-1 px-[48px] py-[20px]"
          >
            <Text className="font-manrope-bold text-base font-bold leading-7 text-white">
              Continue to your insights
            </Text>
          </Pressable>

          <Image
            source={IMAGES.decorative_subtle_image}
            resizeMode="contain"
            className="mt-6 h-[60%] w-[60%] self-center"
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default SessionCompleteScreen;
