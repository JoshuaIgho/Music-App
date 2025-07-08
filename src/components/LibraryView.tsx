import React from 'react';
import { Clock, Play, MoreHorizontal } from 'lucide-react';
import { TrackList } from './TrackList';
import { Track } from '../contexts/MusicContext';

export const LibraryView: React.FC = () => {
  const libraryTracks: Track[] = [
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
      artwork: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
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
    }
  ];

  return (
    <div className="h-full overflow-y-auto pb-24">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Your Library</h1>
          <p className="text-gray-400">Your favorite tracks and playlists</p>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 sm:p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Liked Songs</h2>
              <p className="text-gray-400">{libraryTracks.length} songs</p>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 sm:p-3 transition-colors">
              <Play className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg sm:text-xl font-semibold">Recently Added</h3>
            <button className="text-gray-400 hover:text-white transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <TrackList tracks={libraryTracks} showHeader={true} />
        </div>
      </div>
    </div>
  );
};