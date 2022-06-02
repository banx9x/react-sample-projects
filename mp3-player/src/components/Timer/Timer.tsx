import { timeStringify } from 'utils/time';
import 'components/Timer/Timer.css';
import { useCallback, useContext } from 'react';
import { PlayerContext } from 'components/Player/PlayerContext';
import Progress from 'components/Progress';

interface TimerProps {}

const Timer: React.FC<TimerProps> = ({}) => {
  const { state, audioRef, dispatch } = useContext(PlayerContext);

  const { currentTime, duration, sliding } = state;

  const handleProgressChange = useCallback(
    (percent: number) => {
      if (!audioRef.current) return;

      if (sliding) {
        dispatch({ type: 'durationChange', payload: percent * duration });
      } else {
        audioRef.current.currentTime = percent * duration;
      }
    },
    [audioRef, duration]
  );

  const handleStartSlide = useCallback(() => {
    dispatch({ type: 'startSlide' });
  }, []);

  const handleEndSlide = useCallback(() => {
    dispatch({ type: 'endSlide' });
  }, []);

  const progress = (currentTime / duration) * 100;

  return (
    <div className='timer d-flex align-center justify-sm-end justify-center justify-md-center'>
      <div className='current'>{timeStringify(currentTime)}</div>

      <Progress
        progress={progress}
        onProgressChange={handleProgressChange}
        onStartSlide={handleStartSlide}
        onEndSlide={handleEndSlide}
        width={242}
      />

      <div className='duration'>{timeStringify(duration)}</div>
    </div>
  );
};

export default Timer;
