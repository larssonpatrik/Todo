import React from "react";
import styled from "styled-components";

type WrapperProps = {};

export default function Wrapper({
  children,
}: React.PropsWithChildren<WrapperProps>) {
  return <ScWrapper isActive={true}>{children}</ScWrapper>;
}

const ScWrapper = styled.div<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "red" : "blue")};
  height: 100vh;

  :hover {
    background-color: green;
  }
`;
