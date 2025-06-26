import React from 'react';
import './Modal.css';
import FlowManager from './onboarding/FlowManager';

/**
 * Modal component that displays content in an overlay
 * Now integrated with the onboarding flow system
 * 
 * @param {Object} props
 * @param {boolean} props.show - Whether the modal is visible
 * @param {Function} props.onClose - Function to close the modal
 * @param {React.ReactNode} [props.children] - Optional custom content to display instead of the flow
 * @param {boolean} [props.useFlow=true] - Whether to use the onboarding flow or just display children
 * @param {string} [props.initialStep='welcome'] - The initial step ID for the flow
 */
const Modal = ({ 
  show, 
  onClose, 
  children, 
  useFlow = true,
  initialStep = 'welcome'
}) => {
  if (!show) {
    return null;
  }

  const handleComplete = (formData) => {
    console.log('Onboarding flow completed with data:', formData);
    // Process the collected data (e.g., send to API, store in state, etc.)
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {!useFlow && children}
        
        {useFlow && (
          <FlowManager
            initialStep={initialStep}
            onComplete={handleComplete}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
