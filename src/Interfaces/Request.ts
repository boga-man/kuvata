import { IKeyValue } from "./Global";

// interfaces
interface IRequestIntro {
  method: HTTPMethod;
  endpoint: string;
  description?: string;
}
interface IRequest {
  intro: IRequestIntro;
  params: TParams;
  headers: THeaders;
  body: TBody;
  responses: TResponse;
  errors: TError;
}

// types
type HTTPMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE";
type TParams = IKeyValue<string, string>[];
type THeaders = IKeyValue<string, string>[];
type TBody = string;
type TResponse = IKeyValue<number, string>[];
type TError = IKeyValue<number, string>[];
export type {
  IRequestIntro,
  HTTPMethod,
  TParams,
  THeaders,
  TBody,
  IRequest,
  TResponse,
  TError,
};
