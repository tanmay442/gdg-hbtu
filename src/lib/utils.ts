import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { GOOGLE_COLORS } from "../data/constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const GOOGLE_THEMES = [
    { border: GOOGLE_COLORS.blue, gradient: `linear-gradient(135deg, ${GOOGLE_COLORS.blue} 0%, #000000 85%)` },
    { border: GOOGLE_COLORS.red, gradient: `linear-gradient(135deg, ${GOOGLE_COLORS.red} 0%, #000000 85%)` },
    { border: GOOGLE_COLORS.yellow, gradient: `linear-gradient(135deg, ${GOOGLE_COLORS.yellow} 0%, #000000 85%)` },
    { border: GOOGLE_COLORS.green, gradient: `linear-gradient(135deg, ${GOOGLE_COLORS.green} 0%, #000000 85%)` },
];

export function getGoogleTheme(index: number) {

    return GOOGLE_THEMES[index % GOOGLE_THEMES.length];

}



export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {

    let timeout: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => func(...args), wait);

    };

}
