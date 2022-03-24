import { Img } from 'react-image';
import { Loading } from './Loading';

export const Image = ({ imageSrc, title }) => {

  const unloaded = <img src='/image/avatar/default.png' />
  const loading = <Loading label={false}/>

  return <Img src={imageSrc} loader={loading} unloader={unloaded} title={title} alt={title}/>

}