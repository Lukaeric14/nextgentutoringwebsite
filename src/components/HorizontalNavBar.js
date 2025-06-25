import React from 'react';
import './HorizontalNavBar.css';

const HorizontalNavBar = () => {
  return (
    <header className="horizontal-nav-header">
      <div className="nav-container">
        <div className="nav-left">
          <span className="nav-title">NextGen Tutoring</span>
        </div>
        <div className="nav-center">
          <span className="nav-subtitle">Math tutoring made with Love</span>
        </div>
        <div className="nav-right">
          <a href="#register" className="nav-link">Register</a>
          <a href="#login" className="nav-link">Login</a>
        </div>
      </div>
    </header>
  );
};

export default HorizontalNavBar;
