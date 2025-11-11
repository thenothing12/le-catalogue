import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    currency?:
      | "IDR"
      | "SGD"
      | "MYR"
      | "ILS"
      | "USD"
      | "GBP"
      | "EUR"
      | "RUB"
      | "CAD"
      | "KRW"
      | "KWD";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "IDR", notation = "compact" } = options;
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  return new Intl.NumberFormat("id", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 3,
  }).format(numericPrice);
}