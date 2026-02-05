import { ChatStep, ChatMessage, MeetingType, TimeSlot } from './types';

export interface ChatState {
  step: ChatStep;
  selectedSlot: TimeSlot | null;
  selectedMeetingType: MeetingType | null;
  phoneNumber: string;
  isConfirmed: boolean;
}

export const initialChatState: ChatState = {
  step: 'greeting',
  selectedSlot: null,
  selectedMeetingType: null,
  phoneNumber: '',
  isConfirmed: false,
};

export const getGreetingMessage = (candidateName: string, jobTitle: string, company: string): string => {
  return `Hi ${candidateName}! Thanks for applying to the ${jobTitle} position at ${company}. Let's schedule your interview. Please select a time that works for you.`;
};

export const getMeetingTypeMessage = (): string => {
  return `Great choice! How would you like to meet?`;
};

export const getPhoneCollectionMessage = (): string => {
  return `Perfect! What's the best phone number to reach you at?`;
};

export const getConfirmationMessage = (
  slot: TimeSlot,
  meetingType: MeetingType,
  formatDate: (d: string) => string,
  formatTime: (t: string) => string
): string => {
  const meetingTypeText = {
    'in-person': 'an in-person interview',
    'video': 'a video call',
    'phone': 'a phone call',
  }[meetingType];

  return `You're about to book ${meetingTypeText} on ${formatDate(slot.date)} at ${formatTime(slot.startTime)}. Does this work for you?`;
};

export const getSuccessMessage = (meetingType: MeetingType): string => {
  const details = {
    'in-person': `You're all set! We'll see you at the location shown below.`,
    'video': `You're all set! Join the video call using the link below.`,
    'phone': `You're all set! We'll call you at the number provided.`,
  }[meetingType];

  return details;
};

export const getRescheduleMessage = (): string => {
  return `No problem! Please select a new time that works better for you.`;
};

export const getNextStep = (currentStep: ChatStep, meetingType?: MeetingType): ChatStep => {
  switch (currentStep) {
    case 'greeting':
      return 'show_slots';
    case 'show_slots':
      return 'meeting_type';
    case 'meeting_type':
      return meetingType === 'phone' ? 'collect_phone' : 'confirm';
    case 'collect_phone':
      return 'confirm';
    case 'confirm':
      return 'success';
    case 'success':
      return 'success'; // Terminal state
    case 'reschedule':
      return 'show_slots';
    default:
      return 'greeting';
  }
};

export const createBotMessage = (content: string, component?: ChatMessage['component']): ChatMessage => ({
  id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  type: 'bot',
  content,
  timestamp: new Date(),
  component,
});

export const createUserMessage = (content: string): ChatMessage => ({
  id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  type: 'user',
  content,
  timestamp: new Date(),
});
