import { IKeyValue } from "./Global";

// interfaces
interface IRequestIntro {
  method: HTTPMethod;
  endpoint: string;
  description: string;
}
interface IRequest {
  intro: IRequestIntro;
  params: TParams;
  headers: THeaders;
  body: TBody;
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
type TParams = IKeyValue[];
type THeaders = IKeyValue[];
type TBody = string;

export type { IRequestIntro, HTTPMethod, TParams, THeaders, TBody, IRequest };
