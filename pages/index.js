import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Image from '../components/Image';
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: skrappa;
  text-transform: uppercase;
  ${'' /* writing-mode: vertical-lr; */}
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
    <Title>Jellaba</Title>
    <Grid>
      <Image />
    </Grid>
  </div>
);
