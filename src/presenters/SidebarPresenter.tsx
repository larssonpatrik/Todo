import React, { useState } from "react";
import Sidebar from "../views/Sidebar";

type SidebarPresenterProps = {
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

export default function SidebarPresenter({
  SBpageList,
  SBactivePage,
  SBaddingState,
}: SidebarPresenterProps) {
  return (
    <Sidebar
      SBpageList={SBpageList}
      SBactivePage={SBactivePage}
      SBaddingState={SBaddingState}
    />
  );
}
