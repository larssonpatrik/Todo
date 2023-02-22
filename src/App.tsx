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
  >([]);
  const [activePage, setActivePage] = useState<{
    title: string;
    lists: {
      label: string;
      taskList: { task: string; completed: boolean }[];
    }[];
  }>({ title: "init", lists: [] });
  const [addingState, setAddingState] = useState<boolean>(false);

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
            />
          }
        ></Route>
        <Route
          path="/mobile/:listname"
          element={
            <ListGridPresenter activePageState={[activePage, setActivePage]} />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
