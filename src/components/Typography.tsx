import React from "react";
import styled from "styled-components";

type H1Props = { style?: any };
type H2Props = { style?: any };
type ParagraphProps = {
  color?: string;
  align?: string;
  button?: boolean;
  action?: any;
  style?: any;
};

export function H1({ children, style }: React.PropsWithChildren<H1Props>) {
  return <ScH1 style={{ ...style }}>{children}</ScH1>;
}

export function H2({ children, style }: React.PropsWithChildren<H2Props>) {
  return <ScH2 style={{ ...style }}>{children}</ScH2>;
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
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ScH2 = styled.h2`
  font-family: "Open Sans";
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 16px;
  }
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
