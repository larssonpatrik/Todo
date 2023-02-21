import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import InputForm from "../components/InputForm";
import SidebarItem from "../components/SidebarItem";
import Spacer from "../components/Spacer";
import { H1, H2, Paragraph } from "../components/Typography";
import Wrapper from "../components/Wrapper";
import NoListsView from "./NoListsView";

type MobilePageViewProps = {
  MobPageList: [
    {
      title: string;
      lists: {
        label: string;
        taskList: { task: string; completed: boolean }[];
      }[];
    }[],
    Function
  ];
  MobActivePage: [
    {
      title: string;
      lists: {
        label: string;
        taskList: { task: string; completed: boolean }[];
      }[];
    },
    Function
  ];
  MobAddingState: [boolean, Function];
};

export default function MobilePageView({
  MobPageList,
  MobActivePage,
  MobAddingState,
}: MobilePageViewProps) {
  const [pageList, setPageList] = MobPageList;
  const [activePage, setActivePage] = MobActivePage;
  const [addingState, setAddingState] = MobAddingState;

  function removeListCB(listName: { title: string; lists: {}[] }) {
    function sameNameCB(list: { title: string; lists: {}[] }) {
      return list.title !== listName.title;
    }

    setPageList([...pageList.filter(sameNameCB)]);
  }

  function addPageCB(listName: string) {
    if (pageList.length === 0) {
      setPageList([...pageList, { title: listName, lists: [] }]);
      setActivePage({ title: listName, lists: [] });
      setAddingState(!addingState);
    } else {
      setPageList([...pageList, { title: listName, lists: [] }]);
      setAddingState(!addingState);
    }
  }

  return (
    <Wrapper direction="col" style={{ backgroundColor: "#f0f0f0" }}>
      <Spacer size={6} />
      <H1>Todo Tracker</H1>
      <Spacer size={6} />
      {pageList.length === 0 && (
        <>
          <NoListsView mobile={true} />
          <Spacer size={6} />
        </>
      )}

      {pageList.map((pageObj, i) => {
        return (
          <>
            <SidebarItem
              label={pageObj.title}
              action={() => setActivePage(pageList[i])}
              active={activePage.title === pageObj.title}
              remove={() => removeListCB(pageObj)}
              mobile={true}
            />
            <Spacer size={1} />
          </>
        );
      })}

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
    </Wrapper>
  );
}

const ScAddPage = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 24px;
  border-radius: 8px;
  background-color: white;
  @media (max-width: 480px) {
    width: 300px;
  }
  cursor: pointer;
`;
