import { CSSProperties } from "react";
import styled from "styled-components";
// import { SimaraDarkTheme } from "../../Global/ThemeData";
import { IRequest } from "../../Interfaces/Request";
import KVInput from "../KVInput";
import RequestIntroInput from "./RequestIntro";
const RCEContainer = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;
interface RCEIProps {
  request?: IRequest;
  style?: CSSProperties;
}
function RequestCEIndex(props: RCEIProps) {
  return (
    <RCEContainer style={props.style}>
      <RequestIntroInput />
      <KVInput />
    </RCEContainer>
  );
}

export default RequestCEIndex;
