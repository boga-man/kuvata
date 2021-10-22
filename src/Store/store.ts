import { createStore } from "redux";
import { combineReducers } from "redux";
import { IRequest } from "../Interfaces/Request";
import { requestReducer } from "./Reducers/requestReducer";
import { saveReducer, TSave } from "./Reducers/saveReducer";
import { TViewOnly, viewOnlyReducer } from "./Reducers/viewOnlyReducer";

export interface IStore{
    saveToStorage: TSave,
    viewOnly: TViewOnly,
    requestStore: IRequest[],
}

const allReducers = combineReducers({
    saveToStorage: saveReducer,
    viewOnly: viewOnlyReducer,
    requestStore: requestReducer,
});

export const store = createStore(allReducers);

