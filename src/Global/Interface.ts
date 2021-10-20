interface IColor {
  dil0: string;
  dil30: string;
  dil60: string;
  dil90: string;
}
interface ISimaraThemeData {
  Colors: {
    background: string;
    primary: IColor;
    success: IColor;
    danger: IColor;
    warning: IColor;
    grey: IColor;
    text: IColor;
  };
  BorderRadius: number;
  SmallHeight: number;
  MediumHeight: number;
  LargeHeight: number;
  AlertDuration: number;
}
interface ISimaraContext {
  themeData: ISimaraThemeData;
}

interface ISimaraToast {
  intent?: "info" | "danger" | "success" | "warning";
  title?: string;
  message: string;
  customIcon?: JSX.Element;
  duration?: number;
  style?: React.CSSProperties;
}
export type { IColor, ISimaraThemeData, ISimaraContext, ISimaraToast };
