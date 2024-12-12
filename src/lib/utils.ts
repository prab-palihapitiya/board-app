import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, isToday, isYesterday, subDays } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);

    if (isToday(date)) {
      return 'Today';
    } else if (isYesterday(date)) {
      return 'Yesterday';
    } else {
      return format(date, 'dd MMMM, yyyy'); // Added year for clarity
    }
  } catch (error) {
    console.error("Invalid date string:", error);
    return "Invalid Date";
  }
}