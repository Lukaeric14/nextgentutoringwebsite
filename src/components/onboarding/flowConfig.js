/**
 * Onboarding flow configuration
 * Defines all steps, content, and navigation logic for the onboarding wizard
 */

export const onboardingFlow = {
  // Initial step (parent or student selection)
  'welcome': {
    id: 'welcome',
    content: {
      title: "Hi! I'm Max",
      messages: [
        "I'm part of the explorer crew!",
        "Who do we have here today?"
      ]
    },
    options: [
      { 
        id: 'student', 
        label: "I'm a student", 
        nextStep: 'student-intro',
        icon: '/images/characters/student-icon.png'
      },
      { 
        id: 'parent', 
        label: "I'm a parent", 
        nextStep: 'parent-intro',
        icon: '/images/characters/parent-icon.png'
      }
    ],
    characterImage: '/images/characters/idle/Max-wave.png'
  },
  
  // Student flow steps
  'student-intro': {
    id: 'student-intro',
    content: {
      title: 'Welcome!',
      messages: [
        "We're happy to have you.",
        "Our goal would be to help you learn more."
      ]
    },
    inputFields: [
      {
        type: 'phone',
        placeholder: 'Phone Number',
        id: 'phoneNumber',
        required: true
      }
    ],
    buttons: [
      {
        label: 'I would like more information first',
        action: 'student-info'
      }
    ],
    nextStep: 'student-confirmation',
    prevStep: 'welcome',
    characterImage: '/images/characters/idle/Max-wave.png'
  },
  
  'student-info': {
    id: 'student-info',
    content: {
      title: 'Welcome!',
      messages: [
        "We're happy to have you here.",
        "Our goal would be to help you learn more."
      ]
    },
    prevStep: 'student-intro',
    nextStep: 'student-confirmation',
    characterImage: '/images/characters/idle/Max-wave.png'
  },
  
  'student-confirmation': {
    id: 'student-confirmation',
    content: {
      title: 'Amazing!',
      messages: [
        "We'll give your parents a call as soon as possible.",
        "In the meantime you can watch this introduction video to learn more."
      ]
    },
    video: {
      id: 'intro-video',
      label: 'Introduction video'
    },
    isLastStep: true,
    prevStep: 'student-intro',
    characterImage: '/images/characters/idle/Max-wave.png'
  },
  
  // Parent flow steps
  'parent-intro': {
    id: 'parent-intro',
    content: {
      title: 'Welcome!',
      messages: [
        "We need your phone number to get started.",
        "What's your phone number?"
      ]
    },
    inputFields: [
      {
        type: 'phone',
        placeholder: 'Phone Number',
        id: 'phoneNumber',
        required: true
      }
    ],
    nextStep: 'parent-confirmation',
    prevStep: 'welcome',
    characterImage: '/images/characters/idle/Max-wave.png'
  },
  
  'parent-confirmation': {
    id: 'parent-confirmation',
    content: {
      title: 'Amazing!',
      messages: [
        "We'll give you a call as soon as possible.",
        "In the meantime you can watch this introduction video to learn more."
      ]
    },
    video: {
      id: 'intro-video',
      label: 'Introduction video'
    },
    isLastStep: true,
    prevStep: 'parent-intro',
    characterImage: '/images/characters/idle/Max-wave.png'
  }
};

export default onboardingFlow;
