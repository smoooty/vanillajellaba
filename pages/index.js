import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Images from '../components/Images';
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: zxxcamo;
  text-transform: uppercase;
  writing-mode: tb-rl;
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
        href="/static/fonts/zxx_camo.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <style>
        {`
        @font-face {
            font-family: 'zxxcamo';
            src: url('/static/fonts/zxx_camo.woff2') format('woff2'),
                url('/static/fonts/zxx_camo.woff') format('woff');
            font-display: swap;
            font-weight: normal;
            font-style: normal;
        }
        `}
      </style>
    </Head>
    <Grid>
      <Title>Jellaba</Title>
      <Images />
    </Grid>
  </div>
);
