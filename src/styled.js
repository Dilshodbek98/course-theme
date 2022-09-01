import styled, {css, keyframes} from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 400px;
  padding: 10px;
`
export const Button = styled.div`
  background-color: coral;
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 10px;
  transition: all 0.1;
  cursor: pointer;
  :active{
    transform: scale(0.95);
    opacity: 0.5;
  }
`
export const LoginBtn = styled(Button)`
  background-color: yellow;
`

export const RegisterBtn = styled(Button)`
  background-color: green;
`
const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

export const Rotate = styled.div`
  width: 100px;
  height: 100px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  font-size: 25px;
  border-radius: 50%;
  border: 3px dotted red;
  animation: ${rotate} 2s linear infinite;
`