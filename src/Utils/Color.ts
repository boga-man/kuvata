import { HTTPMethod } from "../Interfaces/Request";

function GetColorForHTTPMethod(method: HTTPMethod): string {
  let ch = 0;
  switch (method) {
    case "GET":
      ch = 30;
      break;
    case "POST":
      ch = 60;
      break;
    case "PUT":
      ch = 90;
      break;
    case "PATCH":
      ch = 120;
      break;
    case "DELETE":
      ch = 150;
      break;
    case "CONNECT":
      ch = 180;
      break;
    case "TRACE":
      ch = 210;
      break;
    case "HEAD":
      ch = 240;
      break;
    case "OPTIONS":
      ch = 255;
      break;
  }

  return `rgb(252,${ch},84)`;
}

export { GetColorForHTTPMethod };
