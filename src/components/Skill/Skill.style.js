import React from "react";
import styled, {keyframes} from 'styled-components';
import {flex} from '../common.style'

export const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

export const Header = styled.div`
  ${flex};
  justify-content: space-between;
  font-size: 16px;
  padding: 0 5px;
  border-bottom: solid 1px black;
`;

export const Logo = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 5px 0 0;
  background-image: url(${p => p.url});
  background-size: 24px;
  background-repeat: no-repeat;


`;
export const Title = styled.div``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Percentage = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 34px;
  width: 34px;
  margin: 0 2px 0 0;
  //animation: ${rotate} 2s linear;
`;

export const SwitchButton = styled.div``;
export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;