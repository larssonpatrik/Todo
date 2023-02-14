import React, { useState } from "react";
import Spacer from "../components/Spacer";
import { H1 } from "../components/Typography";
import Wrapper from "../components/Wrapper";
import ListGridPresenter from "./ListGridPresenter";
import SidebarPresenter from "./SidebarPresenter";

export default function PagePresenter() {
  const [pageList, setPageList] = useState<string[]>(["Apartment stuff"]);
  const [activePage, setActivePage] = useState<string>(pageList[0]);
  const [addingState, setAddingState] = useState<boolean>(false);
  console.log(activePage);

  return (
    <Wrapper direction="row">
      <SidebarPresenter
        SBpageList={[pageList, setPageList]}
        SBactivePage={[activePage, setActivePage]}
        SBaddingState={[addingState, setAddingState]}
      />
      <Wrapper direction="col" style={{ width: "80vw" }}>
        <Spacer size={7} />
        <Spacer size={5} />
        <H1>{activePage}</H1>
        <Spacer size={6} />
        <ListGridPresenter />
      </Wrapper>
    </Wrapper>
  );
}
