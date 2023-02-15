import React from "react";
import Spacer from "../components/Spacer";
import ListPresenter from "../presenters/ListPresenter";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { H2, Paragraph } from "../components/Typography";
import InputForm from "../components/InputForm";

type ListGridProps = {
  todoArray: {
    title: string;
    taskList: { task: string; completed: boolean }[];
  }[];
  taskListState: [
    taskList: { task: string; completed: boolean }[],
    setTaskList: Function
  ];
  addingState: [addingState: boolean, setAddingState: Function];
  addToList: Function;
  removeFromList: Function;
};

export default function ListGrid({
  todoArray,
  addingState,
  taskListState,
  addToList,
  removeFromList,
}: ListGridProps) {
  const [addingStateVar, setAddingState] = addingState;

  return (
    <ScDiv>
      {todoArray.map((listObj) => {
        return (
          <ListPresenter
            title={listObj.title}
            removeList={removeFromList}
            taskState={taskListState}
            todoArray={todoArray}
          />
        );
      })}
      <ScAddListElement addingState={addingStateVar}>
        {addingStateVar ? (
          <div>
            <H2>List name</H2>
            <Spacer size={1} />
            <InputForm action={addToList} />
            <Spacer size={1} />
            <Paragraph
              align="center"
              button={true}
              action={() => setAddingState(!addingStateVar)}
            >
              Cancel
            </Paragraph>
          </div>
        ) : (
          <div
            style={{ textAlign: "center", padding: 12, cursor: "pointer" }}
            onClick={() => setAddingState(!addingStateVar)}
          >
            <AiOutlinePlus size={42} color="#dcdcdc" />
            <Spacer size={0} />
            <Paragraph color="#cccccc">Add new list</Paragraph>
          </div>
        )}
      </ScAddListElement>
    </ScDiv>
  );
}

const ScDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
  padding: 0 56px;
`;

const ScAddListElement = styled.div<{ addingState: boolean }>`
  display: flex;
  flex-direction: column;
  ${(props) =>
    !props.addingState ? "justify-content: center; align-items: center;" : null}
  width: 18vw;
  padding: 21px;
  border-radius: 8px;
  border: 3px solid #f0f0f0;
`;
