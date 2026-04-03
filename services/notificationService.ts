import * as Notifications from "expo-notifications";

export const requestNotificationPermission = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === "granted";
};

// 🔔 Notification immédiate (début)
export const showStartNotification = async (
  title: string,
  duration: number,
) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Focus Started 🚀",
      body: `${title} • ${duration} min`,
    },
    trigger: null,
  });
};

// ⏳ Notification “en cours”
export const showOngoingNotification = async (title: string) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Stay focused 🔥",
      body: `${title} in progress...`,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 5,
      repeats: false,
    },
  });
};

// 🎉 Notification de fin
export const scheduleEndNotification = async (duration: number) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Session Complete 🎉",
      body: "Great job! Keep the momentum.",
      sound: true,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: duration * 60,
      repeats: false,
    },
  });
};

// 🧹 Nettoyage
export const cancelAllNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};
