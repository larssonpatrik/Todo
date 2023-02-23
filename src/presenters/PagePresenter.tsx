import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SidebarItem from "../components/SidebarItem";
import Spacer from "../components/Spacer";
import { H1, H2 } from "../components/Typography";
import Wrapper from "../components/Wrapper";
import MobilePageView from "../views/MobilePageView";
import NoListsView from "../views/NoListsView";
import ListGridPresenter from "./ListGridPresenter";
import SidebarPresenter from "./SidebarPresenter";

type PagePresenterProps = {
  pageListProp: [
    {
      title: string;
      lists: {
        label: string;
        taskList: { task: string; completed: boolean }[];
      }[];
    }[],
    Function
  ];
  activePageProp: [
    {
      title: string;
      lists: {
        label: string;
        taskList: { task: string; completed: boolean }[];
      }[];
    },
    Function
  ];
  addingStateProp: [boolean, Function];
  changeActivePageProp: Function;
};

export default function PagePresenter({
  pageListProp,
  activePageProp,
  addingStateProp,
  changeActivePageProp,
}: PagePresenterProps) {
  const [pageList, setPageList] = pageListProp;
  const [activePage, setActivePage] = activePageProp;
  const [addingState, setAddingState] = addingStateProp;
  const changeActivePage = changeActivePageProp;

  let width: number;
  width = window.innerWidth;

  if (width > 480) {
    return (
      <Wrapper direction="row">
        <SidebarPresenter
          SBpageList={[pageList, setPageList]}
          SBactivePage={[activePage, setActivePage]}
          SBaddingState={[addingState, setAddingState]}
        />
        <Wrapper direction="col" style={{ width: "80vw" }}>
          {pageList.length !== 0 ? (
            <>
              <Spacer size={7} />
              <Spacer size={5} />
              <H1>{activePage.title}</H1>
              <Spacer size={6} />
              <ListGridPresenter
                activePageState={[activePage, changeActivePage]}
              />
            </>
          ) : (
            <>
              <Spacer size={7} />
              <Spacer size={7} />
              <Spacer size={7} />
              <NoListsView />
            </>
          )}
        </Wrapper>
      </Wrapper>
    );
  } else {
    return (
      <>
        <MobilePageView
          MobPageList={[pageList, setPageList]}
          MobActivePage={[activePage, setActivePage]}
          MobAddingState={[addingState, setAddingState]}
        />
      </>
    );
  }
}
