import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToastManager from "./Components/ToastManager";
import { GlobalStyle } from "./Global/Style";
import { IRequest } from "./Interfaces/Request";
import RequestCEIndex from "./Molecules/RequestCE/Index";
import RequestViewIndex from "./Molecules/RequestView/Index";
import TopBar from "./Molecules/TopBar";
import { IStore } from "./Store/store";
import { InitFormState } from "./Utils/Auxillary";

function App() {
  const requestStore: IRequest[] = useSelector(
    (state: IStore) => state.requestStore
  );
  const { viewOnly, saveLocally } = useSelector((state: IStore) => {
    return { viewOnly: state.viewOnly, saveLocally: state.saveLocally };
  });
  const [formRequest, setFormRequest] = useState(InitFormState);

  useEffect(() => {}, [formRequest]);

  const dispatch = useDispatch();
  return (
    <ToastManager>
      <GlobalStyle />
      <TopBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {viewOnly || (
          <RequestCEIndex
            request={formRequest}
            onSave={() => {
              setFormRequest((ps) => {
                return { ...InitFormState };
              });
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
            setFormRequest(request);
          }}
        />
      </div>
    </ToastManager>
  );
}

export default App;
