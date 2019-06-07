import { data } from './data';

export default () => data.map(({ img }) => <img src={`/static/imgs/${img}`} />);
