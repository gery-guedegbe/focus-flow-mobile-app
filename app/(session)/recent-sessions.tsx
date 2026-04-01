import RecentSessionItem from "@/components/RecentSessionItem";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import { RECENT_SESSIONS_DATA } from "@/constants/data";
import { IMAGES } from "@/constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const RecentSessionsScreen = () => {
  const router = useRouter();

  return (
    <ScreenWrapper
      title="Recent Sessions"
      icon={IMAGES.back_icon}
      onIconPress={() => router.back()}
    >
      <ScrollView className="flex-1">
        <View className="gap-12 px-6 pb-10">
          <View className="gap-4">
            <Text className="font-inter-regular text-[10px] uppercase leading-4 tracking-[1px] text-[#454652]">
              Weekly overview
            </Text>

            <View className="flex flex-row items-center justify-between">
              <Text className="font-manrope-extrabold text-4xl font-extrabold leading-10 tracking-[-0.9px] text-primary-2">
                12.4 hrs
              </Text>

              <View className="flex flex-row items-center gap-2 rounded-full bg-[#9FF79F] px-[16px] py-[6px]">
                <Image
                  source={IMAGES.increase_icon}
                  resizeMode="contain"
                  className="h-[8px] w-[12px]"
                />

                <Text className="font-inter-semibold text-xs font-semibold leading-4 text-[#55AA5B]">
                  15% focus boost
                </Text>
              </View>
            </View>

            <View className="flex flex-row items-end justify-between gap-1 rounded-[32px] bg-[#F3F3F3] px-[16px] py-[8px]">
              {[30, 40, 20, 60, 35, 90, 20].map((item, index) => (
                <View
                  key={index}
                  style={{ width: 40, height: item }}
                  className={`rounded-t-full ${item > 80 ? "bg-[#1A237E]" : item > 50 ? "bg-[#000666]/20" : "bg-[#000666]/10"}`}
                ></View>
              ))}
            </View>
          </View>

          <View className="gap-6">
            <Text className="font-inter-medium text-sm font-medium uppercase leading-4 tracking-[0.3px] text-[#454652]">
              History
            </Text>

            <View className="gap-6">
              {RECENT_SESSIONS_DATA.map((item) => (
                <RecentSessionItem
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  duration={item.duration}
                  time={item.time}
                  status={item.status}
                  icon={item.icon}
                />
              ))}
            </View>
          </View>

          <LinearGradient
            style={{
              boxShadow: "0 10px 30px 0 rgba(26, 35, 126, 0.15)",
              borderRadius: 48,
            }}
            colors={["#1A237E", "#000666"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="relative flex-1 gap-4 p-6"
          >
            <Text className="font-manrope-bold text-lg font-bold leading-[23px] text-white">
              Keep the streak alive!
            </Text>

            <Text className="w-[60%] font-inter-regular text-xs leading-5 text-[#BDC2FF]">
              You have focused for 5 consecutive days. One more session to hit
              your weekly goal.
            </Text>

            <Pressable className="w-[50%] rounded-full bg-white px-[24px] py-[8px] leading-4">
              <Text className="text-center font-inter-semibold text-xs uppercase leading-4 tracking-[0.6px] text-primary-2">
                Start now
              </Text>
            </Pressable>

            <Image
              source={IMAGES.stars_icon}
              resizeMode="contain"
              className="absolute bottom-0 right-0 h-[110px] w-[110px]"
            />
          </LinearGradient>

          {/* <View
            style={{
              boxShadow: "0 10px 30px 0 rgba(26, 35, 126, 0.15)",
            }}
            className="bg-gradient-primary relative gap-4 rounded-[48px] p-6"
          >
            <Text className="font-manrope-bold text-lg font-bold uppercase leading-[23px] text-white">
              Keep the streak alive!
            </Text>

            <Text className="font-inter-regular text-xs leading-5 text-[#BDC2FF]">
              You have focused for 5 consecutive days. One more session to hit
              your weekly goal.
            </Text>

            <Pressable className="w-[50%] rounded-full bg-white px-[24px] py-[8px] leading-4">
              <Text className="text-center font-inter-semibold text-xs uppercase leading-4 tracking-[0.6px] text-primary-2">
                Start now
              </Text>
            </Pressable>
          </View> */}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default RecentSessionsScreen;
