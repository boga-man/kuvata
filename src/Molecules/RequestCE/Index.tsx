import { CSSProperties, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../Components/Button";
import { IconChevronRight } from "../../Components/Icons";
import TextArea from "../../Components/TextArea";
import { useSimaraToast } from "../../Global/Context";
import { IKeyValue } from "../../Interfaces/Global";
import { IRequest, IRequestIntro } from "../../Interfaces/Request";
import { IStore } from "../../Store/store";
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
  onSave: (request: IRequest) => void;
}

function RequestCEIndex(props: RCEIProps) {
  const toast = useSimaraToast();
  const dispatch = useDispatch();
  const saveLocally = useSelector((state: IStore) => state.saveLocally);

  const [intro, setIntro] = useState<IRequestIntro>({
    endpoint: "",
    method: "GET",
  });
  const [body, setBody] = useState("");
  const [params, setParams] = useState<IKeyValue<string, string>[]>([]);
  const [headers, setHeaders] = useState<IKeyValue<string, string>[]>([]);
  const [responses, setResponses] = useState<IKeyValue<string, string>[]>([]);
  const [errors, setErrors] = useState<IKeyValue<string, string>[]>([]);

  useEffect(() => {
    setIntro(props.request.intro);
    setBody(props.request.body);
    setParams(props.request.params);
    setHeaders(props.request.headers);
    setResponses(props.request.responses);
    setErrors(props.request.errors);
  }, [props.request]);

  const dispatchRequest = {
    intro,
    body,
    params,
    headers,
    responses,
    errors,
  };

  return (
    <RCEContainer style={props.style}>
      <RequestIntroInput
        data={intro}
        stateHandler={(intro: IRequestIntro) => {
          setIntro(intro);
          console.log('stateHandler', dispatchRequest);
          // props.onSave({ ...dispatchRequest, intro });
        }}
      />
      <KVInput
        data={params}
        title="Params"
        onChange={(data) => {
          setParams(data);
          // props.onSave({ ...dispatchRequest, params });
        }}
      />
      <KVInput
        data={headers}
        title="Headers"
        intent="warning"
        onChange={(data) => {
          setHeaders(data);
          // props.onSave({ ...dispatchRequest, headers });
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
          // props.onSave({ ...dispatchRequest, body });
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
          // props.onSave({ ...dispatchRequest, responses });
        }}
      />
      <KVInput
        data={errors}
        title="Errors"
        intent="danger"
        onChange={(data) => {
          setErrors(data);
          // props.onSave({ ...dispatchRequest, errors });
        }}
      />
      <Button
        iconAfter={IconChevronRight}
        style={{ width: "100%", marginTop: "20px" }}
        intent="success"
        cSize="large"
        onClick={() => {
          dispatch({
            type: "ADD_REQUEST",
            payload: { data: dispatchRequest, saveLocally },
          });
          props.onSave(initFormState);
          toast({
            title: `Endpoint added`,
            message: `The endpoint '${dispatchRequest.intro.endpoint}' has been added, you can check in right column`,
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
