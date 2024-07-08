import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export enum Theme {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}

export function setTheme(newTheme: Theme) {

  if (newTheme === Theme.System) {
    localStorage.removeItem('theme')
  } else {
    localStorage.theme = newTheme
  }

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}