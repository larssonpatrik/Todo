import React, { useState } from "react";
import TaskList from "../views/TaskList";

type ListPresenterProps = {
  title: string;
  removeList: Function;
};

export default function ListPresenter({
  title,
  removeList,
}: ListPresenterProps) {
  const [taskList, setTaskList] = useState<
    { task: string; completed: boolean }[]
  >([]);

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

  console.log(taskList);

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
