import { useSessionStore } from "@/store/store";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export const useSessionTimer = () => {
  const router = useRouter();

  const { activeSession, completeSession } = useSessionStore();

  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    if (!activeSession) return;

    const interval = setInterval(() => {
      if (!activeSession.isRunning) return;

      const now = Date.now();

      const elapsed = Math.floor((now - activeSession.startTime) / 1000);

      const total = activeSession.duration * 60;

      const remainingTime = Math.max(total - elapsed, 0);

      setRemaining(remainingTime);

      if (remainingTime === 0) {
        completeSession();

        setTimeout(() => {
          router.replace("/(session)/session-complete");
        }, 0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeSession, completeSession, router]);

  return { remaining };
};
