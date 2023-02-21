import React from "react";
import Spacer from "../components/Spacer";
import { H1, H2, Paragraph } from "../components/Typography";

type NoListViewProps = { mobile?: boolean };

export default function NoListsView({ mobile }: NoListViewProps) {
  return (
    <>
      {!mobile && (
        <>
          <H1>Add a page to start filling your Todo lists!</H1>
          <Spacer size={3} />
          <Paragraph color="#cccccc" style={{ fontWeight: 500 }}>
            You can find the "add page" button to the left!
          </Paragraph>
        </>
      )}

      {mobile && <H2>Add a page to start filling your Todo lists!</H2>}
    </>
  );
}
