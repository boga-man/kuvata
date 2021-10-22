import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
import Switch from "../Components/Switch";
import { SimaraDarkTheme } from "../Global/ThemeData";
import ImportExport from "./ImportExport";
const STopBar = styled.div`
  height: 10vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function TopBar() {
  const [modal, showModal] = useState(false);
  return (
    <STopBar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "fit-content",
          fontSize: "small",
        }}
      >
        Save To Local Storage
        <Switch trackStyle={{ marginLeft: "10px", marginRight: "40px" }} />
        View Mode
        <Switch trackStyle={{ marginLeft: "10px" }} />
      </div>
      <div>
        <Button
          style={{ marginRight: "10px" }}
          onClick={() => {
            showModal(true);
          }}
        >
          Import / Export
        </Button>
        <Button appearance="secondary" intent="danger">
          Reset
        </Button>
      </div>
      {modal && (
        <Modal
          style={{ background: SimaraDarkTheme.Colors.background }}
          onCloseRequest={() => {
            showModal((ps) => !ps);
          }}
        >
          <ImportExport />
        </Modal>
      )}
    </STopBar>
  );
}

export default TopBar;
