//Declare o estilo do fomulário aqui
import styled from "styled-components";

export const Form = styled.form
  display: flex;
  flex-direction: column;
  gap: 25px;

select {
    border-radius: 5px;
    width: 100px;
    text-align: center;
    margin-left: 100px;
  }

  label {
    color: darkgray;
    font-size: 16px;

    &:hover {
      color: black;
    }

    input {
      width: 100%;
      margin-top: 10px;
      border: none;
      border-bottom: 1px gray solid;
      outline: none;
      font-size: 16px;
      padding: 2px;

      &::placeholder {
        color: lightgray;
      }

      &:focus {
        border-bottom: 1px solid orange;
      }
    }
  }

  button {
    border-radius: 10px;
    height: 35px;
    border: none;
    background-color: #e9e9e9;
    color: #a9a9a9;

    &:active {
      background-color: darkorange;
      cursor: pointer;
      color: white;
    }
  }
;