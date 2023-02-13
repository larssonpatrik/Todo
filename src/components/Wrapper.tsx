import React from "react";
import styled from "styled-components";

type WrapperProps = { direction: "col" | "row"; style?: any };

export default function Wrapper({
  children,
  direction,
  style,
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <ScWrapper direction={direction} style={{ ...style }}>
      {children}
    </ScWrapper>
  );
}

const ScWrapper = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${(props) => (props.direction === "col" ? "column" : "row")};
  ${(props) => (props.direction === "col" ? "align-items: center;" : "")}
  min-height: 100vh;
`;
