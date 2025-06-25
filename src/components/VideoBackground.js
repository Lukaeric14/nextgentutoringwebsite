import React, { useRef, useEffect, useState } from 'react';
import './VideoBackground.css';
import HorizontalNavBar from './HorizontalNavBar';

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
      <HorizontalNavBar />
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
        <h1>The Explorer<br />Crew's Last Mission</h1>
        <button className="explore-button">
          Become an<br />Explorer Today
        </button>
      </div>
    </div>
  );
};

export default VideoBackground;
