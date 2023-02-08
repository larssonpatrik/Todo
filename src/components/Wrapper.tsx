import React from "react";
import styled from "styled-components";

type WrapperProps = {};

export default function Wrapper({
  children,
}: React.PropsWithChildren<WrapperProps>) {
  return <ScWrapper>{children}</ScWrapper>;
}

const ScWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
