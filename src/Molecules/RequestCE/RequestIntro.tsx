import { ChangeEvent, FormEventHandler, useEffect, useState } from "react";
import Select from "../../Components/Select";
import TextArea from "../../Components/TextArea";
import TextField from "../../Components/TextField";
import { HTTPMethod, IRequestIntro } from "../../Interfaces/Request";
interface RIIProps {
  data: IRequestIntro;
  stateHandler: (intro: IRequestIntro) => void;
}
function RequestIntroInput(props: RIIProps) {
  const [method, setMethod] = useState<HTTPMethod>("GET");
  const [endpoint, setEndpoint] = useState("");
  const [description, setDescription] = useState<string | undefined>("");

  useEffect(() => {
    setMethod(props.data.method);
    setEndpoint(props.data.endpoint);
    setDescription(props.data.description);
  }, [props.data.description, props.data.endpoint, props.data.method]);

  const handleMethodChange: FormEventHandler = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedMethod: HTTPMethod = e.target.value as HTTPMethod;
    setMethod(selectedMethod);
    props.stateHandler({ method: selectedMethod, endpoint, description });
  };

  const handleEndpointChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndpoint(e.target.value);
    props.stateHandler({ method, endpoint: e.target.value, description });
  };

  const handleDescChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    props.stateHandler({ method, endpoint, description: e.target.value });
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Select value={method} onChange={handleMethodChange}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="DELETE">DELETE</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="HEAD">HEAD</option>
          <option value="CONNECT">CONNECT</option>
          <option value="OPTIONS">OPTIONS</option>
          <option value="TRACE">TRACE</option>
        </Select>
        <TextField
          containerStyle={{ width: "100%", paddingLeft: "10px" }}
          placeholder="Endpoint"
          value={endpoint}
          onChange={handleEndpointChange}
        />
      </div>
      <TextArea
        placeholder="Description"
        style={{ resize: "none", width: "100%", marginTop: "10px" }}
        value={description}
        onChange={handleDescChange}
      />
    </>
  );
}

export default RequestIntroInput;
