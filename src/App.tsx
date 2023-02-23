import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Spacer from "./components/Spacer";
import { H1 } from "./components/Typography";
import Wrapper from "./components/Wrapper";
import ListGridPresenter from "./presenters/ListGridPresenter";
import PagePresenter from "./presenters/PagePresenter";
import SidebarPresenter from "./presenters/SidebarPresenter";

function App() {
  const [pageList, setPageList] = useState<
    {
      title: string;
      lists: {
        label: string;
        taskList: { task: string; completed: boolean }[];
      }[];
    }[]
  >([
    {
      title: "Apartment stuff",
      lists: [
        {
          label: "Fixes",
          taskList: [
            { task: "Clean out warddrobe", completed: false },
            { task: "Fix hammermarks in door", completed: true },
            { task: "Put up poster", completed: false },
          ],
        },
        {
          label: "Groceries",
          taskList: [
            { task: "Milk", completed: false },
            { task: "Eggs", completed: false },
            { task: "Coffee", completed: false },
            { task: "Pasta", completed: true },
            { task: "Chicken", completed: true },
            { task: "Pesto", completed: true },
          ],
        },
      ],
    },
  ]);
  const [activePage, setActivePage] = useState<{
    title: string;
    lists: {
      label: string;
      taskList: { task: string; completed: boolean }[];
    }[];
  }>(pageList[0]);
  const [addingState, setAddingState] = useState<boolean>(false);

  function changeActivePage(page: {
    title: string;
    lists: {
      label: string;
      taskList: { task: string; completed: boolean }[];
    }[];
  }) {
    setActivePage(page);

    let temp = [...pageList];
    temp.forEach((pageObj, i) => {
      if (pageObj.title === activePage.title) {
        temp[i] = page;
      }
    });

    setPageList([...temp]);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PagePresenter
              pageListProp={[pageList, setPageList]}
              activePageProp={[activePage, setActivePage]}
              addingStateProp={[addingState, setAddingState]}
              changeActivePageProp={changeActivePage}
            />
          }
        ></Route>
        <Route
          path="/mobile/:listname"
          element={
            <ListGridPresenter
              activePageState={[activePage, changeActivePage]}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
