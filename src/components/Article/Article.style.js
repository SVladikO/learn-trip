import React from "react";
import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Article = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: solid 1px #f7f6f6;
  margin: 0 0 5px 0;
`;
export const Index = styled.div``;
export const Icon = styled.button`
  border: none;
  height: 20px;
  width: 20px;
  background-image: url(${p => p.url});
  
  &:hover {
    cursor: pointer;
    background-image: url(${p => p.onHoverUrl});
  }
`;
export const Title = styled.div`
  font-size: 14px;
  display: flex;
`;
export const Done = styled.div``;
export const Submit = styled.button``;
