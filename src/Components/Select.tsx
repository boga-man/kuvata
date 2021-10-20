import React, { SelectHTMLAttributes, useMemo } from "react";
import styled from "styled-components";
import { useSimara } from "../Global/Context";
import { ISimaraThemeData } from "../Global/Interface";
import { ComponentSize } from "../Global/Type";
const SSelect = styled.select`
  box-sizing: border-box;
  height: ${(p) => p.theme.height + "px"};
  padding: 0 10px;
  border-radius: ${(p) => p.theme.borderRadius + "px"};
  outline: none;
  font-weight: 600;
  background: ${(p) => p.theme.backgroundColor};
  color: inherit;
  border: 1px solid ${(p) => p.theme.inActiveBorderColor};
  &:focus {
    border: 1px solid ${(p) => p.theme.activeBorderColor};
    box-shadow: 0 0 0 3px ${(p) => p.theme.activeBoxShadowColor};
  }
`;

function getSelectTheme(p: SelectProps, baseTheme: ISimaraThemeData) {
  let height = baseTheme.MediumHeight;

  switch (p.cSize) {
    case "small":
      height = baseTheme.SmallHeight;
      break;
    case "large":
      height = baseTheme.LargeHeight;
      break;
  }

  return {
    height,
    borderRadius: baseTheme.BorderRadius,
    inActiveBorderColor: baseTheme.Colors.grey.dil60,
    activeBorderColor: baseTheme.Colors.primary.dil0,
    backgroundColor: baseTheme.Colors.grey.dil90,
    activeBoxShadowColor: baseTheme.Colors.primary.dil90,
  };
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
  cSize?: ComponentSize;
}
function Select(props: SelectProps) {
  const simaraTheme = useSimara();
  const selectTheme = useMemo(
    () => getSelectTheme(props, simaraTheme),
    [props, simaraTheme]
  );

  return (
    <SSelect theme={selectTheme} {...props}>
      {props.children}
    </SSelect>
  );
}

export default Select;
