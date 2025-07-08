import React from 'react';
import { Menu } from 'lucide-react';
import { HomeView } from './HomeView';
import { SearchView } from './SearchView';
import { LibraryView } from './LibraryView';

interface MainContentProps {
  activeView: 'home' | 'search' | 'library' | 'playlists';
  onMenuClick: () => void;
}

export const MainContent: React.FC<MainContentProps> = ({ activeView, onMenuClick }) => {
  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <HomeView />;
      case 'search':
        return <SearchView />;
      case 'library':
        return <LibraryView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex-1 overflow-hidden">
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-white/10">
        <button
          onClick={onMenuClick}
          className="text-white hover:text-purple-400 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          SoundWave
        </h1>
        <div className="w-6" />
      </div>
      {renderContent()}
    </div>
  );
};