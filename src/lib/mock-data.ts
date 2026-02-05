import { TimeSlot, Interview, MeetingPreferences, AvailabilityBlock, CandidateInfo } from './types';

// Generate dates for the next 2 weeks
const getDateString = (daysFromNow: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date.toISOString().split('T')[0];
};

// Mock availability blocks (weekly recurring)
export const mockAvailabilityBlocks: AvailabilityBlock[] = [
  { id: '1', dayOfWeek: 1, startTime: '09:00', endTime: '12:00' },
  { id: '2', dayOfWeek: 1, startTime: '14:00', endTime: '17:00' },
  { id: '3', dayOfWeek: 2, startTime: '10:00', endTime: '12:00' },
  { id: '4', dayOfWeek: 2, startTime: '13:00', endTime: '16:00' },
  { id: '5', dayOfWeek: 3, startTime: '09:00', endTime: '11:00' },
  { id: '6', dayOfWeek: 3, startTime: '14:00', endTime: '18:00' },
  { id: '7', dayOfWeek: 4, startTime: '10:00', endTime: '12:00' },
  { id: '8', dayOfWeek: 4, startTime: '14:00', endTime: '17:00' },
  { id: '9', dayOfWeek: 5, startTime: '09:00', endTime: '12:00' },
];

// Generate available time slots from availability blocks
export const generateTimeSlots = (blocks: AvailabilityBlock[], slotDuration: number = 30): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const today = new Date();

  // Generate slots for the next 14 days
  for (let day = 1; day <= 14; day++) {
    const date = new Date(today);
    date.setDate(date.getDate() + day);
    const dayOfWeek = date.getDay();
    const dateString = date.toISOString().split('T')[0];

    const dayBlocks = blocks.filter(b => b.dayOfWeek === dayOfWeek);

    for (const block of dayBlocks) {
      const [startHour, startMin] = block.startTime.split(':').map(Number);
      const [endHour, endMin] = block.endTime.split(':').map(Number);

      let currentHour = startHour;
      let currentMin = startMin;

      while (currentHour < endHour || (currentHour === endHour && currentMin < endMin)) {
        const startTime = `${String(currentHour).padStart(2, '0')}:${String(currentMin).padStart(2, '0')}`;

        // Calculate end time
        let endSlotMin = currentMin + slotDuration;
        let endSlotHour = currentHour;
        if (endSlotMin >= 60) {
          endSlotHour += Math.floor(endSlotMin / 60);
          endSlotMin = endSlotMin % 60;
        }

        const endTime = `${String(endSlotHour).padStart(2, '0')}:${String(endSlotMin).padStart(2, '0')}`;

        slots.push({
          id: `slot-${dateString}-${startTime}`,
          date: dateString,
          startTime,
          endTime,
        });

        currentMin += slotDuration;
        if (currentMin >= 60) {
          currentHour += Math.floor(currentMin / 60);
          currentMin = currentMin % 60;
        }
      }
    }
  }

  return slots;
};

// Mock interviews
export const mockInterviews: Interview[] = [
  {
    id: 'int-1',
    candidateName: 'Sarah Johnson',
    candidateEmail: 'sarah.j@email.com',
    candidatePhone: '(555) 123-4567',
    jobTitle: 'Server',
    slot: {
      id: 'slot-1',
      date: getDateString(2),
      startTime: '10:00',
      endTime: '10:30',
    },
    meetingType: 'in-person',
    status: 'confirmed',
    meetingDetails: {
      location: '123 Restaurant Ave, Suite 100, New York, NY 10001',
    },
  },
  {
    id: 'int-2',
    candidateName: 'Michael Chen',
    candidateEmail: 'mchen@email.com',
    jobTitle: 'Line Cook',
    slot: {
      id: 'slot-2',
      date: getDateString(3),
      startTime: '14:00',
      endTime: '14:30',
    },
    meetingType: 'video',
    status: 'scheduled',
    meetingDetails: {
      videoLink: 'https://zoom.us/j/123456789',
    },
  },
  {
    id: 'int-3',
    candidateName: 'Emily Rodriguez',
    candidateEmail: 'emily.r@email.com',
    candidatePhone: '(555) 987-6543',
    jobTitle: 'Host/Hostess',
    slot: {
      id: 'slot-3',
      date: getDateString(5),
      startTime: '11:00',
      endTime: '11:30',
    },
    meetingType: 'phone',
    status: 'scheduled',
    meetingDetails: {
      phoneNumber: '(555) 234-5678',
    },
  },
  {
    id: 'int-4',
    candidateName: 'David Kim',
    candidateEmail: 'dkim@email.com',
    jobTitle: 'Bartender',
    slot: {
      id: 'slot-4',
      date: getDateString(1),
      startTime: '15:00',
      endTime: '15:30',
    },
    meetingType: 'in-person',
    status: 'confirmed',
    meetingDetails: {
      location: '123 Restaurant Ave, Suite 100, New York, NY 10001',
    },
  },
];

// Mock meeting preferences
export const mockMeetingPreferences: MeetingPreferences = {
  allowedTypes: ['in-person', 'video', 'phone'],
  defaultLocation: '123 Restaurant Ave, Suite 100, New York, NY 10001',
  videoLink: 'https://zoom.us/j/123456789',
  phoneNumber: '(555) 234-5678',
  slotDuration: 30,
};

// Mock candidate info (for the chat demo)
export const mockCandidateInfo: CandidateInfo = {
  name: 'Alex Thompson',
  email: 'alex.t@email.com',
  jobTitle: 'Server',
  company: 'The Downtown Bistro',
};

// Helper to format date for display
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
};

// Helper to format time for display
export const formatTime = (time: string): string => {
  const [hour, min] = time.split(':').map(Number);
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${String(min).padStart(2, '0')} ${period}`;
};

// Group time slots by date
export const groupSlotsByDate = (slots: TimeSlot[]): Record<string, TimeSlot[]> => {
  return slots.reduce((acc, slot) => {
    if (!acc[slot.date]) {
      acc[slot.date] = [];
    }
    acc[slot.date].push(slot);
    return acc;
  }, {} as Record<string, TimeSlot[]>);
};
