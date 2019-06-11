import { data } from './data';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  &:nth-of-type(3n + 1) {
    grid-column: span 2;
  }
`;

export default () =>
  data.map(({ img }) => (
    <Image
      src={`/static/imgs/${img}`}
      alt={`Jellaba pose - ${img}`}
      key={`${img}`}
      loading="lazy"
    />
  ));
