import React, { useState } from "react";
import TaskList from "../views/TaskList";

type ListPresenterProps = {
  title: string;
  taskList: { task: string; completed: boolean }[];
  addTask: Function;
  removeTask: Function;
  removeList: Function;
  changeState: Function;
};

export default function ListPresenter({
  title,
  taskList,
  addTask,
  removeTask,
  removeList,
  changeState,
}: ListPresenterProps) {
  return (
    <TaskList
      taskList={taskList}
      title={title}
      addTask={addTask}
      removeTask={removeTask}
      removeList={removeList}
      changeState={changeState}
    />
  );
}
