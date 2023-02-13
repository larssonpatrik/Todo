import React from "react";
import styled from "styled-components";

type H1Props = {};
type H2Props = {};
type ParagraphProps = {
  color?: string;
  align?: string;
  button?: boolean;
  action?: any;
  style?: any;
};

export function H1({ children }: React.PropsWithChildren<H1Props>) {
  return <ScH1>{children}</ScH1>;
}

export function H2({ children }: React.PropsWithChildren<H2Props>) {
  return <ScH2>{children}</ScH2>;
}

export function Paragraph({
  children,
  color,
  align,
  button,
  action,
  style,
}: React.PropsWithChildren<ParagraphProps>) {
  return (
    <ScParagraph
      color={color}
      align={align}
      button={button}
      onClick={action}
      style={style}
    >
      {children}
    </ScParagraph>
  );
}

const ScH1 = styled.h1`
  font-family: "Open Sans";
  font-size: 32px;
  font-weight: 700;
`;

const ScH2 = styled.h2`
  font-family: "Open Sans";
  font-size: 20px;
  font-weight: 700;
`;

const ScParagraph = styled.p<{
  color?: string;
  align?: string;
  button?: boolean;
}>`
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
  text-align: ${(props) => props.align};
  color: ${(props) => props.color};
  ${(props) => (props.button ? "cursor: pointer;" : null)}
`;
