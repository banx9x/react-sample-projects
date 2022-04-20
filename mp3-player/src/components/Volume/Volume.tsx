import Button from 'components/Button';
import { PlayerContext } from 'components/Player/PlayerContext';
import Progress from 'components/Progress';
import 'components/Volume/Volume.css';
import React, { useCallback, useContext } from 'react';
import {
  BiVolume,
  BiVolumeLow,
  BiVolumeFull,
  BiVolumeMute,
} from 'react-icons/bi';

export interface VolumeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Volume: React.FC<VolumeProps> = ({ className }) => {
  const { state, audioRef, dispatch } = useContext(PlayerContext);

  const { volume } = state;

  const handleProgressChange = useCallback(
    (percent: number) => {
      if (!audioRef.current) return;
      audioRef.current.volume = percent;
    },
    [audioRef]
  );

  const handleMuted = useCallback(() => {
    dispatch({ type: 'muted' });
  }, []);

  const isMuted = state.muted;

  const volumeIcon =
    isMuted || volume == 0 ? (
      <BiVolumeMute />
    ) : volume < 0.33 ? (
      <BiVolume />
    ) : volume < 0.66 ? (
      <BiVolumeLow />
    ) : (
      <BiVolumeFull />
    );

  return (
    <div className={className ? 'd-flex ' + className : 'd-flex'}>
      <Button active={isMuted} onClick={handleMuted}>
        {volumeIcon}
      </Button>

      <Progress
        progress={isMuted ? 0 : volume * 100}
        width={80}
        onProgressChange={handleProgressChange}
      />
    </div>
  );
};

export default Volume;
