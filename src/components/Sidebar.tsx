import React from 'react';
import { Home, Search, Library, Heart, Plus, Music } from 'lucide-react';

interface SidebarProps {
  activeView: 'home' | 'search' | 'library' | 'playlists';
  setActiveView: (view: 'home' | 'search' | 'library' | 'playlists') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'library', label: 'Your Library', icon: Library },
  ];

  const playlists = [
    'Liked Songs',
    'My Playlist #1',
    'Chill Vibes',
    'Workout Mix',
    'Study Focus',
  ];

  return (
    <div className="w-64 bg-black/20 backdrop-blur-md border-r border-white/10 p-6">
      <div className="flex items-center gap-2 mb-8">
        <Music className="w-8 h-8 text-purple-400" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          SoundWave
        </h1>
      </div>

      <nav className="space-y-2 mb-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id as any)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeView === item.id
                ? 'bg-purple-600/30 text-purple-400 border border-purple-500/30'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="border-t border-white/10 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Playlists
          </h3>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2">
          {playlists.map((playlist, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 flex items-center gap-3"
            >
              {index === 0 ? (
                <Heart className="w-4 h-4 text-green-400" />
              ) : (
                <div className="w-4 h-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-sm flex items-center justify-center">
                  <Music className="w-2 h-2 text-white" />
                </div>
              )}
              <span className="truncate">{playlist}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};