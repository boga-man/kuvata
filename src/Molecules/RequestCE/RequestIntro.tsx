import { ChangeEvent, FormEventHandler, useState } from "react";
import Select from "../../Components/Select";
import TextArea from "../../Components/TextArea";
import TextField from "../../Components/TextField";
import { HTTPMethod, IRequestIntro } from "../../Interfaces/Request";
interface RIIProps {
  data: IRequestIntro;
  stateHandler: (intro: IRequestIntro) => void;
}
function RequestIntroInput(props: RIIProps) {
  const data = props.data;
  const [method, setMethod] = useState<HTTPMethod>(data.method);
  const [endpoint, setEndpoint] = useState(data.endpoint);
  const [description, setDescription] = useState(data.description);

  const handleMethodChange: FormEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedMethod: HTTPMethod = e.target.value as HTTPMethod;
    setMethod(selectedMethod);
    props.stateHandler({ method: selectedMethod, endpoint, description });
  };

  const handleEndpointChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndpoint(e.target.value);
    props.stateHandler({ method, endpoint: e.target.value, description });
  };

  const handleDescChange= (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    props.stateHandler({method, endpoint, description: e.target.value});
  };

  return (
    <>
      <div style={{ display: "flex" }} >
        <Select onChange={handleMethodChange} >
          <option value="">GET</option>
          <option value="">POST</option>
          <option value="">DELETE</option>
          <option value="">PUT</option>
          <option value="">PATCH</option>
          <option value="">HEAD</option>
          <option value="">CONNECT</option>
          <option value="">OPTIONS</option>
          <option value="">TRACE</option>
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
