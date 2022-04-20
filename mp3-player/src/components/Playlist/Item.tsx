import classNames from 'classnames';
import { PlayerContext } from 'components/Player/PlayerContext';
import { Song } from 'models/song.model';
import { useCallback, useContext } from 'react';
import { ScaleLoader } from 'react-spinners';

const Item: React.FC<Song> = ({ id, title, url, singer }) => {
  const { state, dispatch } = useContext(PlayerContext);

  const handleClick = useCallback(() => {
    dispatch({ type: 'setSong', payload: id });
  }, []);

  const isCurrent = state.current?.id == id;

  const itemClasses = classNames('song d-flex align-center', {
    'is-current': isCurrent,
  });

  return (
    <div className={itemClasses} onClick={handleClick}>
      <div className='cover'>
        <img src={singer.avatar} alt={singer.name} />
        {isCurrent && (
          <div className='cover-overlay d-flex align-center justify-center'>
            <ScaleLoader height={10} width={3} margin={1} color='#ffffff' />
          </div>
        )}
      </div>

      <div className='info'>
        <div className='title'>{title}</div>
        <div className='singer'>{singer.name}</div>
      </div>
    </div>
  );
};

export default Item;
