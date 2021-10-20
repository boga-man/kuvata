import React from "react";
import Badge from "../../Components/Badge";
import { TError, TResponse } from "../../Interfaces/Request";
interface REProps {
  responses: TResponse;
  errors: TError;
}
function ResponseError(props: REProps) {
  return (
    <div style={{ width: "100%" }}>
      <p style={{ fontSize: "15px", marginTop: "10px" }}>Responses</p>
      {props.responses.map((item, index) => {
        return (
          <div key={item.kei + item.value + index + new Date().getMilliseconds}>
            <Badge intent="success" style={{ marginRight: "10px" }}>
              {item.kei}
            </Badge>
            <Badge intent="grey">{item.value}</Badge>
          </div>
        );
      })}
      <p style={{ fontSize: "15px", marginTop: "10px" }}>Errors</p>
      {props.errors.map((item, index) => {
        return (
          <div key={item.kei + item.value + index + new Date().getMilliseconds}>
            <Badge intent="danger" style={{ marginRight: "10px" }}>
              {item.kei}
            </Badge>
            <Badge intent="grey">{item.value}</Badge>
          </div>
        );
      })}
    </div>
  );
}

export default ResponseError;
