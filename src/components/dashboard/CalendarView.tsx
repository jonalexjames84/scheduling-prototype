'use client';

import React, { useState } from 'react';
import { useScheduling } from '@/context/SchedulingContext';
import { ChevronLeft, ChevronRight, MapPin, Video, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { formatTime } from '@/lib/mock-data';

export function CalendarView() {
  const { interviews } = useScheduling();
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get the start of the current week (Sunday)
  const getWeekStart = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay();
    d.setDate(d.getDate() - day);
    return d;
  };

  const weekStart = getWeekStart(currentDate);

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDay = firstDayOfMonth.getDay();

  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const weekRange = `${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${new Date(weekStart.getTime() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const prevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  // Get interviews for a specific date string
  const getInterviewsForDateStr = (dateStr: string) => {
    return interviews.filter(i => i.slot.date === dateStr && i.status !== 'cancelled');
  };

  // Get interviews for a specific day number in current month
  const getInterviewsForDay = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return getInterviewsForDateStr(dateStr);
  };

  // Generate week days for mobile view
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(weekStart);
    date.setDate(date.getDate() + i);
    return {
      date,
      dateStr: date.toISOString().split('T')[0],
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNum: date.getDate(),
      isToday: date.toDateString() === new Date().toDateString(),
    };
  });

  const meetingIcons = {
    'in-person': MapPin,
    'video': Video,
    'phone': Phone,
  };

  // Generate calendar days for desktop month view
  const calendarDays = [];

  // Empty cells before first day
  for (let i = 0; i < startingDay; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-24" />);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayInterviews = getInterviewsForDay(day);
    const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();

    calendarDays.push(
      <div
        key={day}
        className={`h-24 p-2 border border-white/10 rounded-lg ${
          isToday ? 'bg-[#007BE5]/10 border-[#007BE5]/30' : 'bg-white/5'
        }`}
      >
        <div className={`text-sm font-medium mb-1 ${isToday ? 'text-[#007BE5]' : 'text-white'}`}>
          {day}
        </div>
        <div className="space-y-1 overflow-y-auto max-h-16">
          {dayInterviews.slice(0, 2).map(interview => (
            <div
              key={interview.id}
              className={`text-xs p-1 rounded truncate ${
                interview.status === 'confirmed'
                  ? 'bg-green-500/20 text-green-300'
                  : 'bg-[#007BE5]/20 text-blue-300'
              }`}
              title={`${interview.candidateName} - ${interview.jobTitle}`}
            >
              {formatTime(interview.slot.startTime)} {interview.candidateName.split(' ')[0]}
            </div>
          ))}
          {dayInterviews.length > 2 && (
            <div className="text-xs text-gray-400">+{dayInterviews.length - 2} more</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Mobile Week View */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">{weekRange}</h2>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={prevWeek}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setCurrentDate(new Date())}>
              Today
            </Button>
            <Button variant="ghost" size="sm" onClick={nextWeek}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Legend */}
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#007BE5]" />
            <span className="text-xs text-gray-400">Scheduled</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-gray-400">Confirmed</span>
          </div>
        </div>

        {/* Week Days List */}
        <div className="space-y-2">
          {weekDays.map(({ date, dateStr, dayName, dayNum, isToday }) => {
            const dayInterviews = getInterviewsForDateStr(dateStr);

            return (
              <div
                key={dateStr}
                className={`p-3 rounded-xl border ${
                  isToday
                    ? 'bg-[#007BE5]/10 border-[#007BE5]/30'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                {/* Day Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    isToday ? 'bg-[#007BE5] text-white' : 'bg-white/10 text-white'
                  }`}>
                    {dayNum}
                  </div>
                  <div>
                    <p className={`font-medium ${isToday ? 'text-[#007BE5]' : 'text-white'}`}>
                      {dayName}
                    </p>
                    <p className="text-xs text-gray-400">
                      {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                  {dayInterviews.length > 0 && (
                    <div className="ml-auto">
                      <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300">
                        {dayInterviews.length} interview{dayInterviews.length > 1 ? 's' : ''}
                      </span>
                    </div>
                  )}
                </div>

                {/* Day Interviews */}
                {dayInterviews.length > 0 ? (
                  <div className="space-y-2 ml-13">
                    {dayInterviews.map(interview => {
                      const MeetingIcon = meetingIcons[interview.meetingType];
                      return (
                        <div
                          key={interview.id}
                          className={`flex items-center gap-3 p-2 rounded-lg ${
                            interview.status === 'confirmed'
                              ? 'bg-green-500/10 border border-green-500/20'
                              : 'bg-[#007BE5]/10 border border-[#007BE5]/20'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                            interview.status === 'confirmed' ? 'bg-green-500/20 text-green-300' : 'bg-[#007BE5]/20 text-blue-300'
                          }`}>
                            {interview.candidateName.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">
                              {interview.candidateName}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <span>{formatTime(interview.slot.startTime)}</span>
                              <MeetingIcon className="w-3 h-3" />
                              <span className="truncate">{interview.jobTitle}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 ml-13">No interviews</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Month View */}
      <div className="hidden md:block">
        {/* Desktop Header */}
        <div className="flex items-center justify-between mb-6">
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

        {/* Desktop Legend */}
        <div className="flex gap-4 mb-4">
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
        <div className="grid grid-cols-7 gap-2 mb-2">
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
    </div>
  );
}
