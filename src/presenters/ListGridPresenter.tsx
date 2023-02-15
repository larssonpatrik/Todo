import React, { useState } from "react";
import ListGrid from "../views/ListGrid";

export default function ListGridPresenter() {
  const [taskList, setTaskList] = useState<
    { task: string; completed: boolean }[]
  >([]);
  const [TodoList, setTodoList] = useState<
    {
      title: string;
      taskList: { task: string; completed: boolean }[];
    }[]
  >([]);
  const [addingState, setAddingState] = useState<boolean>(false);

  function addToList(listToBeAdded: {
    title: string;
    taskList: { task: string; completed: boolean }[];
  }) {
    setTodoList([...TodoList, listToBeAdded]);
    setAddingState(!addingState);
  }

  function removeFromList(listToBeRemoved: {
    title: string;
    taskList: { task: string; completed: boolean }[];
  }) {
    function findSameCB(listObject: {
      title: string;
      taskList: { task: string; completed: boolean }[];
    }) {
      return listObject.title !== listToBeRemoved.title;
    }
    setTodoList(TodoList.filter(findSameCB));
  }

  console.log("Todo list: ", TodoList);
  return (
    <ListGrid
      todoArray={TodoList}
      taskListState={[taskList, setTaskList]}
      addingState={[addingState, setAddingState]}
      addToList={addToList}
      removeFromList={removeFromList}
    />
  );
}
