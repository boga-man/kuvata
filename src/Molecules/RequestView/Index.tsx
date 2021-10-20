import { CSSProperties } from "react";
import styled from "styled-components";
import { SimaraLightTheme } from "../../Global/ThemeData";
import { IRequest } from "../../Interfaces/Request";
import RequestIntroView from "./RequestIntroView";
const SRVContainer = styled.div`
  border-radius: 5px;
  border: 1px solid ${SimaraLightTheme.Colors.primary.dil30};
  box-shadow: 0 0 0 3px ${SimaraLightTheme.Colors.primary.dil90};
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
    <SRVContainer>
      <RequestIntroView requestIntroData={props.request.intro} />
    </SRVContainer>
  );
}

export default RequestViewIndex;
