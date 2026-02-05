export interface TimeSlot {
  id: string;
  date: string;        // "2024-01-15"
  startTime: string;   // "10:00"
  endTime: string;     // "10:30"
}

export type MeetingType = 'in-person' | 'video' | 'phone';

export interface Interview {
  id: string;
  candidateName: string;
  candidateEmail: string;
  candidatePhone?: string;
  jobTitle: string;
  slot: TimeSlot;
  meetingType: MeetingType;
  status: 'scheduled' | 'confirmed' | 'cancelled';
  meetingDetails: {
    location?: string;
    videoLink?: string;
    phoneNumber?: string;
  };
}

export interface MeetingPreferences {
  allowedTypes: MeetingType[];
  defaultLocation: string;
  videoLink: string;
  phoneNumber: string;
  slotDuration: number; // 30 min default
}

export interface AvailabilityBlock {
  id: string;
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  startTime: string; // "09:00"
  endTime: string;   // "17:00"
}

export type ChatStep =
  | 'greeting'
  | 'show_slots'
  | 'meeting_type'
  | 'collect_phone'
  | 'confirm'
  | 'success'
  | 'reschedule';

export interface ChatMessage {
  id: string;
  type: 'bot' | 'user' | 'system';
  content: string;
  timestamp: Date;
  component?: 'time_slots' | 'meeting_type' | 'phone_input' | 'confirmation' | 'success';
}

export interface CandidateInfo {
  name: string;
  email: string;
  phone?: string;
  jobTitle: string;
  company: string;
}
