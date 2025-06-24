import React, { useRef, useEffect, useState } from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Check if video can autoplay
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      
      // Modern browsers return a promise
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started
            setIsVideoPlaying(true);
          })
          .catch(error => {
            // Autoplay was prevented
            console.log('Autoplay prevented:', error);
            setIsVideoPlaying(false);
          });
      }
    }
  }, []);

  return (
    <div className="video-background">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        className={`video ${isVideoPlaying ? '' : 'video-fallback'}`}
        poster="/fallbackimage.png"
      >
        <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is a simple React app with a fullscreen video background</p>
      </div>
    </div>
  );
};

export default VideoBackground;
