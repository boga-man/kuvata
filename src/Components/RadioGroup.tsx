import React from "react";
import { ComponentSize, ComponentIntent } from "../Global/Type";
import Radio from "./Radio";

interface RadioGroupProps {
  style?: React.CSSProperties;
  radioStyles?: React.CSSProperties;
  cSize?: ComponentSize;
  onChange?: (value: string) => void;
  intent?: ComponentIntent;
  value?: string;
  options?: {
    label?: string;
    value: string;
  }[];
}
function RadioGroup(props: RadioGroupProps) {
  function getSelected(index: number): number {
    if (props.options) {
      for (let i = 0; i < props.options?.length; i++) {
        if (props.options[i].value === props.value) {
          return i;
        }
      }
    }
    return -1;
  }
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        ...props.style,
      }}
    >
      {props.options?.map((item, index) => {
        return (
          <Radio
            key={item.value + index + item.label}
            style={{ ...props.radioStyles, marginTop: "5px" }}
            label={item.label}
            intent={props.intent}
            cSize={props.cSize}
            isOn={index === getSelected(index)}
            onTap={() => {
              getSelected(index);
              props.onChange &&
                props.onChange(props.options ? props.options[index].value : "");
            }}
          />
        );
      })}
    </div>
  );
}

export default RadioGroup;
