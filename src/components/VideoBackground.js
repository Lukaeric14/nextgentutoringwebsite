import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="video">
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
