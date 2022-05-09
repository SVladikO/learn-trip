import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: url(${p => p.url});
  height: 20px;
  width: 20px;
  
  &:hover {
    cursor: pointer;
  }
`;