import React, { useState } from "react";
import TaskList from "../views/TaskList";

type ListPresenterProps = {
  title: string;
  todoArray: {
    title: string;
    taskList: { task: string; completed: boolean }[];
  }[];
  taskState: [
    taskList: { task: string; completed: boolean }[],
    setTaskList: Function
  ];
  removeList: Function;
};

export default function ListPresenter({
  title,
  taskState,
  removeList,
}: ListPresenterProps) {
  const [taskList, setTaskList] = taskState;

  function addTaskToListCB(taskToBeAdded: {
    task: string;
    completed: boolean;
  }) {
    setTaskList([...taskList, taskToBeAdded]);
  }

  function removeTaskFromListCB(taskToBeRemoved: string) {
    function findSameTaskCB(taskObj: { task: string; completed: boolean }) {
      return taskObj.task !== taskToBeRemoved;
    }

    setTaskList([...taskList.filter(findSameTaskCB)]);
  }

  function changeTaskStatus(index: number) {
    let temp = [...taskList];
    temp[index] = { ...temp[index], completed: !temp[index].completed };

    setTaskList(temp);
  }

  console.log("taskList: ", taskList);

  return (
    <TaskList
      taskList={taskList}
      title={title}
      functions={[
        addTaskToListCB,
        removeTaskFromListCB,
        changeTaskStatus,
        removeList,
      ]}
    />
  );
}
