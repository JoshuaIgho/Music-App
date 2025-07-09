# 🎵 SoundWave - Beautiful Music Streaming App

A modern, responsive music streaming application built with React, TypeScript, and Tailwind CSS. Experience beautiful design with smooth animations and intuitive user interface.

## 🌟 Live Preview

**[View Live Demo](https://dulcet-liger-227dd0.netlify.app)**

## ✨ Features

### 🎨 Beautiful Design
- Modern gradient backgrounds with glass morphism effects
- Smooth animations and micro-interactions
- Apple-level design aesthetics with attention to detail
- Responsive design that works perfectly on all devices

### 🎵 Music Player Functionality
- Play/pause controls with visual feedback
- Track progress with seekable timeline
- Volume control with mute functionality
- Previous/next track navigation
- Shuffle and repeat modes
- Real-time track information display

### 📱 Responsive Interface
- Mobile-first design approach
- Collapsible sidebar for mobile devices
- Touch-friendly controls and interactions
- Optimized layouts for all screen sizes

### 🔍 Music Discovery
- Search functionality across tracks, artists, and albums
- Browse by genre with colorful category cards
- Recently played tracks
- Featured music recommendations

### 📚 Library Management
- Personal music library
- Liked songs collection
- Custom playlists support
- Recently added tracks

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Context API with useReducer
- **Deployment**: Netlify

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd soundwave-music-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── HomeView.tsx     # Home page with featured tracks
│   ├── SearchView.tsx   # Search functionality
│   ├── LibraryView.tsx  # User's music library
│   ├── MusicPlayer.tsx  # Bottom music player
│   ├── Sidebar.tsx      # Navigation sidebar
│   ├── MainContent.tsx  # Main content wrapper
│   └── TrackList.tsx    # Reusable track list component
├── contexts/            # React Context providers
│   └── MusicContext.tsx # Global music state management
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎯 Key Components

### MusicContext
Global state management for:
- Current playing track
- Playback controls (play/pause, volume, etc.)
- Playlist management
- Shuffle and repeat modes

### MusicPlayer
Bottom-fixed player with:
- Track artwork and information
- Playback controls
- Progress bar with seek functionality
- Volume control

### Responsive Sidebar
Navigation with:
- Home, Search, and Library sections
- Playlist management
- Mobile-friendly collapsible design

## 🎨 Design Features

- **Glass Morphism**: Backdrop blur effects with semi-transparent backgrounds
- **Gradient Backgrounds**: Beautiful color transitions throughout the app
- **Hover Effects**: Smooth transitions and visual feedback
- **Custom Sliders**: Styled range inputs for volume and progress
- **Typography**: Carefully chosen font weights and spacing
- **Color System**: Consistent purple/pink theme with proper contrast ratios

## 📱 Mobile Optimization

- Touch-friendly button sizes
- Collapsible navigation for small screens
- Optimized layouts for portrait and landscape modes
- Smooth touch interactions and gestures
- Responsive typography and spacing

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The application is automatically deployed to Netlify. Any changes pushed to the main branch will trigger a new deployment.

**Live URL**: https://dulcet-liger-227dd0.netlify.app

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Images provided by [Pexels](https://www.pexels.com)
- Icons by [Lucide React](https://lucide.dev)
- Built with [Vite](https://vitejs.dev) and [React](https://reactjs.org)

---

**Made with ❤️ and modern web technologies**