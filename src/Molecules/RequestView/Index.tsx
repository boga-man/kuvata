import { CSSProperties } from "react";
import styled from "styled-components";
import { SimaraDarkTheme } from "../../Global/ThemeData";
import { IRequest } from "../../Interfaces/Request";
import Body from "./Body";
import ParamsHeaders from "./ParamsHeaders";
import RequestIntro from "./RequestIntro";
import ResponseError from "./ResponseError";
const SRVContainer = styled.div`
  border-radius: 5px;
  border: 1px solid ${SimaraDarkTheme.Colors.grey.dil0};
  padding: 10px;
  margin: 10px;
`;
interface RVIProps {
  request: IRequest;
  onDeleteRequest: (id: number) => void;
  style?: CSSProperties;
}
function RequestViewIndex(props: RVIProps) {
  return (
    <SRVContainer style={props.style}>
      <RequestIntro requestIntroData={props.request.intro} />
      <ParamsHeaders
        params={props.request.params}
        headers={props.request.headers}
      />
      <Body body={props.request.body} />
      <ResponseError
        responses={props.request.responses}
        errors={props.request.errors}
      />
    </SRVContainer>
  );
}

export default RequestViewIndex;
