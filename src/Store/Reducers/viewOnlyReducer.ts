export type TViewOnly = boolean;

const initialState: TViewOnly = false;

export type ViewOnlyAction = { type: "TOGGLE_VIEW_ONLY" };

export const viewOnlyReducer = (
  state: TViewOnly = initialState,
  action: ViewOnlyAction
) => {
  switch (action.type) {
    case "TOGGLE_VIEW_ONLY":
      const newState = !state;
      return newState;
      
    default:
      return state;
  }
};
