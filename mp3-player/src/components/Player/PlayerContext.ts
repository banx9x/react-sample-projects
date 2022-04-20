import React, { createContext, RefObject } from 'react';
import { Song } from 'models/song.model';
import { shuffle } from 'utils/song';

export interface PlayerProps {
  loading: boolean;
  songs?: Song[];
}

export interface PlayerContextType {
  state: PlayerState;
  playerRef: RefObject<HTMLDivElement>;
  audioRef: RefObject<HTMLAudioElement>;
  dispatch: React.Dispatch<PlayerAction>;
}

export const PlayerContext = createContext<PlayerContextType>(
  {} as PlayerContextType
);

export interface PlayerState {
  songs: Song[];
  prev: Song[];
  next: Song[];
  current: Song | undefined;
  currentTime: number;
  volume: number;
  duration: number;
  loading: boolean;
  playing: boolean;
  loop: boolean | 'current';
  shuffle: boolean;
  waiting: boolean;
  playlist: boolean;
  muted: boolean;
  sliding: boolean;
}

export type PlayerAction =
  | { type: 'play' }
  | { type: 'pause' }
  | { type: 'next' }
  | { type: 'prev' }
  | { type: 'shuffleOn' }
  | { type: 'shuffleOff' }
  | { type: 'loop' }
  | { type: 'waiting' }
  | { type: 'loaded' }
  | { type: 'timeUpdate'; payload: number }
  | { type: 'durationChange'; payload: number }
  | { type: 'playlist' }
  | { type: 'volume'; payload: number }
  | { type: 'muted' }
  | { type: 'startSlide' }
  | { type: 'endSlide' }
  | { type: 'setSong'; payload: string };

export const playerReducer = (
  state: PlayerState,
  action: PlayerAction
): PlayerState => {
  switch (action.type) {
    case 'play': {
      return { ...state, playing: true };
    }
    case 'pause': {
      return { ...state, playing: false };
    }
    case 'prev': {
      const prev = state.prev.slice();
      const next = state.next.slice();
      const current = state.current as Song;

      const song = prev.length > 0 ? prev.pop() : next.pop();
      next.unshift(current);

      return {
        ...state,
        prev,
        next,
        current: song,
      };
    }
    case 'next': {
      const prev = state.prev.slice();
      const next = state.next.slice();
      const current = state.current as Song;

      const song = next.length > 0 ? next.shift() : prev.shift();
      prev.push(current);

      return {
        ...state,
        prev,
        next,
        current: song,
      };
    }
    case 'shuffleOn': {
      const playlist = state.songs.filter((s) => s.id != state.current?.id);
      const shuffled = shuffle(playlist);

      return {
        ...state,
        shuffle: true,
        prev: [],
        next: shuffled,
      };
    }
    case 'shuffleOff': {
      const currentIndex = state.songs.findIndex(
        (s) => s.id == state.current?.id
      );

      const prev = state.songs.slice(0, currentIndex);
      const next = state.songs.slice(currentIndex + 1);

      return {
        ...state,
        shuffle: false,
        prev: prev,
        next: next,
      };
    }
    case 'loop': {
      const loop = state.loop;
      return {
        ...state,
        loop: !loop ? true : loop != 'current' ? 'current' : false,
      };
    }
    case 'waiting': {
      return { ...state, waiting: true };
    }
    case 'loaded': {
      return { ...state, waiting: false };
    }
    case 'timeUpdate': {
      return { ...state, currentTime: action.payload };
    }
    case 'durationChange': {
      return { ...state, duration: action.payload };
    }
    case 'playlist': {
      return { ...state, playlist: !state.playlist };
    }
    case 'volume': {
      return { ...state, volume: action.payload };
    }
    case 'muted': {
      return { ...state, muted: !state.muted };
    }
    case 'startSlide': {
      return { ...state, sliding: true };
    }
    case 'endSlide': {
      return { ...state, sliding: false };
    }
    case 'setSong': {
      if (state.current?.id == action.payload) return state;

      const songs = [...state.prev, state.current, ...state.next] as Song[];

      const currentIndex = songs.findIndex((s) => s?.id == action.payload);

      return {
        ...state,
        prev: songs.slice(0, currentIndex),
        next: songs.slice(currentIndex + 1),
        current: songs[currentIndex] as Song,
      };
    }
    default: {
      return state;
    }
  }
};
