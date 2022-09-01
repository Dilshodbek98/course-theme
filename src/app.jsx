import React, {useState} from "react";
import { ThemeProvider, createGlobalStyle} from "styled-components";
import {
  Box,
  Button,
  Container,
  Description,
  LoginBtn,
  RegisterBtn,
  Title,
  Rotate,
} from "./styled";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) => props.theme.bgc};
    color: ${(props) => props.theme.cl};
  }
`

const App = () => {
  const [dark, setDark] = useState(<i className="far fa-bullseye"></i>);
  const theme = {
    bgc: dark ? 'black' : 'white',
    cl: dark ? 'white' : 'black',
  }
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyle/>
      <Container>
        <Button>Click me</Button>
        <LoginBtn>Login</LoginBtn>
        <RegisterBtn>Register</RegisterBtn>
        <Rotate>Rotate</Rotate>
        <button onClick={()=>setDark(!dark)}>change theme</button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
