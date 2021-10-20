import { CSSProperties } from "react";
import styled from "styled-components";
import { IRequest } from "../../Interfaces/Request";
const SRVContainer = styled.div`
  border-radius: 10px;
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
`;
interface RVIProps {
  request: IRequest;
  onDeleteRequest: (id: number) => void;
  style?: CSSProperties;
}
function RequestViewIndex(props: RVIProps) {
  return <div>hello</div>;
}

export default RequestViewIndex;
