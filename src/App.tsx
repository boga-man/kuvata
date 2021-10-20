import React from "react";
import { IRequest } from "./Interfaces/Request";
import RequestViewIndex from "./Molecules/RequestView/Index";

const requestMock: IRequest = {
  intro: {
    method: "POST",
    endpoint: "/auth/login",
  },
  body: "this is the body",
  params: [{ kei: "type", value: "admin" }],
  headers: [
    { kei: "Content-Type", value: "application/json" },
    { kei: "Geography", value: "as-east-1" },
  ],
  response: [
    { kei: 200, value: "user already present and logged in" },
    { kei: 201, value: "new user created and logged in" },
  ],
  error: [{ kei: 404, value: "id token missing" }],
};
function App() {
  return (
    <div>
      <RequestViewIndex request={requestMock} onDeleteRequest={() => {}} />
    </div>
  );
}

export default App;
