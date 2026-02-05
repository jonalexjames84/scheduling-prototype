'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import {
  TimeSlot,
  Interview,
  MeetingPreferences,
  AvailabilityBlock,
  MeetingType
} from '@/lib/types';
import {
  mockAvailabilityBlocks,
  mockInterviews,
  mockMeetingPreferences,
  generateTimeSlots
} from '@/lib/mock-data';

interface SchedulingContextType {
  // Availability
  availabilityBlocks: AvailabilityBlock[];
  setAvailabilityBlocks: (blocks: AvailabilityBlock[]) => void;
  addAvailabilityBlock: (block: Omit<AvailabilityBlock, 'id'>) => void;
  removeAvailabilityBlock: (id: string) => void;

  // Time slots (generated from availability)
  timeSlots: TimeSlot[];

  // Interviews
  interviews: Interview[];
  addInterview: (interview: Omit<Interview, 'id'>) => void;
  updateInterview: (id: string, updates: Partial<Interview>) => void;
  cancelInterview: (id: string) => void;

  // Meeting preferences
  meetingPreferences: MeetingPreferences;
  updateMeetingPreferences: (prefs: Partial<MeetingPreferences>) => void;

  // Helpers
  getAvailableSlots: () => TimeSlot[];
  bookSlot: (slot: TimeSlot, candidateName: string, candidateEmail: string, candidatePhone: string | undefined, jobTitle: string, meetingType: MeetingType) => Interview;
}

const SchedulingContext = createContext<SchedulingContextType | undefined>(undefined);

export function SchedulingProvider({ children }: { children: ReactNode }) {
  const [availabilityBlocks, setAvailabilityBlocks] = useState<AvailabilityBlock[]>(mockAvailabilityBlocks);
  const [interviews, setInterviews] = useState<Interview[]>(mockInterviews);
  const [meetingPreferences, setMeetingPreferences] = useState<MeetingPreferences>(mockMeetingPreferences);

  // Generate time slots from availability blocks
  const timeSlots = generateTimeSlots(availabilityBlocks, meetingPreferences.slotDuration);

  const addAvailabilityBlock = useCallback((block: Omit<AvailabilityBlock, 'id'>) => {
    const newBlock: AvailabilityBlock = {
      ...block,
      id: `block-${Date.now()}`,
    };
    setAvailabilityBlocks(prev => [...prev, newBlock]);
  }, []);

  const removeAvailabilityBlock = useCallback((id: string) => {
    setAvailabilityBlocks(prev => prev.filter(b => b.id !== id));
  }, []);

  const addInterview = useCallback((interview: Omit<Interview, 'id'>) => {
    const newInterview: Interview = {
      ...interview,
      id: `int-${Date.now()}`,
    };
    setInterviews(prev => [...prev, newInterview]);
  }, []);

  const updateInterview = useCallback((id: string, updates: Partial<Interview>) => {
    setInterviews(prev => prev.map(i =>
      i.id === id ? { ...i, ...updates } : i
    ));
  }, []);

  const cancelInterview = useCallback((id: string) => {
    setInterviews(prev => prev.map(i =>
      i.id === id ? { ...i, status: 'cancelled' } : i
    ));
  }, []);

  const updateMeetingPreferences = useCallback((prefs: Partial<MeetingPreferences>) => {
    setMeetingPreferences(prev => ({ ...prev, ...prefs }));
  }, []);

  const getAvailableSlots = useCallback(() => {
    const bookedSlotIds = new Set(
      interviews
        .filter(i => i.status !== 'cancelled')
        .map(i => i.slot.id)
    );
    return timeSlots.filter(slot => !bookedSlotIds.has(slot.id));
  }, [timeSlots, interviews]);

  const bookSlot = useCallback((
    slot: TimeSlot,
    candidateName: string,
    candidateEmail: string,
    candidatePhone: string | undefined,
    jobTitle: string,
    meetingType: MeetingType
  ): Interview => {
    const meetingDetails: Interview['meetingDetails'] = {};

    if (meetingType === 'in-person') {
      meetingDetails.location = meetingPreferences.defaultLocation;
    } else if (meetingType === 'video') {
      meetingDetails.videoLink = meetingPreferences.videoLink;
    } else if (meetingType === 'phone') {
      meetingDetails.phoneNumber = meetingPreferences.phoneNumber;
    }

    const newInterview: Interview = {
      id: `int-${Date.now()}`,
      candidateName,
      candidateEmail,
      candidatePhone,
      jobTitle,
      slot,
      meetingType,
      status: 'scheduled',
      meetingDetails,
    };

    setInterviews(prev => [...prev, newInterview]);
    return newInterview;
  }, [meetingPreferences]);

  return (
    <SchedulingContext.Provider value={{
      availabilityBlocks,
      setAvailabilityBlocks,
      addAvailabilityBlock,
      removeAvailabilityBlock,
      timeSlots,
      interviews,
      addInterview,
      updateInterview,
      cancelInterview,
      meetingPreferences,
      updateMeetingPreferences,
      getAvailableSlots,
      bookSlot,
    }}>
      {children}
    </SchedulingContext.Provider>
  );
}

export function useScheduling() {
  const context = useContext(SchedulingContext);
  if (context === undefined) {
    throw new Error('useScheduling must be used within a SchedulingProvider');
  }
  return context;
}
