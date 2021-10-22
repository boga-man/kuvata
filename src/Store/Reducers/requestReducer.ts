import { IRequest } from "../../Interfaces/Request";

// const initialState: IRequest[] = [];


const initialState: IRequest[] = [{
  intro: {
    method: "GET",
    endpoint: "dummy/get/route",
    description: "(optional)Describe your endpoint here",
  },
  params: [{
    kei: "key",
    value: "value",
  }],
  headers: [{
    kei: "header",
    value: "value",
  }],
  body: "Enter the contents expected in the body",
  responses: [{
    kei: "status code",
    value: "message",
  }],
  errors: [{
    kei: "status code",
    value: "possible cause",
  }],
},{
  intro: {
    method: "GET",
    endpoint: "dummy/get/route/2",
    description: "Describe your endpoint here",
  },
  params: [{
    kei: "key",
    value: "value",
  }],
  headers: [{
    kei: "header",
    value: "value",
  }],
  body: "Enter the contents expected in the body",
  responses: [{
    kei: "status code",
    value: "message",
  }],
  errors: [{
    kei: "status code",
    value: "possible cause",
  }],
}];

export type RequestAction = {
  type: "ADD_REQUEST" | "DELETE_REQUEST";
  payload: IRequest | number;
};

const addRequestTo = (state: IRequest[], payload: IRequest) => {
  const ret: IRequest[] = [];
  for (let i = 0; i < state.length; i++) {
    ret.push(state[i]);
  }
  ret.push(payload);
  return ret;
};

const removeRequestFrom = (state: IRequest[], payload: number)=>{
  const ret: IRequest[] = [];
  for (let i = 0; i < state.length; i++) {
    if(i !== payload){
      ret.push(state[i]);
    }
  }

  return ret;
}

export const requestReducer = (
  state: IRequest[] = initialState,
  action: RequestAction
) => {
  switch (action.type) {
    case "ADD_REQUEST":
      const addedState = addRequestTo(state, action.payload as IRequest);
      return addedState;
    case "DELETE_REQUEST":
      const removedState = removeRequestFrom(state, action.payload as number);
      return removedState;
    default:
      return state;
  }
};

