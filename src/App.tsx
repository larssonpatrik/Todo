import React from "react";
import "./App.css";
import Spacer from "./components/Spacer";
import { H1 } from "./components/Typography";
import Wrapper from "./components/Wrapper";
import ListGridPresenter from "./presenters/ListGridPresenter";

function App() {
  return (
    <Wrapper>
      <Spacer size={6} />
      <H1>Todo</H1>
      <Spacer size={6} />
      <ListGridPresenter />
    </Wrapper>
  );
}

export default App;
