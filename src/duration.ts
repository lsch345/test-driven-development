export function formatDuration(seconds: number): string {
  if (seconds < 0) throw new Error('Negative values are not allowed');

  const roundedSeconds = Math.round(seconds);

  const hours = Math.floor(roundedSeconds / 3600);
  const minutes = Math.floor((roundedSeconds % 3600) / 60);
  const remainingSeconds = roundedSeconds % 60;

  let result = '';
  if (hours > 0) result += `${hours}h`;
  if (minutes > 0) result += `${minutes}m`;
  if (remainingSeconds > 0 || hours === 0 && minutes === 0) result += `${remainingSeconds}s`;

  return result;
}
