import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LucideIcon } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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

export interface Dataset {
  dataset: DatasetElement[];
  false_label: number;
  total: number;
  true_label: number;
}

export interface DatasetElement {
  "aset (juta)": ASETJuta;
  kelayakan: Kelayakan;
  "pendapatan (jt/bln)": PenanJtBln;
  "pengeluaran (jt/bln)": PenanJtBln;
  "tanggungan (orang)": ASETJuta;
  "usia (tahun)": UsiaTahun;
}

export enum ASETJuta {
  Banyak = "Banyak",
  Sedang = "Sedang",
  Sedikit = "Sedikit",
}

export enum Kelayakan {
  Layak = "Layak",
  TidakLayak = "Tidak Layak",
}

export enum PenanJtBln {
  Rendah = "Rendah",
  Sedang = "Sedang",
  Tinggi = "Tinggi",
}

export enum UsiaTahun {
  Muda = "Muda",
}
