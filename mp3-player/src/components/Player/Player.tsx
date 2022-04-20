import Info from 'components/Info/Info';
import Controllers from 'components/Controller/Controller';
import Progress from 'components/Timer';
import Playlist from 'components/Playlist';
import 'components/Player/Player.css';
import { useCallback, useEffect, useRef, useReducer } from 'react';
import { PlayerProps, PlayerContext, playerReducer } from './PlayerContext';
import ExtraController from 'components/ExtraController';

const Player: React.FC<PlayerProps> = ({ loading, songs = [] }) => {
  const [state, dispatch] = useReducer(playerReducer, {
    songs,
    prev: [],
    next: songs.slice(1),
    current: songs[0],
    currentTime: 0,
    duration: 0,
    volume: 1,
    loading,
    playing: false,
    loop: false,
    shuffle: false,
    waiting: false,
    playlist: false,
    muted: false,
    sliding: false,
  });

  const playerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleTimeUpdate = useCallback(() => {
    if (!audioRef.current) return;

    dispatch({ type: 'timeUpdate', payload: audioRef.current.currentTime });
  }, []);

  const handleDurationChange = useCallback(() => {
    if (!audioRef.current) return;

    dispatch({ type: 'durationChange', payload: audioRef.current.duration });
  }, []);

  const handleEnd = useCallback(() => {
    if (state.sliding) return;
    if (state.next.length == 0 && !state.loop) return;

    if (state.playing) dispatch({ type: 'next' });
  }, [state.playing, state.sliding]);

  const handleWaiting = useCallback(() => {
    dispatch({ type: 'waiting' });
  }, []);

  const handleLoadedData = useCallback(() => {
    dispatch({ type: 'loaded' });
  }, []);

  const handleVolumeChange = useCallback(() => {
    if (!audioRef.current) return;

    dispatch({ type: 'volume', payload: audioRef.current.volume });
  }, [audioRef]);

  // Đổi src khi thay đổi bài hát
  useEffect(() => {
    if (!audioRef.current || !state.current) return;

    audioRef.current.src = state.current.url;
  }, [audioRef, state.current]);

  // Bật/tắt phát nhạc khi trạng thái thay đổi
  useEffect(() => {
    if (!audioRef.current) return;

    if (state.sliding) {
      audioRef.current.pause();
      return;
    }

    if (state.playing) audioRef.current.play();
    else audioRef.current.pause();
  }, [audioRef, state.sliding, state.playing, state.current]);

  // Thay đổi tiêu đề trang tương ứng với bài hát
  useEffect(() => {
    if (!state.current) return;

    document.title = `${state.current.title} | MP3 Player`;
  }, [state.current]);

  // Bật/tắt lặp theo trạng thái
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.loop = state.loop == 'current';
  }, [audioRef, state.loop]);

  // Bật/tắt muted theo trạng thái
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.muted = state.muted;
  }, [audioRef, state.muted]);

  return (
    <PlayerContext.Provider value={{ state, playerRef, audioRef, dispatch }}>
      <div className='player' ref={playerRef}>
        <div className='container-fluid'>
          <div className='row'>
            <div
              className='d-xs-none col-sm-4 col-md-3 col-lg-3 d-sm-flex justify-xs-center'
              style={{ overflow: 'hidden' }}
            >
              {state.current && <Info {...state.current} />}
            </div>
            <div className='col-12 col-sm-8 col-md-6 col-lg-6'>
              <Controllers />
              <Progress />
            </div>
            <div className='col-md-3 col-lg-3 d-none d-md-block d-lg-block'>
              <ExtraController />
            </div>
          </div>
        </div>
      </div>

      <Playlist />

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        onEnded={handleEnd}
        onWaiting={handleWaiting}
        onCanPlay={handleLoadedData}
        onVolumeChange={handleVolumeChange}
      />
    </PlayerContext.Provider>
  );
};

export default Player;
