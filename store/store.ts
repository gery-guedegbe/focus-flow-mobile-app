import {
  cancelAllNotifications,
  scheduleEndNotification,
  showOngoingNotification,
  showStartNotification,
} from "@/services/notificationService";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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

type Store = {
  sessions: Session[];
  activeSession: ActiveSession | null;
  dailyMinutes: Record<string, number>;

  startSession: (title: string, duration: number) => void;
  completeSession: () => void;
  pauseSession: () => void;
  resumeSession: () => void;
  stopSession: () => void;

  reset: () => void;
};

// store.ts
export const useSessionStore = create<Store>()(
  persist(
    (set, get) => ({
      sessions: [],
      activeSession: null,
      dailyMinutes: {},

      startSession: async (title, duration) => {
        const id = Date.now().toString();
        set({
          activeSession: {
            id,
            title,
            duration,
            startTime: Date.now(),
            isRunning: true,
          },
        });

        // 🔔 Notifications
        await showStartNotification(title, duration);
        await showOngoingNotification(title);
        await scheduleEndNotification(duration);
      },

      pauseSession: () => {
        const { activeSession } = get();
        if (!activeSession || !activeSession.isRunning) return;
        set({
          activeSession: {
            ...activeSession,
            isRunning: false,
            pausedAt: Date.now(),
          },
        });
      },

      resumeSession: () => {
        const { activeSession } = get();
        if (
          !activeSession ||
          activeSession.isRunning ||
          !activeSession.pausedAt
        )
          return;

        const pausedDuration = Date.now() - activeSession.pausedAt;

        set({
          activeSession: {
            ...activeSession,
            startTime: activeSession.startTime + pausedDuration,
            isRunning: true,
            pausedAt: undefined,
          },
        });
      },

      completeSession: async () => {
        const { activeSession, sessions, dailyMinutes } = get();
        if (!activeSession) return;

        await cancelAllNotifications();

        const endTime = Date.now();
        const elapsedSeconds = Math.floor(
          (endTime - activeSession.startTime) / 1000,
        );
        const minutes = Math.ceil(elapsedSeconds / 60);

        // Mise à jour des minutes du jour
        const today = new Date().toISOString().split("T")[0];
        const updatedDailyMinutes = {
          ...dailyMinutes,
          [today]: (dailyMinutes[today] || 0) + minutes,
        };

        const newSession: Session = {
          id: activeSession.id,
          title: activeSession.title,
          duration: activeSession.duration,
          startTime: activeSession.startTime,
          endTime,
          completed: true,
        };

        set({
          sessions: [newSession, ...sessions],
          activeSession: null,
          dailyMinutes: updatedDailyMinutes,
        });
      },

      stopSession: () => set({ activeSession: null }),

      reset: async () => {
        await cancelAllNotifications();
        set({ sessions: [], activeSession: null });
      },
    }),
    {
      name: "focus-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
