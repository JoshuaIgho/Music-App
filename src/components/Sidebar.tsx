import React from 'react';
import { Home, Search, Library, Heart, Plus, Music, X } from 'lucide-react';

interface SidebarProps {
  activeView: 'home' | 'search' | 'library' | 'playlists';
  setActiveView: (view: 'home' | 'search' | 'library' | 'playlists') => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, isOpen, onClose }) => {
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

  const handleItemClick = (view: any) => {
    setActiveView(view);
    onClose();
  };
  return (
    <div className={`
      fixed lg:relative top-0 left-0 h-full w-64 bg-black/90 lg:bg-black/20 backdrop-blur-md 
      border-r border-white/10 p-6 z-50 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white lg:hidden"
      >
        <X className="w-6 h-6" />
      </button>
      
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
            onClick={() => handleItemClick(item.id)}
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