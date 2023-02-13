import React from "react";
import "./App.css";
import Spacer from "./components/Spacer";
import { H1 } from "./components/Typography";
import Wrapper from "./components/Wrapper";
import ListGridPresenter from "./presenters/ListGridPresenter";
import SidebarPresenter from "./presenters/SidebarPresenter";

function App() {
  return (
    <Wrapper direction="row">
      <SidebarPresenter />
      <Wrapper direction="col" style={{ width: "80vw" }}>
        <Spacer size={7} />
        <Spacer size={5} />
        <H1>Stuff to do</H1>
        <Spacer size={6} />
        <ListGridPresenter />
      </Wrapper>
    </Wrapper>
  );
}

export default App;
