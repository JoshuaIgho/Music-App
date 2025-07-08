import React from 'react';
import { HomeView } from './HomeView';
import { SearchView } from './SearchView';
import { LibraryView } from './LibraryView';

interface MainContentProps {
  activeView: 'home' | 'search' | 'library' | 'playlists';
}

export const MainContent: React.FC<MainContentProps> = ({ activeView }) => {
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
      {renderContent()}
    </div>
  );
};