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
        padding-bottom: 50px;
    }
`;

export { GlobalStyle };
