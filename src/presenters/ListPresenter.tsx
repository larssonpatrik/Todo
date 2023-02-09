import React, { useState } from "react";
import TaskList from "../components/TaskList";

type ListPresenterProps = {
  title: string;
};

export default function ListPresenter({ title }: ListPresenterProps) {
  const [taskList, setTaskList] = useState<string[]>([]);
  const [completedTaskList, setCompletedTaskList] = useState<boolean[]>([]);

  console.log(completedTaskList);

  function addTaskToListCB(taskToBeAdded: string) {
    setTaskList([...taskList, taskToBeAdded]);
    setCompletedTaskList([...completedTaskList, false]);
  }

  function removeTaskFromListCB(taskToBeRemoved: string) {
    function findSameTaskCB(task: string, i: number) {
      if (task !== taskToBeRemoved) {
        return task !== taskToBeRemoved;
      }
    }

    setCompletedTaskList([...completedTaskList, true]);
    setTaskList([...taskList.filter(findSameTaskCB)]);
  }

  function setTaskAsCompleted(index: number) {
    let tempArray = [...completedTaskList];
    tempArray[index] = !tempArray[index];
    setCompletedTaskList(tempArray);
  }

  return (
    <TaskList
      taskList={taskList}
      title={title}
      completedTaskList={completedTaskList}
      functions={[addTaskToListCB, removeTaskFromListCB, setTaskAsCompleted]}
    />
  );
}
