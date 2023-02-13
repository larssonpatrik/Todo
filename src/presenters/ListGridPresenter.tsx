import React, { useState } from "react";
import ListGrid from "../views/ListGrid";

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
    <ListGrid
      todoArray={TodoList}
      addingState={addingState}
      changeAddingState={setAddingState}
      addToList={addToList}
      removeFromList={removeFromList}
    />
  );
}
