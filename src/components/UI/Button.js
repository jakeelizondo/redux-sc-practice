import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: palevioletred;
  color: white;
  border: none;
  border-radius: 3px;
  width: 100px;
  height: 30px;
`;

export default function Button({ callback, children }) {
  return <StyledButton onClick={callback}>{children}</StyledButton>;
}
