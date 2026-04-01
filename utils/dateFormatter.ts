export const formatRelativeDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();

  // Reset des heures pour comparer uniquement les jours
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );

  const diffTime = today.getTime() - targetDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";

  // Pour les dates plus anciennes : "Oct 24"
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};
