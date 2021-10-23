import { useEffect, useState } from "react";
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
  const { viewOnly, saveLocally } = useSelector((state: IStore) => {
    return { viewOnly: state.viewOnly, saveLocally: state.saveLocally };
  });
  const [formRequest, setFormRequest] = useState(initFormState);

  useEffect(() => {
  }, [formRequest]);

  const dispatch = useDispatch();
  return (
    <ToastManager>
      <GlobalStyle />
      <TopBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {viewOnly || (
          <RequestCEIndex
            request={formRequest}
            onSave={(request: IRequest) => {
              // ("in save callback");
              setFormRequest(request);
            }}
          />
        )}
        <RequestViewIndex
          request={requestStore}
          onDeleteRequest={(index: number) => {
            dispatch({
              type: "DELETE_REQUEST",
              payload: { data: index, saveLocally },
            });
          }}
          onEditRequest={(request: IRequest) => {
            // ("Request in callback", request);
            setFormRequest(request);
          }}
        />
      </div>
    </ToastManager>
  );
}

export default App;
