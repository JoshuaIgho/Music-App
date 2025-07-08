import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { MusicPlayer } from './components/MusicPlayer';
import { MusicProvider } from './contexts/MusicContext';

function App() {
  const [activeView, setActiveView] = useState<'home' | 'search' | 'library' | 'playlists'>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <MusicProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        <div className="flex h-screen relative">
          <Sidebar 
            activeView={activeView} 
            setActiveView={setActiveView}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
          <MainContent 
            activeView={activeView} 
            onMenuClick={() => setSidebarOpen(true)}
          />
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </div>
        <MusicPlayer />
      </div>
    </MusicProvider>
  );
}

export default App;