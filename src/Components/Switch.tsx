import React, { useMemo } from "react";
import styled from "styled-components";
import { useSimara } from "../Global/Context";
import { ISimaraThemeData } from "../Global/Interface";
import { ComponentIntent, ComponentSize } from "../Global/Type";
import { getNearestEven } from "../Utils/Size";
const SSwitchTrack = styled.div`
  box-sizing: border-box;
  background: ${(p) => p.theme.trackColor};
  height: ${(p) => p.theme.height + "px"};
  width: ${(p) => p.theme.height * 2 + "px"};
  border-radius: ${(p) => p.theme.height / 2 + "px"};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(p) => p.theme.borderColor};
  cursor: pointer;
`;
const SSwitchThumb = styled.div`
  box-sizing: border-box;
  height: ${(p) => getNearestEven(p.theme.height * 0.6) + "px"};
  width: ${(p) => getNearestEven(p.theme.height * 0.6) + "px"};
  border-radius: ${(p) => p.theme.height + "px"};
  transition: all 0.3s;
  background: ${(p) => p.theme.thumbBackgroundColor};
  transition-timing-function: ease-in-out;
`;

function getSwitchTheme(p: SwitchProps, baseTheme: ISimaraThemeData) {
  let height = baseTheme.MediumHeight / 2;
  let trackColor = baseTheme.Colors.primary.dil0;
  let borderColor = baseTheme.Colors.primary.dil60;
  let thumbBackgroundColor = "white";
  switch (p.cSize) {
    case "small":
      height = baseTheme.SmallHeight / 2;
      break;
    case "large":
      height = baseTheme.LargeHeight / 2;
      break;
  }
  if (!p.isOn) {
    trackColor = baseTheme.Colors.grey.dil90;
    borderColor = baseTheme.Colors.grey.dil60;
    thumbBackgroundColor = baseTheme.Colors.text.dil60;
  } else {
    switch (p.intent) {
      case "success":
        trackColor = baseTheme.Colors.success.dil0;
        borderColor = baseTheme.Colors.success.dil60;
        break;
      case "danger":
        trackColor = baseTheme.Colors.danger.dil0;
        borderColor = baseTheme.Colors.danger.dil60;
        break;
    }
  }
  return {
    height,
    trackColor,
    borderColor,
    thumbBackgroundColor,
  };
}
interface SwitchProps {
  cSize?: ComponentSize;
  isOn?: boolean;
  onTap?: () => void;
  intent?: ComponentIntent;
  thumbStyle?: React.CSSProperties;
  trackStyle?: React.CSSProperties;
}
function Switch(props: SwitchProps) {
  const simaraTheme = useSimara();
  const switchTheme = useMemo(
    () => getSwitchTheme(props, simaraTheme),
    [props, simaraTheme]
  );

  return (
    <SSwitchTrack
      onClick={props.onTap}
      theme={switchTheme}
      style={props.trackStyle}
    >
      <SSwitchThumb
        theme={switchTheme}
        style={{
          ...props.thumbStyle,
          transform: props.isOn ? "translateX(100%)" : "translateX(-100%)",
          marginRight: props.isOn
            ? getNearestEven(switchTheme.height * 0.6) -
              switchTheme.height * 0.3
            : "",
          marginLeft: !props.isOn
            ? getNearestEven(switchTheme.height * 0.6) -
              switchTheme.height * 0.3
            : "",
        }}
      />
    </SSwitchTrack>
  );
}

export default Switch;
