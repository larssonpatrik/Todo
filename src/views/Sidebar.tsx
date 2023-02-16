import React, { useState } from "react";
import styled from "styled-components";
import SidebarItem from "../components/SidebarItem";
import Spacer from "../components/Spacer";
import { H2, Paragraph } from "../components/Typography";
import { AiOutlinePlus } from "react-icons/ai";
import InputForm from "../components/InputForm";

type SidebarProps = {
  SBpageList: [
    {
      title: string;
      lists: {
        label: string;
        taskList: { task: string; completed: boolean }[];
      }[];
    }[],
    Function
  ];
  SBactivePage: [
    {
      title: string;
      lists: {
        label: string;
        taskList: { task: string; completed: boolean }[];
      }[];
    },
    Function
  ];
  SBaddingState: [boolean, Function];
};

export default function Sidebar({
  SBpageList,
  SBactivePage,
  SBaddingState,
}: SidebarProps) {
  const [pageList, setPagelist] = SBpageList;
  const [activePage, setActivePage] = SBactivePage;
  const [addingState, setAddingState] = SBaddingState;

  function addPageCB(listName: string) {
    if (pageList.length === 0) {
      setPagelist([...pageList, { title: listName, lists: [] }]);
      setActivePage({ title: listName, lists: [] });
      setAddingState(!addingState);
    } else {
      setPagelist([...pageList, { title: listName, lists: [] }]);
      setAddingState(!addingState);
    }
  }

  function setActivePageCB(index: number) {
    setActivePage(pageList[index]);
  }

  function removeListCB(listName: { title: string; lists: {}[] }) {
    function sameNameCB(list: { title: string; lists: {}[] }) {
      return list.title !== listName.title;
    }

    setPagelist([...pageList.filter(sameNameCB)]);
  }

  return (
    <ScSidebarContainer>
      <H2 style={{ paddingLeft: 24, color: "gray" }}>Todo Tracker</H2>
      <Spacer size={6} />
      {pageList.map((pageObj, i) => {
        return (
          <>
            <SidebarItem
              label={pageObj.title}
              active={activePage.title === pageObj.title}
              action={() => setActivePageCB(i)}
              remove={() => removeListCB(pageObj)}
            />
            <Spacer size={1} />
          </>
        );
      })}
      <Spacer size={6} />
      <ScAddPage>
        {addingState ? (
          <InputForm action={addPageCB} />
        ) : (
          <div
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => setAddingState(!addingState)}
          >
            <AiOutlinePlus size={25} color={"#cccccc"} />
            <Spacer size={1} />
            <Paragraph style={{ fontWeight: 500, color: "#cccccc" }}>
              Add page
            </Paragraph>
          </div>
        )}
      </ScAddPage>
    </ScSidebarContainer>
  );
}

const ScSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 32px;
  width: 20vw;
  background-color: #f0f0f0;
`;

const ScAddPage = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 24px;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
`;
