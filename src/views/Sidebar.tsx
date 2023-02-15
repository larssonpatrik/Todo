import React, { useState } from "react";
import styled from "styled-components";
import SidebarItem from "../components/SidebarItem";
import Spacer from "../components/Spacer";
import { H2, Paragraph } from "../components/Typography";
import { AiOutlinePlus } from "react-icons/ai";
import InputForm from "../components/InputForm";

type SidebarProps = {
  SBpageList: [string[], Function];
  SBactivePage: [string, Function];
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

  function addListCB(list: string) {
    setPagelist([...pageList, list]);
    setAddingState(!addingState);
  }

  function setActivePageCB(listName: string) {
    setActivePage(listName);
  }

  function removeListCB(listName: string) {
    function sameNameCB(list: string) {
      return list !== listName;
    }

    setPagelist([...pageList.filter(sameNameCB)]);
  }

  return (
    <ScSidebarContainer>
      <H2 style={{ paddingLeft: 24, color: "gray" }}>Todo Tracker</H2>
      <Spacer size={6} />
      {pageList.map((page) => {
        return (
          <>
            <SidebarItem
              label={page}
              active={activePage === page}
              action={() => setActivePageCB(page)}
              remove={() => removeListCB(page)}
            />
            <Spacer size={1} />
          </>
        );
      })}
      <Spacer size={6} />
      <ScAddPage>
        {addingState ? (
          <InputForm action={addListCB} />
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
  min-height: 100vh;
  width: 20vw;
  background-color: #f0f0f0;
`;

const ScAddPage = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
`;
