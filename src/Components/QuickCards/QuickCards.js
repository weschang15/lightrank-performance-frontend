import React from "react";
import styled from "styled-components";
import QuickCard from "./QuickCard";
import { CircleIcon } from "Elements";
import { primaryTheme, Toggle } from "Utilities";
import NewProjectModal from "../Projects/NewProjectModal";
import NewReportModal from "../Reports/NewReportModal";

const QuickCards = () => {
  return (
    <QuickCardsWrapper>
      <Toggle>
        {({ on, toggle }) => (
          <>
            {on && <NewProjectModal on={on} toggle={toggle} />}
            <QuickCard onClick={toggle}>
              <CircleIcon
                bgColor={primaryTheme.colors.greenLightest}
                iconName="folder-add"
                iconColor={primaryTheme.colors.greenDarkest}
              />
              <Title>Create a new project</Title>
            </QuickCard>
          </>
        )}
      </Toggle>
      <Toggle>
        {({ on, toggle }) => (
          <>
            {on && <NewReportModal on={on} toggle={toggle} />}
            <QuickCard onClick={toggle}>
              <CircleIcon
                bgColor={primaryTheme.colors.greenLightest}
                iconName="chart"
                iconColor={primaryTheme.colors.greenDarkest}
              />
              <Title>Generate a new report</Title>
            </QuickCard>
          </>
        )}
      </Toggle>
    </QuickCardsWrapper>
  );
};

const QuickCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1em;
`;

const Title = styled.h3`
  margin: 0 0 0 0.5em;
`;

export default QuickCards;
