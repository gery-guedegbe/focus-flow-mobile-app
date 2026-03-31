import { ImageSourcePropType } from "react-native";

export interface TabBarIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}

export type Session = {
  id: string;
  title: string;
  duration: number;
  startTime: number;
  endTime?: number;
  completed: boolean;
};

export type ActiveSession = {
  id: string;
  title: string;
  duration: number;
  startTime: number;
  isRunning: boolean;
  pausedAt?: number;
};

export type Settings = {
  focusMode: boolean;
};
