import RecentSessionItem from "@/components/RecentSessionItem";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import WeeklyConsistency from "@/components/WeeklyConsistency";
import { IMAGES } from "@/constants/images";
import { useSessionStore } from "@/store/store";
import { calculateStreak, getTodayStats } from "@/utils/stats";
import { formatDuration } from "@/utils/time";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function InsightsScreen() {
  const router = useRouter();

  const { sessions } = useSessionStore();

  const recentSessions = [...sessions].sort(
    (a, b) => b.startTime - a.startTime,
  );

  const getSessionIcon = (session: { completed: boolean; title: string }) => {
    if (session.completed) return IMAGES.envelope_icon;
    if (!session.completed) return IMAGES.laptop_icon;
    // Optionnel : tu peux faire une règle selon le titre ou autre
    if (session.title.toLowerCase().includes("laptop"))
      return IMAGES.laptop_icon;
    return IMAGES.flash_icon;
  };

  const todayStats = getTodayStats(sessions);
  const streak = calculateStreak(sessions);

  const totalMs = todayStats.totalTime * 60 * 1000;

  const formattedTime = formatDuration(todayStats.totalTime);

  const lastSession = sessions[0];

  // Durée réelle en minutes
  const realMinutes = lastSession.endTime
    ? Math.ceil((lastSession.endTime - lastSession.startTime) / 60000)
    : lastSession.duration;

  // Efficiency = temps réel / temps prévu * 100
  const efficiency = Math.min(
    100,
    Math.round((realMinutes / lastSession.duration) * 100),
  );

  return (
    <ScreenWrapper>
      <ScrollView className="flex-1">
        <View className="gap-1 px-6 pb-32">
          <View className="gap-6">
            <Text className="font-inter-medium text-xs font-medium uppercase leading-[18px] text-[#454652]">
              Daily Overview
            </Text>

            <Text className="font-manrope-extrabold text-4xl font-extrabold leading-10 text-primary-2">
              Your Insights
            </Text>

            <View className="rounded-[48px] bg-white p-10">
              <Image
                source={IMAGES.time_icon}
                resizeMode="contain"
                className="h-[25px] w-[25px]"
              />

              <Text className="mt-4 font-manrope-extrabold text-5xl font-extrabold leading-[48px] text-primary-3">
                {formattedTime}
              </Text>

              <Text className="mt-0.5 font-inter-regular text-sm uppercase leading-5 tracking-widest text-[#454652]">
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

                <Text className="font-manrope-bold text-3xl font-bold leading-9 text-primary-3">
                  {sessions.length}
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

                <Text className="font-manrope-bold text-3xl font-bold leading-9 text-primary-3">
                  {efficiency}%
                </Text>

                <Text className="font-inter-regular text-xs uppercase leading-4 text-[#454652]">
                  Efficiency
                </Text>
              </View>
            </View>
          </View>

          <View className="mt-6 flex w-full flex-row items-center justify-between rounded-[32px] bg-primary-1 p-6">
            <View className="gap-1.5">
              <Text className="w-[150px] font-manrope-bold text-2xl font-bold leading-8 text-white">
                Deep Work Streak
              </Text>

              <Text className="w-[150px] font-inter-regular text-sm leading-5 text-primary-4">
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
                {streak}
              </Text>
            </View>
          </View>

          <View className="mt-8 gap-8">
            <View className="flex w-full flex-row items-center justify-between">
              <Text className="font-manrope-bold text-xl font-bold leading-7 text-primary-3">
                Recent Sessions
              </Text>

              <Pressable
                hitSlop={18}
                onPress={() => router.push("/recent-sessions")}
              >
                <Text className="font-inter-semibold text-sm font-semibold leading-5 text-purple">
                  View All
                </Text>
              </Pressable>
            </View>

            <View className="gap-6">
              {recentSessions.map((session) => (
                <RecentSessionItem
                  key={session.id}
                  title={session.title}
                  date={session.startTime}
                  duration={Math.ceil(
                    (session.endTime! - session.startTime) / 60000,
                  )}
                  time={new Date(session.startTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  status={session.completed ? "complete" : "partial"}
                  icon={getSessionIcon(session)}
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
