import Select from "../../Components/Select";
import TextArea from "../../Components/TextArea";
import TextField from "../../Components/TextField";
import { IRequestIntro } from "../../Interfaces/Request";
interface RIIProps {
  data?: IRequestIntro;
}
function RequestIntroInput(props: RIIProps) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Select>
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
        />
      </div>
      <TextArea
        placeholder="Description"
        style={{ resize: "none", width: "100%", marginTop: "10px" }}
      />
    </>
  );
}

export default RequestIntroInput;
