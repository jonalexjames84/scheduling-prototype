'use client';

import React from 'react';
import { TimeSlot, MeetingType } from '@/lib/types';
import { formatDate, formatTime } from '@/lib/mock-data';
import { Calendar, Clock, MapPin, Video, Phone, CheckCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ConfirmationCardProps {
  slot: TimeSlot;
  meetingType: MeetingType;
  meetingDetails: {
    location?: string;
    videoLink?: string;
    phoneNumber?: string;
  };
  isConfirmed: boolean;
  onConfirm: () => void;
  onReschedule: () => void;
}

export function ConfirmationCard({
  slot,
  meetingType,
  meetingDetails,
  isConfirmed,
  onConfirm,
  onReschedule,
}: ConfirmationCardProps) {
  return (
    <div className="bg-white/5 rounded-xl overflow-hidden animate-fade-in">
      {/* Header */}
      <div className={`p-4 ${isConfirmed ? 'bg-green-600/20' : 'bg-[#007BE5]/20'}`}>
        <div className="flex items-center gap-2">
          {isConfirmed ? (
            <>
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="font-medium text-green-400">Interview Confirmed!</span>
            </>
          ) : (
            <>
              <Calendar className="w-5 h-5 text-[#007BE5]" />
              <span className="font-medium text-white">Confirm Your Interview</span>
            </>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="p-4 space-y-3">
        {/* Date & Time */}
        <div className="flex items-center gap-3 text-white">
          <div className="p-2 bg-white/10 rounded-lg">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-medium">{formatDate(slot.date)}</p>
            <p className="text-xs text-gray-400">
              <Clock className="w-3 h-3 inline mr-1" />
              {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
            </p>
          </div>
        </div>

        {/* Meeting Type Details */}
        {meetingType === 'in-person' && meetingDetails.location && (
          <div className="flex items-start gap-3 text-white">
            <div className="p-2 bg-white/10 rounded-lg">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-medium">Location</p>
              <p className="text-xs text-gray-400">{meetingDetails.location}</p>
            </div>
          </div>
        )}

        {meetingType === 'video' && meetingDetails.videoLink && (
          <div className="flex items-start gap-3 text-white">
            <div className="p-2 bg-white/10 rounded-lg">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-medium">Video Call</p>
              <a
                href={meetingDetails.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#007BE5] hover:underline break-all"
              >
                {meetingDetails.videoLink}
              </a>
            </div>
          </div>
        )}

        {meetingType === 'phone' && meetingDetails.phoneNumber && (
          <div className="flex items-start gap-3 text-white">
            <div className="p-2 bg-white/10 rounded-lg">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-medium">Phone Call</p>
              <p className="text-xs text-gray-400">We&apos;ll call you at the scheduled time</p>
              <p className="text-sm text-white mt-1">{meetingDetails.phoneNumber}</p>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-4 pt-0 flex gap-2">
        {!isConfirmed ? (
          <>
            <Button onClick={onConfirm} className="flex-1">
              Confirm
            </Button>
            <Button variant="secondary" onClick={onReschedule}>
              <RefreshCw className="w-4 h-4" />
            </Button>
          </>
        ) : (
          <Button variant="secondary" onClick={onReschedule} className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            Reschedule
          </Button>
        )}
      </div>
    </div>
  );
}
