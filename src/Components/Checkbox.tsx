import React, { useMemo } from "react";
import styled from "styled-components";
import { useSimara } from "../Global/Context";
import { ISimaraThemeData } from "../Global/Interface";
import { ComponentSize, ComponentIntent } from "../Global/Type";
import { IconCheck } from "./Icons";
const SCheckbox = styled.div`
  box-sizing: border-box;
  background: ${(p) => p.theme.backgroundColor};
  height: ${(p) => p.theme.height + "px"};
  width: ${(p) => p.theme.height + "px"};
  border-radius: ${(p) => p.theme.height / 5 + "px"};
  border: 2px solid ${(p) => p.theme.borderColor};
  transition: all 0.3s;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > svg {
    color: inherit;
    height: ${(p) => p.theme.height * 0.75 + "px"};
    width: ${(p) => p.theme.height * 0.75 + "px"};
  }
`;
function getCheckboxTheme(p: CheckboxProps, baseTheme: ISimaraThemeData) {
  let height = baseTheme.MediumHeight / 2;
  let backgroundColor = baseTheme.Colors.primary.dil0;
  let borderColor = baseTheme.Colors.primary.dil60;
  switch (p.cSize) {
    case "small":
      height = baseTheme.SmallHeight / 2;
      break;
    case "large":
      height = baseTheme.LargeHeight / 2;
      break;
  }
  if (!p.isChecked) {
    backgroundColor = baseTheme.Colors.grey.dil90;
    borderColor = baseTheme.Colors.grey.dil60;
  } else {
    switch (p.intent) {
      case "success":
        backgroundColor = baseTheme.Colors.success.dil0;
        borderColor = baseTheme.Colors.success.dil60;
        break;
      case "danger":
        backgroundColor = baseTheme.Colors.danger.dil0;
        borderColor = baseTheme.Colors.danger.dil60;
        break;
    }
  }
  return {
    height,
    backgroundColor,
    borderColor,
  };
}
interface CheckboxProps {
  cSize?: ComponentSize;
  isChecked?: boolean;
  onTap?: () => void;
  intent?: ComponentIntent;
  checkColor?: string;
  label?: string;
  style?: React.CSSProperties;
}
function Checkbox(props: CheckboxProps) {
  const simaraTheme = useSimara();
  const checkboxTheme = useMemo(
    () => getCheckboxTheme(props, simaraTheme),
    [props, simaraTheme]
  );

  return (
    <label
      onClick={props.onTap}
      style={{
        fontSize: checkboxTheme.height / 1.5 + "px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        ...props.style,
      }}
    >
      <SCheckbox
        theme={checkboxTheme}
        style={{
          color: props.isChecked ? "white" : checkboxTheme.backgroundColor,
        }}
      >
        {IconCheck}
      </SCheckbox>
      <span style={{ marginLeft: "10px" }}>{props.label}</span>
    </label>
  );
}

export default Checkbox;
