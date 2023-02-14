import React from "react";
import "./App.css";
import Spacer from "./components/Spacer";
import { H1 } from "./components/Typography";
import Wrapper from "./components/Wrapper";
import ListGridPresenter from "./presenters/ListGridPresenter";
import PagePresenter from "./presenters/PagePresenter";
import SidebarPresenter from "./presenters/SidebarPresenter";

function App() {
  return <PagePresenter />;
}

export default App;
