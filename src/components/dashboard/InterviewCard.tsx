'use client';

import React, { useState } from 'react';
import { Interview, TimeSlot } from '@/lib/types';
import { formatDate, formatTime } from '@/lib/mock-data';
import { useScheduling } from '@/context/SchedulingContext';
import {
  Calendar,
  Clock,
  MapPin,
  Video,
  Phone,
  Mail,
  User,
  MoreVertical,
  RefreshCw,
  X,
  CheckCircle
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface InterviewCardProps {
  interview: Interview;
}

export function InterviewCard({ interview }: InterviewCardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [showReschedule, setShowReschedule] = useState(false);
  const { updateInterview, cancelInterview, getAvailableSlots } = useScheduling();

  const statusColors = {
    scheduled: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    confirmed: 'bg-green-500/20 text-green-300 border-green-500/30',
    cancelled: 'bg-red-500/20 text-red-300 border-red-500/30',
  };

  const meetingIcons = {
    'in-person': MapPin,
    'video': Video,
    'phone': Phone,
  };

  const MeetingIcon = meetingIcons[interview.meetingType];

  const handleReschedule = (newSlot: TimeSlot) => {
    updateInterview(interview.id, { slot: newSlot });
    setShowReschedule(false);
  };

  const handleCancel = () => {
    cancelInterview(interview.id);
    setShowMenu(false);
  };

  const handleConfirm = () => {
    updateInterview(interview.id, { status: 'confirmed' });
    setShowMenu(false);
  };

  const availableSlots = getAvailableSlots();

  return (
    <>
      <Card className="p-4 relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#007BE5]/20 flex items-center justify-center">
              <User className="w-5 h-5 text-[#007BE5]" />
            </div>
            <div>
              <h3 className="font-medium text-white">{interview.candidateName}</h3>
              <p className="text-sm text-gray-400">{interview.jobTitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-1 rounded-full border ${statusColors[interview.status]}`}>
              {interview.status.charAt(0).toUpperCase() + interview.status.slice(1)}
            </span>
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
              >
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </button>
              {showMenu && (
                <div className="absolute right-0 top-full mt-1 bg-[#1a2235] border border-white/10 rounded-lg shadow-lg py-1 z-10 min-w-[140px]">
                  {interview.status === 'scheduled' && (
                    <button
                      onClick={handleConfirm}
                      className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10 flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Confirm
                    </button>
                  )}
                  <button
                    onClick={() => { setShowReschedule(true); setShowMenu(false); }}
                    className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10 flex items-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Reschedule
                  </button>
                  <button
                    onClick={handleCancel}
                    className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-white/10 flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="w-4 h-4 text-gray-500" />
            {formatDate(interview.slot.date)}
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="w-4 h-4 text-gray-500" />
            {formatTime(interview.slot.startTime)} - {formatTime(interview.slot.endTime)}
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MeetingIcon className="w-4 h-4 text-gray-500" />
            {interview.meetingType === 'in-person' && interview.meetingDetails.location}
            {interview.meetingType === 'video' && (
              <a href={interview.meetingDetails.videoLink} className="text-[#007BE5] hover:underline truncate">
                {interview.meetingDetails.videoLink}
              </a>
            )}
            {interview.meetingType === 'phone' && interview.meetingDetails.phoneNumber}
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Mail className="w-4 h-4 text-gray-500" />
            {interview.candidateEmail}
          </div>
          {interview.candidatePhone && (
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4 text-gray-500" />
              {interview.candidatePhone}
            </div>
          )}
        </div>
      </Card>

      {/* Reschedule Modal */}
      {showReschedule && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md p-6 m-4">
            <h3 className="text-lg font-semibold text-white mb-4">Reschedule Interview</h3>
            <p className="text-sm text-gray-400 mb-4">
              Select a new time for {interview.candidateName}&apos;s interview.
            </p>
            <div className="max-h-64 overflow-y-auto space-y-2 mb-4">
              {availableSlots.slice(0, 10).map(slot => (
                <button
                  key={slot.id}
                  onClick={() => handleReschedule(slot)}
                  className="w-full p-3 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors"
                >
                  <p className="text-sm font-medium text-white">{formatDate(slot.date)}</p>
                  <p className="text-xs text-gray-400">{formatTime(slot.startTime)} - {formatTime(slot.endTime)}</p>
                </button>
              ))}
            </div>
            <Button variant="secondary" onClick={() => setShowReschedule(false)} className="w-full">
              Cancel
            </Button>
          </Card>
        </div>
      )}
    </>
  );
}
