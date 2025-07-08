import React, { useEffect } from 'react';
import { Play, MoreHorizontal } from 'lucide-react';
import { useMusicContext, Track } from '../contexts/MusicContext';
import { TrackList } from './TrackList';

export const HomeView: React.FC = () => {
  const { state, dispatch } = useMusicContext();

  const featuredTracks: Track[] = [
    {
      id: '1',
      title: 'Midnight Dreams',
      artist: 'Luna Eclipse',
      album: 'Nocturnal Vibes',
      duration: '3:45',
      artwork: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
      audioUrl: 'demo.mp3'
    },
    {
      id: '2',
      title: 'Electric Pulse',
      artist: 'Neon Nights',
      album: 'Synthwave Collection',
      duration: '4:12',
      artwork: 'https://images.pexels.com/photos/1694819/pexels-photo-1694819.jpeg?auto=compress&cs=tinysrgb&w=300',
      audioUrl: 'demo.mp3'
    },
    {
      id: '3',
      title: 'Ocean Waves',
      artist: 'Serene Sounds',
      album: 'Natural Harmony',
      duration: '5:20',
      artwork: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=300',
      audioUrl: 'demo.mp3'
    },
    {
      id: '4',
      title: 'Urban Rhythm',
      artist: 'City Beats',
      album: 'Street Symphony',
      duration: '3:58',
      artwork: 'https://images.pexels.com/photos/1201407/pexels-photo-1201407.jpeg?auto=compress&cs=tinysrgb&w=300',
      audioUrl: 'demo.mp3'
    },
    {
      id: '5',
      title: 'Starlight Serenade',
      artist: 'Cosmic Harmony',
      album: 'Galactic Dreams',
      duration: '4:33',
      artwork: 'https://images.pexels.com/photos/1434653/pexels-photo-1434653.jpeg?auto=compress&cs=tinysrgb&w=300',
      audioUrl: 'demo.mp3'
    },
    {
      id: '6',
      title: 'Forest Whispers',
      artist: 'Nature\'s Voice',
      album: 'Woodland Tales',
      duration: '6:15',
      artwork: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=300',
      audioUrl: 'demo.mp3'
    }
  ];

  useEffect(() => {
    dispatch({ type: 'SET_PLAYLIST', payload: featuredTracks });
  }, [dispatch]);

  const playTrack = (track: Track) => {
    dispatch({ type: 'SET_CURRENT_TRACK', payload: track });
    dispatch({ type: 'SET_PLAYING', payload: true });
  };

  return (
    <div className="h-full overflow-y-auto pb-24">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Good evening</h1>
          <p className="text-gray-400">Discover new music and enjoy your favorites</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {featuredTracks.slice(0, 6).map((track) => (
            <div
              key={track.id}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              onClick={() => playTrack(track)}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative">
                  <img
                    src={track.artwork}
                    alt={track.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-white truncate">{track.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">{track.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">Recently Played</h2>
            <button className="text-gray-400 hover:text-white transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <TrackList tracks={featuredTracks} />
        </div>
      </div>
    </div>
  );
};