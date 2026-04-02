import { Session } from "@/store/store";

export const getTodayStats = (sessions: Session[]) => {
  const today = new Date().toDateString();

  const todaySessions = sessions.filter(
    (s) => new Date(s.startTime).toDateString() === today && s.completed,
  );

  const total = todaySessions.reduce((acc, s) => acc + s.duration, 0);

  return {
    totalTime: total,
    count: todaySessions.length,
  };
};

export const calculateStreak = (sessions: Session[]) => {
  const days = new Set(
    sessions
      .filter((s) => s.completed)
      .map((s) => new Date(s.startTime).toDateString()),
  );

  let streak = 0;
  let current = new Date();

  while (days.has(current.toDateString())) {
    streak++;
    current.setDate(current.getDate() - 1);
  }

  return streak;
};
