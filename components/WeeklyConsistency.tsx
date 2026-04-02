import { useSessionStore } from "@/store/store";
import React from "react";
import { Text, View } from "react-native";

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

const WeeklyConsistency = () => {
  const { sessions } = useSessionStore();

  // Calculer le pourcentage de focus par jour
  const today = new Date();

  const weeklyData = DAYS.map((day, index) => {
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() - (today.getDay() - index));

    const daySessions = sessions.filter(
      (s) => new Date(s.startTime).toDateString() === targetDate.toDateString(),
    );

    const totalMinutes = daySessions.reduce((acc, s) => {
      const duration = s.endTime
        ? (s.endTime - s.startTime) / 60000
        : s.duration;
      return acc + duration;
    }, 0);

    // Pourcentage basé sur un objectif de 60 min par jour
    const percentage = Math.min(Math.round((totalMinutes / 60) * 100), 100);
    return { day, percentage };
  });

  return (
    <View className="mt-10 flex flex-col items-start justify-center gap-8 rounded-[48px] bg-white p-10">
      <Text className="mt-2 font-manrope-bold text-lg font-bold leading-7 text-primary-3">
        WeeklyConsistency
      </Text>

      <View className="flex w-full flex-row items-end justify-between">
        {weeklyData.map((item, idx) => (
          <View
            key={idx}
            className="flex flex-col items-center justify-start gap-4"
          >
            <View
              style={{ height: item.percentage * 1.2 }}
              className={`w-[12px] rounded-full ${item.percentage > 80 ? "bg-[#1A237E]" : item.percentage > 50 ? "bg-[#B78EFE]" : "bg-[#E8E8E8]"}`}
            ></View>

            <Text className="font-inter-regular text-[10px] leading-4 text-[#454652]">
              {item.day}
            </Text>
          </View>
        ))}
      </View>

      <Text className="text-center font-inter-regular text-sm leading-5 text-[#454652]">
        "You focused 12% more than last Wednesday."
      </Text>
    </View>
  );
};

export default WeeklyConsistency;
