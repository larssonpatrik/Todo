import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

type ListInputFormProps = {
  action: Function;
};

export default function ListInputForm({ action }: ListInputFormProps) {
  const [input, setInput] = useState<string>("");

  function onInputChange(event: any) {
    setInput(event.target.value);
  }

  function onSubmit() {
    if (input !== "") {
      action(input);
      setInput("");
    }
  }

  function handleKeyPress(event: any) {
    if (event.keyCode === 13) onSubmit();
  }

  return (
    <ScDiv>
      <ScInput
        type="text"
        placeholder="Enter a list name..."
        value={input}
        onChange={onInputChange}
        onKeyUp={handleKeyPress}
      />
      <AiOutlinePlus
        size={22}
        style={{ cursor: "pointer", color: "#cccccc" }}
        onClick={onSubmit}
      />
    </ScDiv>
  );
}

const ScDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
  width: 350px;
  border-radius: 8px;
  background-color: white;
  @media (max-width: 480px) {
    width: 300px;
  }
`;

const ScInput = styled.input`
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-family: "Open Sans";
  caret-color: #cccccc;

  ::placeholder {
    color: #cccccc;
    opacity: 1;
  }

  :focus {
    border: none;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
