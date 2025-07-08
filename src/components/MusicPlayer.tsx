import React, { useEffect, useRef, useState } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Shuffle, 
  Repeat,
  Heart,
  MoreHorizontal 
} from 'lucide-react';
import { useMusicContext } from '../contexts/MusicContext';

export const MusicPlayer: React.FC = () => {
  const { state, dispatch } = useMusicContext();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (state.isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [state.isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = state.volume;
    }
  }, [state.volume]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
    setCurrentTime(time);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value);
    dispatch({ type: 'SET_VOLUME', payload: volume });
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = state.volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!state.currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 p-4">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => dispatch({ type: 'NEXT_TRACK' })}
        src={state.currentTrack.audioUrl}
      />
      
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Currently Playing */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <img
            src={state.currentTrack.artwork}
            alt={state.currentTrack.title}
            className="w-14 h-14 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <h4 className="font-medium text-white truncate">{state.currentTrack.title}</h4>
            <p className="text-sm text-gray-400 truncate">{state.currentTrack.artist}</p>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch({ type: 'TOGGLE_SHUFFLE' })}
              className={`transition-colors ${
                state.shuffleMode ? 'text-purple-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Shuffle className="w-5 h-5" />
            </button>
            <button
              onClick={() => dispatch({ type: 'PREVIOUS_TRACK' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_PLAY' })}
              className="bg-white text-black rounded-full p-2 hover:scale-105 transition-transform"
            >
              {state.isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button
              onClick={() => dispatch({ type: 'NEXT_TRACK' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipForward className="w-5 h-5" />
            </button>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_REPEAT' })}
              className={`transition-colors ${
                state.repeatMode !== 'none' ? 'text-purple-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Repeat className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-gray-400 w-10">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
            />
            <span className="text-xs text-gray-400 w-10">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button
            onClick={toggleMute}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : state.volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          />
          <button className="text-gray-400 hover:text-white transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};