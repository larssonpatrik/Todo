import React from "react";
import styled from "styled-components";
import InputItem from "../components/InputItem";
import Spacer from "../components/Spacer";
import TaskItem from "../components/TaskItem";
import { H2, Paragraph } from "../components/Typography";

type TaskListProps = {
  taskList: { task: string; completed: boolean }[];
  title: string;
  addTask: Function;
  removeTask: Function;
  removeList: Function;
  changeState: Function;
};

export default function TaskList({
  taskList,
  title,
  addTask,
  removeList,
  removeTask,
  changeState,
}: TaskListProps) {
  //
  // functions from props
  return (
    <ScDiv>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <H2>{title}</H2>
        <Paragraph
          action={() => removeList(title)}
          style={{ textDecoration: "underline", fontSize: 14 }}
          button={true}
        >
          Remove list
        </Paragraph>
      </div>
      <Spacer size={3} />
      {taskList.map((obj, i) => {
        return (
          <>
            <TaskItem
              removeTask={removeTask}
              status={obj.completed}
              changeStatus={() => changeState(i)}
            >
              {obj.task}
            </TaskItem>
            <Spacer size={1} />
          </>
        );
      })}
      <InputItem action={addTask} />
    </ScDiv>
  );
}

const ScDiv = styled.div`
  padding: 24px;
  border-radius: 8px;
  background-color: #f0f0f0;
  width: 18vw;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;
