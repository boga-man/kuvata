import { GlobalStyle } from "./Global/Style";
import { IRequest } from "./Interfaces/Request";
import RequestCEIndex from "./Molecules/RequestCE/Index";
import RequestViewIndex from "./Molecules/RequestView/Index";

const requestMock: IRequest = {
  intro: {
    method: "DELETE",
    endpoint: "/auth/login",
    description:
      "HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred to as HTTP verbs. Each of them implements a different semantic",
  },
  body: "The body must contain the following: \n\t Hello",
  params: [{ kei: "type", value: "admin" }],
  headers: [
    { kei: "Content-Type", value: "application/json" },
    { kei: "Geography", value: "as-east-1" },
  ],
  responses: [
    { kei: 200, value: "user already present and logged in" },
    { kei: 201, value: "new user created and logged in" },
  ],
  errors: [{ kei: 404, value: "id token missing" }],
};
function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <RequestViewIndex
        style={{ width: "90%", maxWidth: "550px", margin: "10px auto" }}
        request={requestMock}
        onDeleteRequest={() => {}}
      /> */}
      <RequestCEIndex
        style={{ width: "90%", maxWidth: "550px", margin: "10px auto" }}
      />
    </div>
  );
}

export default App;
