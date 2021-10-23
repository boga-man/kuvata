import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
import Switch from "../Components/Switch";
import { useSimaraToast } from "../Global/Context";
import { SimaraDarkTheme } from "../Global/ThemeData";
import { IStore } from "../Store/store";
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
  const store: IStore = useSelector((state: IStore) => state);

  const dispatch = useDispatch();
  const toast = useSimaraToast();

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
        <Switch
          trackStyle={{ marginLeft: "10px", marginRight: "40px" }}
          isOn={store.saveLocally}
          onTap={() => {
            dispatch({ type: "TOGGLE_SAVE_TO_STORAGE" });
          }}
        />
        View Mode
        <Switch
          trackStyle={{ marginLeft: "10px" }}
          isOn={store.viewOnly}
          onTap={() => {
            dispatch({ type: "TOGGLE_VIEW_ONLY" });
          }}
        />
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
        <Button
          appearance="secondary"
          intent="danger"
          onClick={() => {
            const val = window.confirm(
              "All save data will be erased from current tab as well as local storage. Do you want to erase all stored data?"
            );
            if (val) {
              dispatch({
                type: "CLEAR_REQEUST_STORE",
                payload: { saveLocally: store.saveLocally },
              });
            } else {
              toast({ message: "Data not deleted. " });
            }
          }}
        >
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
