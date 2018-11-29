import React from "react";
import styled from "styled-components";

const Score = ({ score: { name, value } }) => {
  const percentage = value * 100;
  return (
    <ScoreBar score={value}>
      <ScoreBarInner title={name}>{percentage.toFixed(0)}</ScoreBarInner>
    </ScoreBar>
  );
};

const ScoreBar = styled.span`
  background-color: #f7f7f7;
  border-radius: 25px;
  max-width: 100px;
  width: 100%;
  height: 22px;
  display: inline-flex;
  font-size: 14px;
  margin: 3px 6px;
  padding: 3px 6px;
  line-height: 1;
  position: relative;
  overflow: hidden;
  color: ${props => (props.score > 0.7 ? "#00771a" : "#664900")};
  font-weight: 600;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: calc(${props => props.score} * 100%);
    border-radius: 25px;
    content: "";
    display: block;
    background-color: ${props => (props.score > 0.7 ? "#00f836" : "#f8b200")};
  }
`;

const ScoreBarInner = styled.span`
  z-index: 9;
  text-align: center;
  width: 100%;
`;

export default Score;
