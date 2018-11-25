import React from "react";
import styled from "styled-components";
import { Icon, Spinner, TableRow, TableCell } from "Elements";
import Score from "../Scores/Score";
import ScoreWrapper from "../Scores/ScoreWrapper";

const scores = scores => {
  return scores.map(score => <Score key={score.name} score={score} />);
};

const ReportListItem = ({ report }) => {
  return (
    <TableRow className="no-hover">
      <TableCell>{report.id}</TableCell>
      <TableCell>{report.url}</TableCell>
      <TableCell>
        <ScoreWrapper>{scores(report.scores)}</ScoreWrapper>
      </TableCell>
      <CenterCell>
        <span>
          {report.completed ? (
            <Icon name="checkmark" size="16px" color="#00f836" />
          ) : (
            <Spinner />
          )}
        </span>
      </CenterCell>
    </TableRow>
  );
};

const CenterCell = styled(TableCell)`
  text-align: center;
  > span {
    display: block;
    svg {
      margin: 0 auto;
    }
  }
`;

export default ReportListItem;
