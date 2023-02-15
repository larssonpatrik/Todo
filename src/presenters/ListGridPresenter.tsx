import React, { useState } from "react";
import ListGrid from "../views/ListGrid";

type ListGridPresenterProps = {
  activePageState: [
    {
      title: string;
      lists: {
        label: string;
        taskList: { task: string; completed: boolean }[];
      }[];
    },
    Function
  ];
};

export default function ListGridPresenter({
  activePageState,
}: ListGridPresenterProps) {
  const [addingState, setAddingState] = useState<boolean>(false);
  const [activePage, changeActivePage] = activePageState;

  function addList(listName: string) {
    let temp = { ...activePage };
    temp.lists = [...temp.lists, { label: listName, taskList: [] }];
    changeActivePage({ ...temp });
  }

  function removeList(listName: string) {
    let temp = { ...activePage };
    temp.lists = temp.lists.filter((listObj) => {
      return listObj.label !== listName;
    });

    changeActivePage({ ...temp });
  }

  function changeState() {
    alert("USER WANTS TO CHANGE STATE OF TASK!");
  }

  return (
    <ListGrid
      activePageState={activePageState}
      addingState={[addingState, setAddingState]}
      addList={addList}
      removeList={removeList}
      changeState={changeState}
    />
  );
}
