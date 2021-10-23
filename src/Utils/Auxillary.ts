import { IRequest } from "../Interfaces/Request";
export function isValidIRequestJSON(data: string): boolean {
  try {
    JSON.parse(data);
    return !(data === "undefined" || data === undefined);
  } catch (err) {
    return false;
  }
}

export const InitFormState: IRequest = {
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
