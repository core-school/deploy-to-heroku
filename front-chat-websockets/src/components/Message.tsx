import React from "react";

import styled, { css } from "styled-components";

export enum BubbleType {
  ME = "me",
  SERVER = "server",
}

const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  &.me {
    justify-content: flex-end;
  }
  &.server {
    justify-content: flex-start;
  }
`;

const Bubble = styled.div`
  background-color: gray;
  color: white;
  padding: 5px 10px;
  margin: 10px 0;
  border-radius: 10px;
  display: inline-block;
  ${({ type }) =>
    type == BubbleType.SERVER &&
    css`
      background-color: lightgreen;
      color: black;
    `}
`;

export const Message: React.FC<{ type: BubbleType }> = ({ type, children }) => {
  return (
    <Wrapper className={type}>
      <Bubble type={type}>{children}</Bubble>
    </Wrapper>
  );
};
