'use client';

import React, { useState } from 'react';
import { useScheduling } from '@/context/SchedulingContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { formatTime } from '@/lib/mock-data';

export function CalendarView() {
  const { interviews } = useScheduling();
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDay = firstDayOfMonth.getDay();

  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Get interviews for a specific date
  const getInterviewsForDate = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return interviews.filter(i => i.slot.date === dateStr && i.status !== 'cancelled');
  };

  // Generate calendar days
  const calendarDays = [];

  // Empty cells before first day
  for (let i = 0; i < startingDay; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-28" />);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayInterviews = getInterviewsForDate(day);
    const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();

    calendarDays.push(
      <div
        key={day}
        className={`h-28 p-2 border border-white/10 rounded-lg ${
          isToday ? 'bg-[#007BE5]/10 border-[#007BE5]/30' : 'bg-white/5'
        }`}
      >
        <div className={`text-sm font-medium mb-1 ${isToday ? 'text-[#007BE5]' : 'text-white'}`}>
          {day}
        </div>
        <div className="space-y-1 overflow-y-auto max-h-20">
          {dayInterviews.map(interview => (
            <div
              key={interview.id}
              className={`text-xs p-1.5 rounded truncate ${
                interview.status === 'confirmed'
                  ? 'bg-green-500/20 text-green-300'
                  : 'bg-[#007BE5]/20 text-blue-300'
              }`}
              title={`${interview.candidateName} - ${interview.jobTitle}`}
            >
              {formatTime(interview.slot.startTime)} {interview.candidateName.split(' ')[0]}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{monthName}</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={prevMonth}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setCurrentDate(new Date())}>
            Today
          </Button>
          <Button variant="ghost" size="sm" onClick={nextMonth}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-[#007BE5]/20 border border-[#007BE5]/30" />
          <span className="text-sm text-gray-400">Scheduled</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-green-500/20 border border-green-500/30" />
          <span className="text-sm text-gray-400">Confirmed</span>
        </div>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-400 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {calendarDays}
      </div>
    </div>
  );
}
