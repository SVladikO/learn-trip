import React from "react";
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const Header = styled.div`
  display: flex;
  font-size: 16px;
  padding: 5px;
  border: 2px ${p => p.style.borderColor} solid;
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
export const Percentage = styled.div``;
export const SwitchButton = styled.div``;
export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;