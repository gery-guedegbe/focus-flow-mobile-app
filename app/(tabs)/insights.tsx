import RecentSessionItem from "@/components/RecentSessionItem";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import WeeklyConsistency from "@/components/WeeklyConsistency";
import { RECENT_SESSIONS_DATA } from "@/constants/data";
import { IMAGES } from "@/constants/images";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function InsightsScreen() {
  return (
    <ScreenWrapper>
      <ScrollView className="flex-1">
        <View className="gap-1 px-6 pb-32">
          <View className="gap-6">
            <Text className="font-inter-medium text-xs font-medium uppercase leading-[18px] text-[#454652]">
              Daily Overview
            </Text>

            <Text className="text-primary-2 font-manrope-extrabold text-4xl font-extrabold leading-10">
              Your Insights
            </Text>

            <View className="rounded-[48px] bg-white p-10">
              <Image
                source={IMAGES.time_icon}
                resizeMode="contain"
                className="h-[25px] w-[25px]"
              />

              <Text className="text-primary-3 font-manrope-extrabold mt-4 text-5xl font-extrabold leading-[48px]">
                4h 32m
              </Text>

              <Text className="font-inter-regular mt-0.5 text-sm uppercase leading-5 tracking-widest text-[#454652]">
                Total Focus Time Today
              </Text>
            </View>

            <View className="mt-4 flex w-full flex-row items-center justify-between gap-3">
              <View className="w-1/2 gap-1.5 rounded-[32px] bg-[#F3F3F3] p-6">
                <Image
                  source={IMAGES.session_icon}
                  resizeMode="contain"
                  className="W-[24px] h-[24px]"
                />

                <Text className="font-manrope-bold text-primary-3 text-3xl font-bold leading-9">
                  12
                </Text>

                <Text className="font-inter-regular text-xs uppercase leading-4 text-[#454652]">
                  Sessions
                </Text>
              </View>

              <View className="w-1/2 gap-1.5 rounded-[32px] bg-[#F3F3F3] p-6">
                <Image
                  source={IMAGES.flash_icon}
                  resizeMode="contain"
                  className="W-[24px] h-[24px]"
                />

                <Text className="font-manrope-bold text-primary-3 text-3xl font-bold leading-9">
                  85%
                </Text>

                <Text className="font-inter-regular text-xs uppercase leading-4 text-[#454652]">
                  Efficiency
                </Text>
              </View>
            </View>
          </View>

          <View className="bg-primary-1 mt-6 flex w-full flex-row items-center justify-between rounded-[32px] p-6">
            <View className="gap-1.5">
              <Text className="font-manrope-bold w-[150px] text-2xl font-bold leading-8 text-white">
                Deep Work Streak
              </Text>

              <Text className="text-primary-4 font-inter-regular w-[150px] text-sm leading-5">
                You are on fire! 5 days in a row.
              </Text>
            </View>

            <View className="flex flex-row items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Image
                source={IMAGES.streak_icon}
                resizeMode="contain"
                className="h-[18px] w-[16px]"
              />

              <Text className="font-manrope-bold text-xl font-bold leading-7 text-white">
                5
              </Text>
            </View>
          </View>

          <View className="mt-8 gap-8">
            <View className="flex w-full flex-row items-center justify-between">
              <Text className="text-primary-3 font-manrope-bold text-xl font-bold leading-7">
                Recent Sessions
              </Text>

              <Pressable hitSlop={18}>
                <Text className="text-purple font-inter-semibold text-sm font-semibold leading-5">
                  View All
                </Text>
              </Pressable>
            </View>

            <View className="gap-6">
              {RECENT_SESSIONS_DATA.map((item) => (
                <RecentSessionItem
                  key={item.id}
                  title={item.title}
                  duration={item.duration}
                  time={item.time}
                  status={item.status}
                  icon={item.icon}
                />
              ))}
            </View>
          </View>

          <WeeklyConsistency />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
