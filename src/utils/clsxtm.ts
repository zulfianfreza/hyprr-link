import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function clsxtm(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
