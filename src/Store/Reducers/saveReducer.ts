export type TSave = boolean;

const initialState: TSave = false;

export type SaveAction = { type: "TOGGLE_SAVE_TO_STORAGE" };

export const saveReducer = (
  state: TSave = initialState,
  action: SaveAction
) => {
  switch (action.type) {
    case "TOGGLE_SAVE_TO_STORAGE":
      const newState = !state;
      return newState;
    default:
      return state;
  }
};
