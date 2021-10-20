import { HTTPMethod } from "../Interfaces/Request";

function GetColorForHTTPMethod(method: HTTPMethod): string {
  let s = 0;
  let m = 0;
  switch (method) {
    case "GET":
      s = 50;
      break;
    case "POST":
      s = 100;
      break;
    case "PUT":
      s = 150;
      break;
    case "PATCH":
      s = 200;
      break;
    case "DELETE":
      s = 250;
      break;
    case "CONNECT":
      m = 50;
      break;
    case "TRACE":
      m = 100;
      break;
    case "HEAD":
      m = 150;
      break;
    case "OPTIONS":
      m = 200;
      break;
  }

  return `rgba(${s},${m},255,1)`;
}

export { GetColorForHTTPMethod };
