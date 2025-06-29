import React, { useRef, useEffect, useState } from 'react';
import './VideoBackground.css';
import HorizontalNavBar from './HorizontalNavBar';
import Characters from './Characters';
import Modal from './Modal';

const VideoBackground = () => {
  const videoRef = useRef(null);
  const zoomVideoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isExploring, setIsExploring] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsVideoPlaying(true))
          .catch(() => setIsVideoPlaying(false));
      }
    }
  }, []);

  const handleExploreClick = () => {
    setIsExploring(true);
    setTimeout(() => {
      if (zoomVideoRef.current) {
        const video = zoomVideoRef.current;
        video.play();
        video.onended = () => {
          setShowModal(true);
        };
      }
    }, 1000);
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    // Show the onboarding modal when the intro video ends
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleOnboardingComplete = (formData) => {
    console.log('Onboarding completed with data:', formData);
    // Here you would typically send this data to your backend
    // or perform other actions with the collected information
    setShowModal(false);
  };

  return (
    <div className={`video-background ${isExploring ? 'exploring' : ''}`}>
      <HorizontalNavBar />
      <Characters />
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`video background-video ${isVideoPlaying ? '' : 'video-fallback'}`}
        poster="/fallbackimage.png"
        onEnded={handleVideoEnd}
      >
        <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        ref={zoomVideoRef}
        muted
        playsInline
        className="video zoom-video"
        src="/videos/zoominvideo.mp4"
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>The Explorer<br />Crew's Last Mission</h1>
        <button className="explore-button" onClick={handleExploreClick}>
          Become an<br />Explorer Today
        </button>
      </div>
      <Modal 
        show={showModal} 
        onClose={handleModalClose}
        useFlow={true}
        initialStep="welcome"
      />
    </div>
  );
};

export default VideoBackground;
