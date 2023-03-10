export const relativeDate = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const day = 1000 * 60 * 60 * 24;
  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  if (days > 0) return `${days}d`;
  if (hours > 0) return `${hours}h`;
  if (minutes > 0) return `${minutes}m`;
  if (seconds > 0) return `${seconds}s`;
  return 'now';
}