import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import ToastManager from "./Components/ToastManager";
import { SimaraThemeContext } from "./Global/Context";
import { SimaraDarkTheme } from "./Global/ThemeData";
import { store } from "./Store/store";

ReactDOM.render(
  <React.StrictMode>
    <SimaraThemeContext.Provider value={{ themeData: SimaraDarkTheme }}>
      <Provider store={store}>
        <ToastManager>
          <App />
        </ToastManager>
      </Provider>
    </SimaraThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
