import { formatRelativeDate } from "@/utils/dateFormatter";
import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface RecentSessionItemProps {
  title: string;
  time: string;
  duration: string;
  status: string;
  date?: string;
  icon: ImageSourcePropType;
}

const RecentSessionItem = ({
  title,
  time,
  duration,
  status,
  date,
  icon,
}: RecentSessionItemProps) => {
  return (
    <View className="flex w-full flex-row items-center justify-between rounded-[32px] bg-[#FFFFFF] p-5">
      <View className="flex flex-1 flex-row items-center gap-4">
        <View
          className={`rounded-full ${status === "complete" ? "bg-[#1A237E]" : status === "partial" ? "bg-[#B78EFE]/20" : "bg-[#FFDAD6]/20"} p-4`}
        >
          <Image
            source={icon}
            resizeMode="contain"
            tintColor={`${status === "complete" ? "#FFFFFF" : status === "partial" ? "#6F48B2" : "#BA1A1A"}`}
            className="h-[24px] w-[24px]"
          />
        </View>

        <View className="gap-1.5">
          <Text className="font-inter-semibold text-base font-semibold leading-6 text-primary-3">
            {title}
          </Text>

          <View className="flex flex-row items-center gap-2">
            <Text className="font-inter-regular text-sm leading-5 text-[#454652]">
              {date ? formatRelativeDate(date) : ""}
            </Text>

            <View className="h-[4px] w-[4px] rounded-full bg-[#454652]" />

            <Text className="font-inter-regular text-sm leading-5 text-[#454652]">
              {time}
            </Text>
          </View>
        </View>
      </View>

      <View className="gap-2">
        <Text className="mtext-sm text-right font-manrope-bold font-bold leading-5 text-primary-2">
          {`${duration} min`}
        </Text>

        <View
          className={`flex items-center justify-center rounded-full px-3 py-1.5 ${status === "complete" ? "bg-[#9FF79F]" : status === "partial" ? "bg-[#E2E2E2]" : "bg-[#FFDAD6]"}`}
        >
          <Text
            className={` text-center font-inter-semibold text-[10px] font-semibold uppercase leading-4 ${status === "complete" ? "text-[#005318]" : status === "partial" ? "text-[#454652]" : "text-[#93000A]"}`}
          >
            {status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RecentSessionItem;
