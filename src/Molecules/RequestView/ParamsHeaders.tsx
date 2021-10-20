import React from "react";
import Badge from "../../Components/Badge";
import { THeaders, TParams } from "../../Interfaces/Request";
interface PHProps {
  params: TParams;
  headers: THeaders;
}
function ParamsHeaders(props: PHProps) {
  return (
    <div style={{ width: "100%" }}>
      <p style={{ fontSize: "15px", marginTop: "10px" }}>Params</p>
      {props.params.map((item, index) => {
        return (
          <div key={item.kei + item.value + index + new Date().getMilliseconds}>
            <Badge style={{ marginRight: "10px" }}>{item.kei}</Badge>
            <Badge style={{ background: "none" }} intent="grey">
              {item.value}
            </Badge>
          </div>
        );
      })}
      <p style={{ fontSize: "15px", marginTop: "10px" }}>Headers</p>
      {props.headers.map((item, index) => {
        return (
          <div key={item.kei + item.value + index + new Date().getMilliseconds}>
            <Badge intent="warning" style={{ marginRight: "10px" }}>
              {item.kei}
            </Badge>
            <Badge style={{ background: "none" }} intent="grey">
              {item.value}
            </Badge>
          </div>
        );
      })}
    </div>
  );
}

export default ParamsHeaders;
