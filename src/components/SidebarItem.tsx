import React from "react";
import styled from "styled-components";
import { H2, Paragraph } from "./Typography";

type SidebarItemProps = { label: string };

export default function SidebarItem({ label }: SidebarItemProps) {
  return (
    <ScSidebarItem>
      <Paragraph style={{ fontWeight: 600 }}>{label}</Paragraph>
    </ScSidebarItem>
  );
}

const ScSidebarItem = styled.div`
  padding: 24px;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: white;
  }
`;
