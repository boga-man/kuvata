import { HTTPMethod } from "../Interfaces/Request";

function GetColorForHTTPMethod(method: HTTPMethod): string {
  switch (method) {
    case "GET":
      return "#f94144";
    case "POST":
      return "#43aa8b";
    case "PUT":
      return "#277da1";
    case "PATCH":
      return "#577590";
    case "DELETE":
      return "#f3722c";
    case "CONNECT":
      return "#90be6d";
    case "TRACE":
      return "#4d908e";
    case "HEAD":
      return "#8187dc";
    case "OPTIONS":
      return "#4ecdc4";
  }
}

export { GetColorForHTTPMethod };
