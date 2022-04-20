import { Song } from 'models/song.model';

const shuffle = (songs: Song[]) => {
  const copy = songs.slice();
  copy.sort(() => Math.random() - 0.5);
  return copy;
};

export { shuffle };
