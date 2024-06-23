import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  const classNames = clsx(inputs);
  // classNames is now a string: "bg-red-500 text-white p-4"

  const optimizedClassNames = twMerge(classNames);
  // optimizedClassNames is now a string with merged TailwindCSS classes
  return optimizedClassNames;
}
