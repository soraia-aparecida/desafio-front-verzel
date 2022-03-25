import React from "react"
import { createGlobalStyle } from 'styled-components'
import Router from "./router/Router"
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";

const GlobalStyle = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto" !important;
  button{
      cursor: pointer;
    }
}
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider >
  );
}

export default App;
