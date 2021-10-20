import { TextareaHTMLAttributes, useState, useMemo } from "react";
import styled from "styled-components";
import { useSimara } from "../Global/Context";
import { ISimaraThemeData } from "../Global/Interface";

const STextAreaBox = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  display: inline-flex;
  position: relative;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const STextArea = styled.textarea`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: ${(p) => p.theme.height + "px"};
  width: ${(p) => p.theme.height * 3 + "px"};
  outline: none;
  border-radius: ${(p) => p.theme.borderRadius + "px"};
  border: 1px solid ${(p) => p.theme.inActiveBorderColor};
  font-size: ${(p) => p.theme.height / (3 * 3) + "px"};
  padding: ${(p) => (p.theme.height * 0.2) / 3 + "px"};
  transition: all 0.3s;
  font-weight: 400;
  background: ${(p) => p.theme.backgroundColor};
  color: inherit;
  -webkit-appearance: none;
  &:focus {
    border: 1px solid ${(p) => p.theme.activeBorderColor};
    box-shadow: 0 0 0 3px ${(p) => p.theme.activeBoxShadowColor};
  }
`;

const Counter = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${(p) => p.theme.height / (3.5 * 3) + "px"};
  position: absolute;
  top: -20px;
  font-weight: 600;
  width: fit-content;
  margin-right: 10px;
  color: ${(p) => p.theme.activeBorderColor};
`;
function getTextAreaTheme(p: TextAreaProps, baseTheme: ISimaraThemeData) {
  return {
    height: baseTheme.MediumHeight * 3,
    borderRadius: baseTheme.BorderRadius,
    backgroundColor: baseTheme.Colors.grey.dil90,
    inActiveBorderColor: p.isInvalid
      ? baseTheme.Colors.danger.dil30
      : baseTheme.Colors.grey.dil60,
    activeBorderColor: p.isInvalid
      ? baseTheme.Colors.danger.dil0
      : baseTheme.Colors.primary.dil0,
    activeBoxShadowColor: p.isInvalid
      ? baseTheme.Colors.danger.dil60
      : baseTheme.Colors.primary.dil90,
  };
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean;
  showMaxCounter?: boolean;
}
function TextArea(props: TextAreaProps) {
  const simaraTheme = useSimara();
  const textAreaTheme = useMemo(
    () => getTextAreaTheme(props, simaraTheme),
    [props, simaraTheme]
  );

  const [textLength, setTextLength] = useState(
    props.value?.toString.length || 0
  );
  return (
    <STextAreaBox
      style={{ width: props.style?.width, height: props.style?.height }}
    >
      {props.showMaxCounter && (
        <Counter theme={textAreaTheme}>
          {textLength + (props.maxLength ? " / " + props.maxLength : "")}
        </Counter>
      )}
      <STextArea
        theme={textAreaTheme}
        {...props}
        style={props.style}
        onChange={(e) => {
          setTextLength(e.target.value.length);
          props.onChange && props.onChange(e);
        }}
      />
    </STextAreaBox>
  );
}

export default TextArea;
