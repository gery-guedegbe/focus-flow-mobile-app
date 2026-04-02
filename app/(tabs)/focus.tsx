import StartSession from "@/components/StartSession";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import { IMAGES } from "@/constants/images";
import { useSessionStore } from "@/store/store";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { calculateStreak, getTodayStats } from "@/utils/stats";
import { formatDuration } from "@/utils/time";

const FocusScreen = () => {
  const { sessions } = useSessionStore();

  const todayStats = getTodayStats(sessions);
  const streak = calculateStreak(sessions);

  const totalMs = todayStats.totalTime * 60 * 1000;

  const formattedTime = formatDuration(todayStats.totalTime);

  return (
    <ScreenWrapper>
      <ScrollView className="flex-1">
        <View className="gap-12 px-6 pb-32">
          <View className="gap-1.5">
            <Text className="w-[80%] text-left font-manrope-extrabold text-4xl font-extrabold leading-10 text-primary-2">
              Ready for deep work?
            </Text>

            <Text className="w-[80%] text-left font-inter-regular text-lg leading-8 text-[#454652]">
              Your digital sanctuary is prepared. Choose your window of focus.
            </Text>
          </View>

          <View className="flex flex-row items-center gap-4">
            <View
              style={{
                boxShadow:
                  "0 10px 30px 0 rgba(26, 35, 126, 0.05), 0 4px 8px 0 rgba(0, 0, 0, 0.02)",
              }}
              className="gap-3 rounded-[32px] bg-white p-6"
            >
              <View className="flex flex-1 flex-row items-center gap-2">
                <Image
                  source={IMAGES.streak_icon}
                  resizeMode="contain"
                  tintColor="#6F48B2"
                  className="h-[20px] w-[20px]"
                />

                <Text className="text-left font-inter-regular  text-xs uppercase leading-4 tracking-widest text-[#454652]">
                  Momentum
                </Text>
              </View>

              <Text className="w-[70%] text-left font-manrope-bold text-2xl font-bold leading-8">
                {streak} Day Streak!
              </Text>

              <Text className="text-left font-inter-regular text-sm leading-4 text-[#454652]">
                Keep the flow alive
              </Text>
            </View>

            <View className="flex-1 gap-3 rounded-[32px] bg-[#C6C5D4]/5 p-6">
              <View className="flex flex-row items-center gap-2">
                <Image
                  source={IMAGES.session_green_icon}
                  resizeMode="contain"
                  className="h-[20px] w-[20px]"
                />

                <Text className="text-left font-inter-regular text-xs uppercase leading-4 tracking-widest text-[#454652]">
                  Today
                </Text>
              </View>

              <Text className="font-manrope-bold text-2xl font-bold leading-8 text-[#1A1C1C]">
                {formattedTime}
              </Text>

              <View className="flex flex-row items-center gap-2">
                <Image
                  source={IMAGES.check_icon}
                  resizeMode="contain"
                  className="h-[12px] w-[12px]"
                />

                <Text className="font-inter-regular text-xs leading-4 text-[#454652]">
                  {todayStats.count} Sessions
                </Text>
              </View>
            </View>
          </View>

          <StartSession />

          <View className="flex flex-row items-center justify-start gap-6 rounded-[32px] border border-[#9FF79F]/30 bg-[#9FF79F]/20 px-6 py-6">
            <Image
              source={IMAGES.design_section_image}
              resizeMode="contain"
              className="h-16 w-16"
            />

            <View className="w-[70%] gap-2">
              <Text className="font-manrope-bold text-base font-bold leading-6 text-[#002105]">
                Design your silence
              </Text>

              <Text className="font-inter-regular text-sm leading-[23px] text-[#005318]">
                Researchers find that auditory focus improves when paired with
                consistent environmental cues.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default FocusScreen;
