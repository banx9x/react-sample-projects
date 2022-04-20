import Button from 'components/Button';
import Volume from 'components/Volume';
import 'components/Controller/Controller.css';
import { useContext, useCallback } from 'react';
import { PlayerContext } from 'components/Player/PlayerContext';
import {
  BiMusic,
  BiPause,
  BiPlay,
  BiShuffle,
  BiSkipNext,
  BiSkipPrevious,
} from 'react-icons/bi';
import { MdRepeat, MdRepeatOne } from 'react-icons/md';
import ScaleLoader from 'react-spinners/ScaleLoader';

export interface ControllerProps {}

const Controllers: React.FC<ControllerProps> = ({}) => {
  const { state, dispatch } = useContext(PlayerContext);

  const handlePlay = useCallback(() => {
    if (!state.playing) {
      dispatch({ type: 'play' });
    } else {
      dispatch({ type: 'pause' });
    }
  }, [state.playing]);

  const handlePrev = useCallback(() => {
    dispatch({ type: 'prev' });
  }, []);

  const handleNext = useCallback(() => {
    dispatch({ type: 'next' });
  }, []);

  const handleShuffle = useCallback(() => {
    dispatch({ type: !state.shuffle ? 'shuffleOn' : 'shuffleOff' });
  }, [state.shuffle]);

  const handleLoop = useCallback(() => {
    dispatch({ type: 'loop' });
  }, []);

  const handlePlaylist = useCallback(() => {
    dispatch({ type: 'playlist' });
  }, []);

  const isLoop = !!state.loop;
  const isShuffle = state.shuffle;
  const showPlaylist = state.playlist;

  const playIcon = state.waiting ? (
    <ScaleLoader height={10} width={3} margin={1} color='#ffffff' />
  ) : state.playing ? (
    <BiPause fontSize={50} />
  ) : (
    <BiPlay fontSize={50} style={{ marginLeft: '4px' }} />
  );

  const loopIcon = state.loop == 'current' ? <MdRepeatOne /> : <MdRepeat />;

  return (
    <div className='controllers d-flex align-center justify-center justify-sm-end justify-md-center'>
      <Button active={isShuffle} onClick={handleShuffle}>
        <BiShuffle />
      </Button>

      <Button onClick={handlePrev}>
        <BiSkipPrevious />
      </Button>

      <Button large onClick={handlePlay}>
        {playIcon}
      </Button>

      <Button onClick={handleNext}>
        <BiSkipNext />
      </Button>

      <Button active={isLoop} onClick={handleLoop}>
        {loopIcon}
      </Button>

      <Volume className='d-flex d-md-none d-lg-none' />

      <Button
        active={showPlaylist}
        onClick={handlePlaylist}
        className='d-md-none d-lg-none'
      >
        <BiMusic />
      </Button>
    </div>
  );
};

export default Controllers;
