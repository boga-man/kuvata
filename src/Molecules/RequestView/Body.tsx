import React from "react";
interface BodyProps {
  body: string;
}
function Body(props: BodyProps) {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <p style={{ fontSize: "15px", marginTop: "10px" }}>Body</p>
      <p
        style={{
          borderRadius: "4px",
          background: "rgba(100,100,100,0.2)",
          fontSize: "small",
          padding: "10px 5px",
        }}
      >
        {props.body}
      </p>
    </div>
  );
}

export default Body;
