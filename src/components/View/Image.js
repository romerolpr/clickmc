import { Img } from 'react-image';
import { Loading } from './Loading';

export const Image = ({ imageSrc, title, loading = false }) => {

  const unloaded = <img src='/image/avatar/default.png' />
  const _loading = <Loading label={false}/>

  if (loading) {
    return _loading
  }
  
  return <Img src={imageSrc} loader={_loading} unloader={unloaded} title={title} alt={title}/>

}