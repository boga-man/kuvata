import React from "react";
import styled from "styled-components";
import { IRequestIntro } from "../../Interfaces/Request";
interface RIVProps {
  requestIntroData: IRequestIntro;
}

const SRIV = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function RequestIntroView(props: RIVProps) {
  return <SRIV></SRIV>;
}

export default RequestIntroView;
