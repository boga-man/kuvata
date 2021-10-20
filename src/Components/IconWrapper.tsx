import React from "react";
import styled from "styled-components";
import { ComponentSize } from "../Global/Type";
const SIconWrapper = styled.div`
  transition: all 0.3s;
  height: fit-content;
  width: fit-content;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  & > svg {
    color: ${(p) => p.theme.color};
    height: ${(p) => p.theme.size + "px"};
    width: ${(p) => p.theme.size + "px"};
  }
`;

interface IconWrapperProps {
  cSize?: ComponentSize;
  color?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
function getIWTheme(p: IconWrapperProps): any {
  let size = 18;
  switch (p.cSize) {
    case "small":
      size = 16;
      break;
    case "large":
      size = 20;
      break;
  }
  let color = p.color || "#2c63ff";
  return { size, color };
}
function IconWrapper(props: IconWrapperProps) {
  return (
    <SIconWrapper style={props.style} theme={getIWTheme(props)}>
      {props.children}
    </SIconWrapper>
  );
}

export default IconWrapper;
