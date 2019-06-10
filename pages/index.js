import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Image from '../components/image';
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: skrappa;
`;

export default () => (
  <div>
    <Head>
      <link
        rel="preload"
        href="/static/fonts/skrappa.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
      <style>
        {`
        @font-face {
            font-family: 'skrappa';
            src: url('/static/fonts/skrappa.woff2') format('woff2'),
                url('/static/fonts/skrappa.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        `}
      </style>
    </Head>
    <Title>My page</Title>
    <Image />
  </div>
);
