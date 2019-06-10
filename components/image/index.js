import { data } from './data';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`;

export default () =>
  data.map(({ img }) => <Image src={`/static/imgs/${img}`} />);
