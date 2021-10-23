import { config } from "../../Global/Config";
import { IRequest } from "../../Interfaces/Request";

const storedState = localStorage.getItem(config.localStorageKey);

const initialState: IRequest[] =
  storedState !== null ? JSON.parse(storedState) : [];

export type RequestAction = {
  type:
    | "ADD_REQUEST"
    | "DELETE_REQUEST"
    | "CLEAR_REQEUST_STORE"
    | "IMPORT_REQUEST_STORE";
  payload: { data?: IRequest | number | string; saveLocally: boolean };
};

const addRequestTo = (state: IRequest[], payload: IRequest) => {
  const ret: IRequest[] = [];
  for (let i = 0; i < state.length; i++) {
    ret.push(state[i]);
  }
  ret.push(payload);
  return ret;
};

const removeRequestFrom = (state: IRequest[], payload: number) => {
  const ret: IRequest[] = [];
  for (let i = 0; i < state.length; i++) {
    if (i !== payload) {
      ret.push(state[i]);
    }
  }

  return ret;
};

export const requestReducer = (
  state: IRequest[] = initialState,
  action: RequestAction
) => {
  switch (action.type) {
    case "ADD_REQUEST":
      const addedState = addRequestTo(state, action.payload.data as IRequest);
      if (action.payload.saveLocally) {
        localStorage.setItem(
          config.localStorageKey,
          JSON.stringify(addedState)
        );
      }
      return addedState;
    case "DELETE_REQUEST":
      const removedState = removeRequestFrom(
        state,
        action.payload.data as number
      );
      if (action.payload.saveLocally) {
        localStorage.setItem(
          config.localStorageKey,
          JSON.stringify(removedState)
        );
      }
      return removedState;
    case "CLEAR_REQEUST_STORE":
      const newState: IRequest[] = [];
      localStorage.setItem(config.localStorageKey, JSON.stringify(newState));
      return newState;
    case "IMPORT_REQUEST_STORE":
      const importedStateJson: string = action.payload.data as string;
      const importedState = JSON.parse(importedStateJson); 
      if (action.payload.saveLocally) {
        localStorage.setItem(
          config.localStorageKey,
          JSON.stringify(importedState)
        );
      }
      return importedState;
    default:
      return state;
  }
};
