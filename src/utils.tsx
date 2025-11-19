import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs));
};

export const formatToIdr = (price: number) => {
  const res = Intl.NumberFormat("id-ID", {}).format(Math.ceil(price));
  return res;
};
