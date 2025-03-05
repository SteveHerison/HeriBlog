import { Theme } from "@/types/Theme";
import { create } from "zustand";

export type ThemeState = {
  theme: Theme;
};

export type ThemeActions = {
  setTheme: (them: Theme) => void;
};

export const useThemeStore = create<ThemeState & ThemeActions>((set) => ({
  theme: "ligth",
  setTheme: (theme) => set({ theme }),
}));
