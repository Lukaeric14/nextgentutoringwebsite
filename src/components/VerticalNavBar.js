import React from 'react';
import './VerticalNavBar.css';

const VerticalNavBar = () => {
  return (
    <nav className="vertical-nav">
      <ul>
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </nav>
  );
};

export default VerticalNavBar;
