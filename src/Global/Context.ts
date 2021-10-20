import { createContext, useContext } from "react";
import { ISimaraContext, ISimaraToast } from "./Interface";
import { SimaraLightTheme } from "./ThemeData";

export const SimaraThemeContext = createContext<ISimaraContext>({
  themeData: SimaraLightTheme,
});
export const useSimara = () => useContext(SimaraThemeContext).themeData;

// Toast
interface ISimaraToastContext {
  toastData: ISimaraToast[];
  showToast: (data: ISimaraToast) => void;
}
export const SimaraToastManagerContext = createContext<ISimaraToastContext>({
  toastData: [],
  showToast: () => {},
});
export const useSimaraToast = () =>
  useContext(SimaraToastManagerContext).showToast;
