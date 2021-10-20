import { CSSProperties } from "react";
import styled from "styled-components";
import { SimaraDarkTheme } from "../../Global/ThemeData";
import { IRequest } from "../../Interfaces/Request";
import RequestIntroView from "./RequestIntroView";
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
      <RequestIntroView requestIntroData={props.request.intro} />
    </SRVContainer>
  );
}

export default RequestViewIndex;
