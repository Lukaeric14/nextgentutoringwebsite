import React from 'react';
import './Modal.css';
import SpeechBubble from './SpeechBubble';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-character-container">
          <SpeechBubble position="bottom-right">
            {children || (
              <>
                Hi! I'm Max<br />
                <br />
                I'm part of the explorer crew!<br />
                <br />
                Who do we have here today?
              </>
            )}
          </SpeechBubble>
          <img 
            src="/images/characters/idle/Max-wave.png" 
            alt="Max waving" 
            className="modal-character-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
