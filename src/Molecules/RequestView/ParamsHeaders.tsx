import { THeaders, TParams } from "../../Interfaces/Request";
import KVDisplay from "../KVDisplay";
interface PHProps {
  params: TParams;
  headers: THeaders;
}
function ParamsHeaders(props: PHProps) {
  return (
    <div style={{ width: "100%" }}>
      {props.headers.length !== 0 && (
        <p style={{ fontSize: "15px", marginTop: "10px" }}>Params</p>
      )}
      <KVDisplay data={props.params} />
      {props.headers.length !== 0 && (
        <p style={{ fontSize: "15px", marginTop: "10px" }}>Headers</p>
      )}
      <KVDisplay data={props.headers} intent="warning" />
    </div>
  );
}

export default ParamsHeaders;
