import React from 'react';
import styled from 'styled-components';
import Image from '../components/image';
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => (
  <div>
    <Title>My page</Title>
    <Image />
  </div>
);
