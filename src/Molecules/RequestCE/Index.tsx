import { CSSProperties, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../../Components/Button";
import { IconChevronRight } from "../../Components/Icons";
import TextArea from "../../Components/TextArea";
import { useSimaraToast } from "../../Global/Context";
import { IKeyValue } from "../../Interfaces/Global";
import { IRequest, IRequestIntro } from "../../Interfaces/Request";
import { initFormState } from "../../Utils/FormInit";
import KVInput from "../KVInput";
import RequestIntroInput from "./RequestIntro";
const RCEContainer = styled.div`
  border-radius: 5px;
  padding: 10px;
  height: 90vh;
  overflow: auto;
  width: 50%;
`;
interface RCEIProps {
  request: IRequest;
  style?: CSSProperties;
}

function RequestCEIndex(props: RCEIProps) {
  const initIntro: IRequestIntro = {
    method: "GET",
    endpoint: props.request.intro.endpoint || '',
    description: props.request.intro.description || '',
  };

  console.log('Props in Index: ', props.request);

  const [intro, setIntro] = useState(initIntro);
  const [body, setBody] = useState("");
  const [params, setParams] = useState<IKeyValue<string, string>[]>(
    props.request.params || []
  );
  const [headers, setHeaders] = useState<IKeyValue<string, string>[]>(
    props.request.headers || []
  );
  const [responses, setResponses] = useState<IKeyValue<string, string>[]>(
    props.request.responses || []
  );
  const [errors, setErrors] = useState<IKeyValue<string, string>[]>(
    props.request.errors || []
  );

  const dispatchRequest = {
    intro,
    body,
    params,
    headers,
    responses,
    errors,
  };

  console.log('States after useState in Index:', dispatchRequest);

  const onSave = (request: IRequest) => {
    setIntro(request.intro);
    setBody(request.body);
    setParams(request.params);
    setHeaders(request.headers);
    setResponses(request.responses);
    setErrors(request.errors);
  }

  const toast = useSimaraToast();
  const dispatch = useDispatch();

  return (
    <RCEContainer style={props.style}>
      <RequestIntroInput
        data={intro}
        stateHandler={(intro: IRequestIntro) => {
          setIntro(intro);
        }}
      />
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
        onClick={() => {
          dispatch({ type: "ADD_REQUEST", payload: dispatchRequest });
          onSave(initFormState);
          toast({
            title: "Request Added",
            message:
              "Your request has been added, you can check in right column.",
            intent: "success",
          });
        }}
      >
        Save
      </Button>
    </RCEContainer>
  );
}

export default RequestCEIndex;
