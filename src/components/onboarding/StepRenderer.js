import React from 'react';
import SpeechBubble from '../SpeechBubble';
import './StepRenderer.css';

/**
 * StepRenderer Component
 * Renders a single step in the onboarding flow
 * 
 * @param {Object} props
 * @param {Object} props.step - The step configuration object
 * @param {Object} props.formData - The collected form data
 * @param {Function} props.onNext - Handler for next step navigation
 * @param {Function} props.onPrevious - Handler for previous step navigation
 * @param {Function} props.onOptionSelect - Handler for option selection
 * @param {Function} props.onInputChange - Handler for input field changes
 * @param {Function} props.onComplete - Handler for flow completion
 * @param {Function} props.onClose - Handler to close the modal
 */
const StepRenderer = ({
  step,
  formData,
  onNext,
  onPrevious,
  onOptionSelect,
  onInputChange,
  onComplete,
  onClose
}) => {
  if (!step) return null;
  
  return (
    <div className="step-container">
      {/* Progress bar */}
      <div className="progress-bar">
        <div 
          className="progress-bar__fill"
          style={{ width: step.progressPercentage || '50%' }}
        ></div>
      </div>
      
      {/* Character and speech bubble */}
      <div className="character-container">
        {step.content && (
          <SpeechBubble position="left" className="onboarding-speech-bubble">
            {step.content.messages && step.content.messages.map((msg, i) => (
              <p key={i} className="speech-message">{msg}</p>
            ))}
          </SpeechBubble>
        )}
        
        {step.characterImage && (
          <img 
            src={step.characterImage} 
            alt="Character" 
            className="character-image" 
          />
        )}
      </div>
      
      {/* Options (like student/parent selection) */}
      {step.options && step.options.length > 0 && (
        <div className="options-container">
          {step.options.map(option => (
            <button
              key={option.id}
              className="option-button"
              onClick={() => onOptionSelect(option)}
            >
              {option.icon && <img src={option.icon} alt="" className="option-icon" />}
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
      
      {/* Input fields */}
      {step.inputFields && step.inputFields.length > 0 && (
        <div className="input-fields-container">
          {step.inputFields.map(field => (
            <div key={field.id} className="input-field">
              {field.type === 'phone' && (
                <div className="phone-input">
                  <div className="country-code">
                    <img src="/images/us-flag.png" alt="US" />
                    <span>+1</span>
                  </div>
                  <input
                    type="tel"
                    placeholder={field.placeholder}
                    value={formData[field.id] || ''}
                    onChange={(e) => onInputChange(field.id, e.target.value)}
                    required={field.required}
                  />
                </div>
              )}
              {/* Add other input types as needed */}
            </div>
          ))}
        </div>
      )}
      
      {/* Custom buttons */}
      {step.buttons && step.buttons.length > 0 && (
        <div className="buttons-container">
          {step.buttons.map((button, i) => (
            <button
              key={i}
              className="custom-button"
              onClick={() => onNext(button.action)}
            >
              {button.label}
            </button>
          ))}
        </div>
      )}
      
      {/* Navigation buttons */}
      <div className="navigation-buttons">
        {step.prevStep && (
          <button className="back-button" onClick={onPrevious}>
            Back
          </button>
        )}
        
        {step.nextStep && !step.options && (
          <button 
            className="next-button" 
            onClick={() => onNext()}
            disabled={step.inputFields?.some(f => f.required && !formData[f.id])}
          >
            Next
          </button>
        )}
        
        {step.isLastStep && (
          <button className="complete-button" onClick={onComplete}>
            Complete
          </button>
        )}
      </div>
      
      {/* Video component for steps with videos */}
      {step.video && (
        <div className="video-container">
          <button className="video-button">
            <span className="play-icon">▶</span>
            {step.video.label || 'Watch video'}
          </button>
        </div>
      )}
    </div>
  );
};

export default StepRenderer;
