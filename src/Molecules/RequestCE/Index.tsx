import { CSSProperties, useState } from "react";
import styled from "styled-components";
import Button from "../../Components/Button";
import { IconChevronRight } from "../../Components/Icons";
import TextArea from "../../Components/TextArea";
import { IKeyValue } from "../../Interfaces/Global";
import { IRequest } from "../../Interfaces/Request";
import KVInput from "../KVInput";
import RequestIntroInput from "./RequestIntro";
const RCEContainer = styled.div`
  border-radius: 5px;
  padding: 10px;
  height: 90vh;
  overflow: auto;
`;
interface RCEIProps {
  request?: IRequest;
  style?: CSSProperties;
}
function RequestCEIndex(props: RCEIProps) {
  const [body, setBody] = useState("");
  const [params, setParams] = useState<IKeyValue<string, string>[]>(
    props.request?.params || []
  );
  const [headers, setHeaders] = useState<IKeyValue<string, string>[]>(
    props.request?.headers || []
  );
  const [responses, setResponses] = useState<IKeyValue<string, string>[]>(
    props.request?.responses || []
  );
  const [errors, setErrors] = useState<IKeyValue<string, string>[]>(
    props.request?.errors || []
  );
  return (
    <RCEContainer style={props.style}>
      <RequestIntroInput />
      <KVInput
        data={params}
        title="Params"
        onChange={(data) => {
          setParams(data);
        }}
      />
      <KVInput
        data={headers}
        title="Headers"
        intent="warning"
        onChange={(data) => {
          setHeaders(data);
        }}
      />
      <p style={{ margin: "5px 0", marginTop: "10px" }}>Body</p>
      <TextArea
        value={body}
        onKeyDown={(e) => {
          if (e.key === "Tab") {
            e.preventDefault();
            setBody((ps) => ps + "\t");
          }
        }}
        onChange={(e) => {
          setBody((ps) => e.target.value);
        }}
        placeholder="Describe body"
        style={{ resize: "vertical", width: "100%" }}
      />
      <KVInput
        data={responses}
        title="Responses"
        intent="success"
        onChange={(data) => {
          setResponses(data);
        }}
      />
      <KVInput
        data={errors}
        title="Errors"
        intent="danger"
        onChange={(data) => {
          setErrors(data);
        }}
      />
      <Button
        iconAfter={IconChevronRight}
        style={{ width: "100%", marginTop: "20px" }}
        intent="success"
        cSize="large"
      >
        Save
      </Button>
    </RCEContainer>
  );
}

export default RequestCEIndex;
