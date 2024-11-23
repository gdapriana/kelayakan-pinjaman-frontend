import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {LucideIcon} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface Navigation {
  name: string;
  url: string;
  icon?: LucideIcon;
}

export interface Member {
  name: string;
  nim: string;
  profile?: string;
}
