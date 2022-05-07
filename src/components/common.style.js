import React from "react";
import styled, {css} from 'styled-components';

export const flex = css`
  display: flex;
  align-items: center;
  align-content: center;
`;

export const Left = styled.div`${flex}`;
export const Right = styled.div`${flex}`;