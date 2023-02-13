import React, { useState } from "react";
import Spacer from "../components/Spacer";
import ListPresenter from "./ListPresenter";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { H2, Paragraph } from "../components/Typography";
import ListInputForm from "../components/ListInputForm";

export default function ListGridPresenter() {
  const [TodoList, setTodoList] = useState<string[]>([]);
  const [addingState, setAddingState] = useState<boolean>(false);

  function addToList(listToBeAdded: string) {
    setTodoList([...TodoList, listToBeAdded]);
    setAddingState(!addingState);
  }

  function removeFromList(listToBeRemoved: string) {
    function findSameCB(title: string) {
      return title !== listToBeRemoved;
    }
    setTodoList(TodoList.filter(findSameCB));
  }

  return (
    <ScDiv>
      {TodoList.map((title) => {
        return <ListPresenter title={title} removeList={removeFromList} />;
      })}
      <ScAddListElement addingState={addingState}>
        {addingState ? (
          <div>
            <H2>List name</H2>
            <ListInputForm action={addToList} />
            <Spacer size={1} />
            <Paragraph
              align="center"
              button={true}
              action={() => setAddingState(!addingState)}
            >
              Cancel
            </Paragraph>
          </div>
        ) : (
          <div
            style={{ textAlign: "center", padding: 12, cursor: "pointer" }}
            onClick={() => setAddingState(!addingState)}
          >
            <AiOutlinePlus size={50} color="#dcdcdc" />
            <Spacer size={0} />
            <Paragraph color="#cccccc">Add new list</Paragraph>
          </div>
        )}
      </ScAddListElement>
      {(TodoList.length === 1 || TodoList.length === 4) && (
        <div style={{ height: "auto", width: 430 }} />
      )}
    </ScDiv>
  );
}

const ScDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  row-gap: 32px;
  margin: 0 10vw;
  justify-content: space-between;
`;

const ScAddListElement = styled.div<{ addingState: boolean }>`
  display: flex;
  flex-direction: column;
  ${(props) =>
    !props.addingState ? "justify-content: center; align-items: center;" : null}
  width: 430px;
  padding: 24px;
  border-radius: 8px;
  border: 3px solid #f0f0f0;
  box-sizing: border-box;
`;
