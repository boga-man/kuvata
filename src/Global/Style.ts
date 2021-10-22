import { createGlobalStyle } from "styled-components";
import { SimaraDarkTheme } from "./ThemeData";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans',
                sans-serif;
        scrollbar-width: thin;         
     
    }
    body{
        background: ${SimaraDarkTheme.Colors.background};
        color: ${SimaraDarkTheme.Colors.text.dil0};
        position: relative;
        scrollbar-color: ${SimaraDarkTheme.Colors.grey.dil0} ${SimaraDarkTheme.Colors.text.dil90};
    }
    *::-webkit-scrollbar {
        width: 6px;
    }
    *::-webkit-scrollbar-track {
        background: ${SimaraDarkTheme.Colors.grey.dil0};
    }
    *::-webkit-scrollbar-thumb {
        background-color: ${SimaraDarkTheme.Colors.text.dil90};
    }
`;

export { GlobalStyle };
