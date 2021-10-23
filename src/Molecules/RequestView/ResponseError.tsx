import { TError, TResponse } from "../../Interfaces/Request";
import KVDisplay from "../KVDisplay";
interface REProps {
  responses: TResponse;
  errors: TError;
}
function ResponseError(props: REProps) {
  return (
    <div style={{ width: "100%" }}>
      {props.responses.length !== 0 && (
        <p style={{ fontSize: "15px", marginTop: "10px" }}>Responses</p>
      )}
      <KVDisplay data={props.responses} intent="success" />
      {props.errors.length !== 0 && (
        <p style={{ fontSize: "15px", marginTop: "10px" }}>Errors</p>
      )}
      <KVDisplay data={props.errors} intent="danger" />
    </div>
  );
}

export default ResponseError;
