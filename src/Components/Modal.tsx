import React, { useMemo } from "react";
import styled from "styled-components";
import { useSimara } from "../Global/Context";
import { ISimaraThemeData } from "../Global/Interface";
import { ComponentSize } from "../Global/Type";
const SBG = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 96;
`;
const SModel = styled.div`
  background: white;
  border-radius: ${(p) => p.theme.borderRadius + "px"};
  height: ${(p) => p.theme.height + "vh"};
  width: ${(p) => p.theme.height * 1.1 + "vw"};
  max-width: 90%;
  margin: auto;
  z-index: 97;
  transform: translateY(50%);
  @media (max-width: 768px) {
    width: 90%;
  }
`;

function getModalTheme(p: ModalProps, baseTheme: ISimaraThemeData): any {
  let height = "40";
  switch (p.cSize) {
    case "small":
      height = "30";
      break;
    case "large":
      height = "50";
      break;
  }

  return {
    height,
    borderRadius: baseTheme.BorderRadius,
  };
}

interface ModalProps {
  children?: React.ReactNode;
  cSize?: ComponentSize;
  style?: React.CSSProperties;
  onCloseRequest?: () => void;
}
function Modal(props: ModalProps) {
  const simaraTheme = useSimara();
  const modalTheme = useMemo(
    () => getModalTheme(props, simaraTheme),
    [props, simaraTheme]
  );

  return (
    <SBG
      id="modal"
      onClick={(e) => {
        if (e.target && (e.target as any).id === "modal") {
          props.onCloseRequest && props.onCloseRequest();
        }
      }}
    >
      <SModel style={props.style} theme={modalTheme}>
        {props.children}
      </SModel>
    </SBG>
  );
}

export default Modal;
