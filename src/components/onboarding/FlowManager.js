import React, { useState } from 'react';
import { onboardingFlow } from './flowConfig';
import StepRenderer from './StepRenderer';

/**
 * FlowManager Component
 * Manages the state and navigation of the onboarding flow
 * 
 * @param {Object} props
 * @param {string} [props.initialStep='welcome'] - The initial step ID to show
 * @param {Function} props.onComplete - Callback when the flow is completed
 * @param {Function} props.onClose - Callback to close the modal
 */
const FlowManager = ({ initialStep = 'welcome', onComplete, onClose }) => {
  const [currentStepId, setCurrentStepId] = useState(initialStep);
  const [formData, setFormData] = useState({});
  
  const currentStep = onboardingFlow[currentStepId];
  
  if (!currentStep) {
    console.error(`Step "${currentStepId}" not found in flow configuration`);
    return null;
  }
  
  const handleNext = (nextStepId) => {
    // If nextStepId is provided, go to that step
    // Otherwise use the default next step from the current step
    const nextStep = nextStepId || currentStep.nextStep;
    
    if (nextStep) {
      setCurrentStepId(nextStep);
    } else if (currentStep.isLastStep) {
      handleComplete();
    }
  };
  
  const handlePrevious = () => {
    if (currentStep.prevStep) {
      setCurrentStepId(currentStep.prevStep);
    }
  };
  
  const handleOptionSelect = (option) => {
    setFormData(prev => ({
      ...prev,
      selectedOption: option.id
    }));
    handleNext(option.nextStep);
  };
  
  const handleInputChange = (fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };
  
  const handleComplete = () => {
    if (onComplete) {
      onComplete(formData);
    }
  };
  
  return (
    <StepRenderer
      step={currentStep}
      formData={formData}
      onNext={handleNext}
      onPrevious={handlePrevious}
      onOptionSelect={handleOptionSelect}
      onInputChange={handleInputChange}
      onComplete={handleComplete}
      onClose={onClose}
    />
  );
};

export default FlowManager;
