import React, { useState } from "react";
import styled from "styled-components";
import { Paragraph } from "./Typography";
import { AiOutlineClose } from "react-icons/ai";

type SidebarItemProps = {
  label: string;
  active: boolean;
  action: Function;
  remove: Function;
  mobile?: boolean;
};

export default function SidebarItem({
  label,
  active,
  action,
  remove,
  mobile,
}: SidebarItemProps) {
  const [hover, setHover] = useState(false);
  return (
    <ScSidebarItem
      active={active}
      onClick={() => action()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Paragraph style={{ fontWeight: 600 }}>{label}</Paragraph>
      {!mobile && hover && (
        <AiOutlineClose size={16} color={"#CF4242"} onClick={() => remove()} />
      )}
      {mobile && (
        <AiOutlineClose size={16} color={"#CF4242"} onClick={() => remove()} />
      )}
    </ScSidebarItem>
  );
}

const ScSidebarItem = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 300px;
  }

  ${(props) => (props.active ? "background-color: white;" : null)}

  :hover {
    background-color: white;
  }
`;
