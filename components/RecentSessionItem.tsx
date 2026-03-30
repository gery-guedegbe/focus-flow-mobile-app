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
    <View className="flex w-full flex-row items-center justify-between">
      <View className="flex flex-1 flex-row items-center gap-4">
        <View className="rounded-full bg-[#E8E8E8] p-4">
          <Image
            source={icon}
            resizeMode="contain"
            className="h-[24px] w-[24px]"
          />
        </View>

        <View className="gap-1.5">
          <Text className="font-inter-semibold text-primary-3 text-base font-semibold leading-6">
            {title}
          </Text>

          <View className="flex flex-row items-center gap-2">
            <Text className="font-inter-regular text-sm leading-5 text-[#454652]">
              {time}
            </Text>

            <View className="h-[4px] w-[4px] rounded-full bg-[#454652]" />

            <Text className="font-inter-regular text-sm leading-5 text-[#454652]">{`${duration} mins`}</Text>
          </View>
        </View>
      </View>

      <View
        className={`flex items-center justify-center rounded-full px-3 py-1.5 ${status === "success" ? "bg-[#9FF79F]" : "bg-[#E2E2E2]"}`}
      >
        <Text
          className={` font-inter-semibold text-center text-[10px] font-semibold uppercase leading-4 ${status === "success" ? "text-[#005318]" : "text-[#454652]"}`}
        >
          {status}
        </Text>
      </View>
    </View>
  );
};

export default RecentSessionItem;
