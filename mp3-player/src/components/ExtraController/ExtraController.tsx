import Button from 'components/Button';
import Volume from 'components/Volume';
import { BiMusic } from 'react-icons/bi';
import 'components/ExtraController/ExtraController.css';
import { useCallback, useContext } from 'react';
import { PlayerContext } from 'components/Player/PlayerContext';

export interface PlaylistProps {}

const ExtraController: React.FC<PlaylistProps> = ({}) => {
  const { state, dispatch } = useContext(PlayerContext);

  const handleShowPlaylist = useCallback(() => {
    dispatch({ type: 'playlist' });
  }, []);

  const showPlaylist = state.playlist;

  return (
    <div className='extra-controllers d-flex justify-end align-center'>
      <Volume />
      <Button active={showPlaylist} onClick={handleShowPlaylist}>
        <BiMusic />
      </Button>
    </div>
  );
};

export default ExtraController;
