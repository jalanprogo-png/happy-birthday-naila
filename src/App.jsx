import React, { useEffect, useState } from 'react';
import './App.css';
import ParticleSystem from './components/ParticleSystem';
import AudioPlayer from './components/AudioPlayer';
import PhotoGallery from './components/PhotoGallery';
import Countdown from './components/Countdown';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="App">
      <ParticleSystem />
      
      <div className="content-container">
        <div className="message" style={{ opacity: isLoaded ? 1 : 0 }}>
          <h1>🎉 Happy Birthday 🎉</h1>
          <p>Naila</p>
        </div>

        <PhotoGallery />

        <Countdown targetDate="2006-07-29" />
      </div>

      <div className="footer">
        <p>✨ Selamat ulang tahun, semoga hari mu spesial! ✨</p>
      </div>

      <AudioPlayer />
    </div>
  );
}

export default App;
