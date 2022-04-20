import 'components/Playlist/Playlist.css';
import { useContext, useEffect, useRef } from 'react';
import { PlayerContext } from 'components/Player/PlayerContext';
import classNames from 'classnames';
import Item from './Item';

export interface PlaylistProps {}

const Playlist: React.FC<PlaylistProps> = ({}) => {
  const { state, playerRef } = useContext(PlayerContext);
  const playlistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playlistRef.current || !playerRef.current) return;

    const windowHeight = document.documentElement.clientHeight;
    const playerHeight = playerRef.current.clientHeight;
    const maxHeight = windowHeight - playerHeight;

    playlistRef.current.style.maxHeight = maxHeight + 'px';
    playlistRef.current.style.bottom = playerHeight + 'px';

    window.addEventListener('resize', () => {
      if (!playlistRef.current || !playerRef.current) return;

      const windowHeight = document.documentElement.clientHeight;
      const playerHeight = playerRef.current.clientHeight;
      const maxHeight = windowHeight - playerHeight;

      playlistRef.current.style.maxHeight = maxHeight + 'px';
      playlistRef.current.style.bottom = playerHeight + 'px';
    });
  }, [playlistRef, playerRef]);

  const playlistClasses = classNames({
    playlist: true,
    show: state.playlist,
  });

  return (
    <div className={playlistClasses} ref={playlistRef}>
      <div className='heading'>Playlist</div>

      <div className='list-songs'>
        {state.songs.map((s) => (
          <Item key={s.id} {...s} />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
