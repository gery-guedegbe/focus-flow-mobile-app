import { IMAGES } from "@/constants/images";
import { TabBarIconProps } from "@/types/types";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const TabBarIcon = ({ focused, icon, title }: TabBarIconProps) => (
  <View
    className={`mt-10 flex min-h-full min-w-28 flex-row items-center justify-center gap-2 rounded-full py-4 ${
      focused ? "bg-primary-1" : "bg-transparent"
    }`}
    style={{ alignSelf: "center" }}
  >
    <Image
      source={icon}
      className="size-5"
      resizeMode="contain"
      tintColor={focused ? "#FFFFFF" : "#94A3B8"}
    />

    <Text
      className={`font-gilroy-semibold text-sm font-semibold ${focused ? "text-white" : "text-[##94A3B8]"}`}
    >
      {title}
    </Text>
  </View>
);

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          marginHorizontal: 20,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#FFFFFF",
          // Ombres
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
          borderTopWidth: 0,
          paddingBottom: 0,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="focus"
        options={{
          title: "Focus",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              icon={IMAGES.focus_icon}
              title="Focus"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="insights"
        options={{
          title: "Insights",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              icon={IMAGES.insights_icon}
              title="Insights"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
