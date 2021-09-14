import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin:auto;
    padding: 0px;
    box-sizing: border-box;
}

html {
    @media (max-width: 100px) {
        font-size: 93.75%;
    }
}

body {
   
    -webkit-font-smoothing: antialiased;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background:  #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
}

button {
    cursor:pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`;