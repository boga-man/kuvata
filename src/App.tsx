import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToastManager from "./Components/ToastManager";
import { GlobalStyle } from "./Global/Style";
import { IRequest } from "./Interfaces/Request";
import RequestCEIndex from "./Molecules/RequestCE/Index";
import RequestViewIndex from "./Molecules/RequestView/Index";
import TopBar from "./Molecules/Topbar";
import { IStore } from "./Store/store";
import { initFormState } from "./Utils/FormInit";

function App() {
  const requestStore: IRequest[] = useSelector(
    (state: IStore) => state.requestStore
  );
  const [formRequest, setFormRequest] = useState(initFormState);
  console.log('Via App.tsx:', formRequest);
  const dispatch = useDispatch();

  return (
    <ToastManager>
      <GlobalStyle />
      <TopBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RequestCEIndex
          request={formRequest}
        />
        <RequestViewIndex
          request={requestStore}
          onDeleteRequest={(index: number) => {
            dispatch({ type: "DELETE_REQUEST", payload: index });
          }}
          onEditRequest={(request: IRequest) => {
            setFormRequest(request);
          }}
        />
      </div>
    </ToastManager>
  );
}

export default App;
