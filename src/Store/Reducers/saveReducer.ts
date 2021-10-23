import { config } from "../../Global/Config";
import { IRequest } from "../../Interfaces/Request";

export type TSave = boolean;

const storedState = localStorage.getItem(config.saveLocally);
if (storedState === null) {
  localStorage.setItem(config.saveLocally, "false");
}
const initialState: TSave = storedState === "true";

export type SaveAction = {
  type: "TOGGLE_SAVE_TO_STORAGE";
  payload: IRequest[];
};

export const saveReducer = (
  state: TSave = initialState,
  action: SaveAction
) => {
  switch (action.type) {
    case "TOGGLE_SAVE_TO_STORAGE":
      const newState = !state;
      const localState = newState === true ? "true" : "false";
      localStorage.setItem(config.saveLocally, localState);
      if(newState){
        localStorage.setItem(
          config.localStorageKey,
          JSON.stringify(action.payload)
        );
      }
      return newState;
      
    default:
      return state;
  }
};
