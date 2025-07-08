import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { MusicPlayer } from './components/MusicPlayer';
import { MusicProvider } from './contexts/MusicContext';

function App() {
  const [activeView, setActiveView] = useState<'home' | 'search' | 'library' | 'playlists'>('home');

  return (
    <MusicProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        <div className="flex h-screen">
          <Sidebar activeView={activeView} setActiveView={setActiveView} />
          <MainContent activeView={activeView} />
        </div>
        <MusicPlayer />
      </div>
    </MusicProvider>
  );
}

export default App;