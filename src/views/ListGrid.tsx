import React, { useState } from "react";
import Spacer from "../components/Spacer";
import ListPresenter from "../presenters/ListPresenter";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { H2, Paragraph } from "../components/Typography";
import ListInputForm from "../components/ListInputForm";

type ListGridProps = {
  todoArray: string[];
  addingState: boolean;
  changeAddingState: Function;
  addToList: Function;
  removeFromList: Function;
};

export default function ListGrid({
  todoArray,
  addingState,
  changeAddingState,
  addToList,
  removeFromList,
}: ListGridProps) {
  return (
    <ScDiv>
      {todoArray.map((title) => {
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
              action={() => changeAddingState(!addingState)}
            >
              Cancel
            </Paragraph>
          </div>
        ) : (
          <div
            style={{ textAlign: "center", padding: 12, cursor: "pointer" }}
            onClick={() => changeAddingState(!addingState)}
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
  gap: 32px;
  row-gap: 32px;
  padding: 0 40px;
`;

const ScAddListElement = styled.div<{ addingState: boolean }>`
  display: flex;
  flex-direction: column;
  ${(props) =>
    !props.addingState ? "justify-content: center; align-items: center;" : null}
  width: 430px;
  padding: 16px;
  border-radius: 8px;
  border: 3px solid #f0f0f0;
  box-sizing: border-box;
`;
