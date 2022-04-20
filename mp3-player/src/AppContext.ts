import React from 'react';
import { Song } from 'models/song.model';

export interface State {
  loading: boolean;
  error?: string;
  songs?: Song[];
}

export type Action =
  | { type: 'pending' }
  | { type: 'success'; payload: Song[] }
  | { type: 'error'; error: string };

export type ContextType = [State, React.Dispatch<Action>];

export const AppContext: React.Context<ContextType> = React.createContext(
  [] as unknown as ContextType
);

export const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'pending': {
      return {
        loading: true,
      };
    }
    case 'success': {
      const songs = action.payload;

      return {
        loading: false,
        songs,
      };
    }
    case 'error': {
      return { loading: false, error: action.error };
    }
    default: {
      return state;
    }
  }
};
