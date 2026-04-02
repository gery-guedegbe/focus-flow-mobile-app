import { IMAGES } from "@/constants/images";
import { useSessionStore } from "@/store/store";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

const StartSession = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(45);
  const [loading, setLoading] = useState(false);

  const { startSession } = useSessionStore();

  const isDisabled = duration <= 0;

  return (
    <View
      style={{
        boxShadow:
          "0 10px 30px 0 rgba(26, 35, 126, 0.05), 0 4px 8px 0 rgba(0, 0, 0, 0.02)",
      }}
      className="items-center gap-10 rounded-[48px] p-6"
    >
      <View className="w-full items-center gap-2 px-4">
        <Text className="font-inter-regular text-xs uppercase tracking-[1.2px] text-[#94A3B8]">
          Session Goal
        </Text>

        <View className="w-full flex-row items-center justify-center border-b border-transparent focus:border-primary-2">
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Nommer votre session..."
            placeholderTextColor="#CBD5E1"
            className="text-center font-manrope-bold  text-2xl text-primary-1"
            maxLength={30}
            returnKeyType="done"
          />
        </View>
      </View>

      <View
        style={{
          boxShadow:
            "0 10px 30px 0 rgba(26, 35, 126, 0.05), 0 4px 8px 0 rgba(0, 0, 0, 0.02)",
        }}
        className="flex h-[192px] w-[192px] items-center justify-center rounded-full border-4 border-[#F3F3F3]"
      >
        <Text className="font-manrope-extrabold text-[60px] font-extrabold leading-[60px] tracking-[-3px] text-primary-2">
          {duration}
        </Text>
      </View>

      <View className="gap-6">
        <Text className="text-center font-inter-regular text-xs uppercase leading-4 tracking-[1.2px] text-[#454652]">
          Select Duration (min)
        </Text>

        <View className="flex flex-row items-center gap-4">
          {[25, 45, 60].map((item) => (
            <Pressable
              hitSlop={12}
              key={item}
              onPress={() => setDuration(item)}
              className={`flex h-[64px] w-[64px] items-center justify-center rounded-full ${duration === item ? "bg-primary-2" : "bg-[#E8E8E8]"}`}
            >
              <Text
                className={`font-manrope-bold text-lg font-bold leading-7 ${duration === item ? "text-white" : "text-primary-3"}`}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <Pressable
        onPress={() => {
          if (isDisabled) return;

          setLoading(true);

          const sessionTitle = title.trim() || `Focus ${duration}min`;

          startSession(sessionTitle, duration);

          setTitle(""); // reset UX

          router.push("/(session)/focusing");

          setLoading(false);
        }}
        style={{
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",
        }}
        className={`flex flex-row items-center gap-3 rounded-full bg-primary-1 px-[48px] py-[20px] ${
          isDisabled ? "bg-gray-300" : "bg-primary-1"
        }`}
      >
        <Image
          source={IMAGES.play_icon}
          resizeMode="contain"
          className="h-[14px] w-[14px]"
        />

        <Text className="font-manrope-bold text-[20px] font-bold leading-7 text-white">
          {loading ? "Starting..." : "Start Session"}
        </Text>
      </Pressable>
    </View>
  );
};

export default StartSession;
