import { clsx, type ClassValue } from "clsx";
import { Montserrat } from "next/font/google";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
