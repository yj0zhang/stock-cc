import { format, isValid, getTime } from "date-fns";

export function getStartFromDay(date: Date | number, count: number): number {
  const ONEDAYMILLSECOND = 24 * 60 * 60 * 1000;
  if (!isValid(date)) {
    throw new Error('date must be valid')
  }
  const fromZeroMill = getTime(date) - getTime(new Date(`${format(date, "yyyy-MM-dd")} 00:00:00`));

  return getTime(date) - fromZeroMill - (count - 1) * ONEDAYMILLSECOND;
}
