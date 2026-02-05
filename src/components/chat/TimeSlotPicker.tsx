'use client';

import React from 'react';
import { TimeSlot } from '@/lib/types';
import { formatDate, formatTime, groupSlotsByDate } from '@/lib/mock-data';
import { Calendar, Clock } from 'lucide-react';

interface TimeSlotPickerProps {
  slots: TimeSlot[];
  selectedSlot: TimeSlot | null;
  onSelectSlot: (slot: TimeSlot) => void;
}

export function TimeSlotPicker({ slots, selectedSlot, onSelectSlot }: TimeSlotPickerProps) {
  const groupedSlots = groupSlotsByDate(slots);
  const dates = Object.keys(groupedSlots).sort().slice(0, 5); // Show next 5 days with availability

  if (dates.length === 0) {
    return (
      <div className="bg-white/5 rounded-xl p-4 animate-fade-in">
        <p className="text-gray-400 text-sm text-center">No available time slots</p>
      </div>
    );
  }

  return (
    <div className="bg-white/5 rounded-xl p-4 space-y-4 animate-fade-in">
      <div className="flex items-center gap-2 text-white/80">
        <Calendar className="w-4 h-4" />
        <span className="text-sm font-medium">Available Times</span>
      </div>

      <div className="space-y-4 max-h-64 overflow-y-auto">
        {dates.map(date => (
          <div key={date}>
            <h4 className="text-xs font-medium text-gray-400 mb-2">
              {formatDate(date)}
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {groupedSlots[date].slice(0, 6).map(slot => (
                <button
                  key={slot.id}
                  onClick={() => onSelectSlot(slot)}
                  className={`flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    selectedSlot?.id === slot.id
                      ? 'bg-[#007BE5] text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  {formatTime(slot.startTime)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
