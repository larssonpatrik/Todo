import React, { useState } from "react";
import Sidebar from "../views/Sidebar";

type SidebarPresenterProps = {
  SBpageList: [string[], Function];
  SBactivePage: [string, Function];
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
