import React from 'react';
import { Play, MoreHorizontal, Heart, Clock } from 'lucide-react';
import { Track, useMusicContext } from '../contexts/MusicContext';

interface TrackListProps {
  tracks: Track[];
  showHeader?: boolean;
}

export const TrackList: React.FC<TrackListProps> = ({ tracks, showHeader = false }) => {
  const { state, dispatch } = useMusicContext();

  const playTrack = (track: Track) => {
    dispatch({ type: 'SET_CURRENT_TRACK', payload: track });
    dispatch({ type: 'SET_PLAYING', payload: true });
  };

  return (
    <div className="space-y-1">
      {showHeader && (
        <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm text-gray-400 border-b border-white/10">
          <div className="col-span-1">#</div>
          <div className="col-span-5">TITLE</div>
          <div className="col-span-3">ALBUM</div>
          <div className="col-span-2">DATE ADDED</div>
          <div className="col-span-1 flex justify-end">
            <Clock className="w-4 h-4" />
          </div>
        </div>
      )}
      {tracks.map((track, index) => (
        <div
          key={track.id}
          className={`grid grid-cols-12 gap-4 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer ${
            state.currentTrack?.id === track.id ? 'bg-white/10' : ''
          }`}
          onClick={() => playTrack(track)}
        >
          <div className="col-span-1 flex items-center">
            <div className="w-4 text-gray-400 group-hover:hidden">
              {showHeader ? index + 1 : ''}
            </div>
            <Play className="w-4 h-4 text-white hidden group-hover:block" />
          </div>
          <div className="col-span-5 flex items-center gap-3">
            <img
              src={track.artwork}
              alt={track.title}
              className="w-10 h-10 rounded object-cover"
            />
            <div>
              <h4 className={`font-medium ${
                state.currentTrack?.id === track.id ? 'text-purple-400' : 'text-white'
              }`}>
                {track.title}
              </h4>
              <p className="text-sm text-gray-400">{track.artist}</p>
            </div>
          </div>
          <div className="col-span-3 flex items-center">
            <span className="text-gray-400 text-sm">{track.album}</span>
          </div>
          <div className="col-span-2 flex items-center">
            <span className="text-gray-400 text-sm">3 days ago</span>
          </div>
          <div className="col-span-1 flex items-center justify-end gap-2">
            <button className="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              <Heart className="w-4 h-4" />
            </button>
            <span className="text-gray-400 text-sm w-12">{track.duration}</span>
            <button className="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};