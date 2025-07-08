import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  artwork: string;
  audioUrl: string;
}

interface MusicState {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  volume: number;
  playlist: Track[];
  shuffleMode: boolean;
  repeatMode: 'none' | 'one' | 'all';
}

type MusicAction =
  | { type: 'SET_CURRENT_TRACK'; payload: Track }
  | { type: 'TOGGLE_PLAY' }
  | { type: 'SET_PLAYING'; payload: boolean }
  | { type: 'SET_CURRENT_TIME'; payload: number }
  | { type: 'SET_VOLUME'; payload: number }
  | { type: 'SET_PLAYLIST'; payload: Track[] }
  | { type: 'TOGGLE_SHUFFLE' }
  | { type: 'TOGGLE_REPEAT' }
  | { type: 'NEXT_TRACK' }
  | { type: 'PREVIOUS_TRACK' };

const initialState: MusicState = {
  currentTrack: null,
  isPlaying: false,
  currentTime: 0,
  volume: 0.7,
  playlist: [],
  shuffleMode: false,
  repeatMode: 'none',
};

const musicReducer = (state: MusicState, action: MusicAction): MusicState => {
  switch (action.type) {
    case 'SET_CURRENT_TRACK':
      return { ...state, currentTrack: action.payload };
    case 'TOGGLE_PLAY':
      return { ...state, isPlaying: !state.isPlaying };
    case 'SET_PLAYING':
      return { ...state, isPlaying: action.payload };
    case 'SET_CURRENT_TIME':
      return { ...state, currentTime: action.payload };
    case 'SET_VOLUME':
      return { ...state, volume: action.payload };
    case 'SET_PLAYLIST':
      return { ...state, playlist: action.payload };
    case 'TOGGLE_SHUFFLE':
      return { ...state, shuffleMode: !state.shuffleMode };
    case 'TOGGLE_REPEAT':
      {
        const modes: ('none' | 'one' | 'all')[] = ['none', 'one', 'all'];
        const currentIndex = modes.indexOf(state.repeatMode);
        const nextIndex = (currentIndex + 1) % modes.length;
        return { ...state, repeatMode: modes[nextIndex] };
      }
    case 'NEXT_TRACK':
      {
        if (state.playlist.length === 0) return state;
        const currentIndex = state.playlist.findIndex(track => track.id === state.currentTrack?.id);
        const nextIndex = (currentIndex + 1) % state.playlist.length;
        return { ...state, currentTrack: state.playlist[nextIndex] };
      }
    case 'PREVIOUS_TRACK':
      {
        if (state.playlist.length === 0) return state;
        const currentIdx = state.playlist.findIndex(track => track.id === state.currentTrack?.id);
        const prevIndex = currentIdx === 0 ? state.playlist.length - 1 : currentIdx - 1;
        return { ...state, currentTrack: state.playlist[prevIndex] };
      }
    default:
      return state;
  }
};

const MusicContext = createContext<{
  state: MusicState;
  dispatch: React.Dispatch<MusicAction>;
} | null>(null);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(musicReducer, initialState);

  return (
    <MusicContext.Provider value={{ state, dispatch }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusicContext must be used within a MusicProvider');
  }
  return context;
};