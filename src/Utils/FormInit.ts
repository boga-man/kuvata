import { IRequest } from "../Interfaces/Request";

export const initFormState: IRequest = {
  intro: {
    method: "GET",
    endpoint: "",
    description: "",
  },
  params: [],
  headers: [],
  body: "",
  responses: [],
  errors: [],
};
