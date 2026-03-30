import React from "react";
import { Text, View } from "react-native";

const WEEKLY_DATA = [
  { id: "1", day: "M", percentage: 50 },
  { id: "2", day: "T", percentage: 74 },
  { id: "3", day: "W", percentage: 94 },
  { id: "4", day: "T", percentage: 38 },
  { id: "5", day: "F", percentage: 50 },
  { id: "6", day: "S", percentage: 32 },
  { id: "7", day: "S", percentage: 45 },
];

const WeeklyConsistency = () => {
  return (
    <View className="mt-10 flex flex-col items-start justify-center gap-8 rounded-[48px] bg-white p-10">
      <Text className="text-primary-3 font-manrope-bold mt-2 text-lg font-bold leading-7">
        WeeklyConsistency
      </Text>

      <View className="flex w-full flex-row items-end justify-between">
        {WEEKLY_DATA.map((item) => (
          <View
            key={item.id}
            className="flex flex-col items-center justify-start gap-4"
          >
            <View
              style={{ height: item.percentage }}
              className={`w-[12px] rounded-full ${item.percentage > 80 ? "bg-[#1A237E]" : item.percentage > 50 ? "bg-[#B78EFE]" : "bg-[#E8E8E8]"}`}
            ></View>

            <Text className="font-inter-regular text-[10px] leading-4 text-[#454652]">
              {item.day}
            </Text>
          </View>
        ))}
      </View>

      <Text className="font-inter-regular text-center text-sm leading-5 text-[#454652]">
        "You focused 12% more than last Wednesday."
      </Text>
    </View>
  );
};

export default WeeklyConsistency;
