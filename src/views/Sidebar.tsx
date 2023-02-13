import React from "react";
import styled from "styled-components";
import SidebarItem from "../components/SidebarItem";
import Spacer from "../components/Spacer";
import { H2, Paragraph } from "../components/Typography";
import { AiOutlinePlus } from "react-icons/ai";

type SidebarProps = {};

export default function Sidebar({}: SidebarProps) {
  return (
    <ScSidebarContainer>
      <H2 style={{ paddingLeft: 24, color: "gray" }}>Todo Tracker</H2>
      <Spacer size={6} />
      <SidebarItem label="Apartment stuff" />
      <Spacer size={0} />
      <SidebarItem label="Family" />
      <Spacer size={0} />
      <SidebarItem label="KEX" />
      <Spacer size={6} />
      <ScAddPage>
        <AiOutlinePlus size={25} color={"#cccccc"} />
        <Spacer size={1} />
        <Paragraph style={{ fontWeight: 500, color: "#cccccc" }}>
          Add page
        </Paragraph>
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
