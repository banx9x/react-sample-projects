import Button from 'components/Button';
import 'components/Info/Info.css';
import { BiHeart } from 'react-icons/bi';
import type { Song } from 'models/song.model';

const Info: React.FC<Song> = ({ id, title, singer }) => {
  return (
    <div className='info d-flex align-center'>
      <div className='thumbnail'>
        <img src={singer.avatar} alt={singer.name} />
      </div>

      <div className='content'>
        <div className='title'>{title}</div>
        <div className='singer'>{singer.name}</div>
      </div>
      <div className='actions'>
        <Button onClick={() => {}}>
          <BiHeart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
