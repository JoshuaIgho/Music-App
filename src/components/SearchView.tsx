import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { TrackList } from './TrackList';
import { Track } from '../contexts/MusicContext';

export const SearchView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Track[]>([]);

  const allTracks: Track[] = [
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
      id: '7',
      title: 'Golden Hour',
      artist: 'Sunset Collective',
      album: 'Evening Glow',
      duration: '4:05',
      artwork: 'https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=300',
      audioUrl: 'demo.mp3'
    },
    {
      id: '8',
      title: 'Neon Lights',
      artist: 'City Pulse',
      album: 'Urban Nights',
      duration: '3:28',
      artwork: 'https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=300',
      audioUrl: 'demo.mp3'
    }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = allTracks.filter(track =>
        track.title.toLowerCase().includes(query.toLowerCase()) ||
        track.artist.toLowerCase().includes(query.toLowerCase()) ||
        track.album.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div className="h-full overflow-y-auto pb-24">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Search</h1>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="What do you want to listen to?"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {searchQuery && (
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              {searchResults.length > 0 ? `Search Results (${searchResults.length})` : 'No results found'}
            </h2>
            {searchResults.length > 0 && <TrackList tracks={searchResults} />}
          </div>
        )}

        {!searchQuery && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Browse all</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { name: 'Pop', color: 'from-pink-500 to-purple-500' },
                { name: 'Rock', color: 'from-red-500 to-orange-500' },
                { name: 'Hip-Hop', color: 'from-yellow-500 to-red-500' },
                { name: 'Electronic', color: 'from-cyan-500 to-blue-500' },
                { name: 'Jazz', color: 'from-indigo-500 to-purple-500' },
                { name: 'Classical', color: 'from-emerald-500 to-teal-500' },
                { name: 'Country', color: 'from-amber-500 to-yellow-500' },
                { name: 'R&B', color: 'from-rose-500 to-pink-500' },
              ].map((genre) => (
                <div
                  key={genre.name}
                  className={`bg-gradient-to-br ${genre.color} p-4 sm:p-6 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200`}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white">{genre.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};