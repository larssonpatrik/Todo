import React from "react";
import styled from "styled-components";

const SIZES = ["4px", "8px", "12px", "16px", "20px", "24px", "32px", "64px"];
type SpacerProps = { size: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 };

export default function Spacer({ size }: SpacerProps) {
  return <ScSpacer size={size}></ScSpacer>;
}

const ScSpacer = styled.div<{ size: number }>`
  height: ${(props) => SIZES[props.size]};
  width: ${(props) => SIZES[props.size]};
`;
