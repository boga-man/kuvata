import { CSSProperties } from "react";
import styled from "styled-components";
import Button from "../../Components/Button";
import { IconPencil, IconTrash } from "../../Components/Icons";
import { useSimaraToast } from "../../Global/Context";
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
  margin: 30px 0;
  position: relative;
  width: 100%;
`;
interface RVIProps {
  request: IRequest[];
  style?: CSSProperties;
  onDeleteRequest: (index: number) => void;
  onEditRequest: (request: IRequest) => void;
}

function RequestViewIndex(props: RVIProps) {
  const toast = useSimaraToast();
  return (
    <div
      style={{
        width: "50%",
        background: "none",
        padding: "0 20px",
        height: "90vh",
        overflow: "auto",
      }}
    >
      {props.request.map((item, index) => {
        return (
          <SRVContainer key={item.intro.method + item.intro.endpoint + index}>
            <div
              style={{
                padding: "0 10px",
                background: SimaraDarkTheme.Colors.background,
                position: "absolute",
                top: -SimaraDarkTheme.SmallHeight / 2 + "px",
                right: "10px",
              }}
            >
              <Button
                isIconButton
                iconAfter={IconPencil}
                onClick={() => {
                  props.onEditRequest(item);
                }}
              />
              <Button
                intent="danger"
                iconAfter={IconTrash}
                isIconButton
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  const val = window.confirm(
                    "The following request will be deleted. Do you want to delete it?"
                  );
                  if (val) {
                    props.onDeleteRequest(index);
                    toast({
                      message: "Request Deleted",
                      intent: "danger",
                    });
                  } else {
                    toast({ message: "Request not deleted. " });
                  }
                }}
              />
            </div>
            <RequestIntro requestIntroData={item.intro} />
            <ParamsHeaders params={item.params} headers={item.headers} />
            <Body body={item.body} />
            <ResponseError responses={item.responses} errors={item.errors} />
          </SRVContainer>
        );
      })}
    </div>
  );
}

export default RequestViewIndex;
