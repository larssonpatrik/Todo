import React from "react";
import styled from "styled-components";
import InputItem from "./InputItem";
import Spacer from "./Spacer";
import TaskItem from "./TaskItem";
import { H2 } from "./Typography";

type TaskListProps = {
  taskList: string[];
  title: string;
  completedTaskList: boolean[];
  functions: any[];
};

export default function TaskList({
  taskList,
  title,
  functions,
  completedTaskList,
}: TaskListProps) {
  const [addToList, removeFromList, changeState] = functions;

  return (
    <ScDiv>
      <H2>{title}</H2>
      <Spacer size={3} />
      {taskList.map((task, i) => {
        return (
          <>
            <TaskItem
              removeTask={removeFromList}
              status={completedTaskList[i]}
              changeStatus={() => changeState(i)}
            >
              {task}
            </TaskItem>
            <Spacer size={1} />
          </>
        );
      })}
      <InputItem action={addToList} />
    </ScDiv>
  );
}

const ScDiv = styled.div`
  padding: 24px;
  border-radius: 8px;
  background-color: #dcdcdc;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;
