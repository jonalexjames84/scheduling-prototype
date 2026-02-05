'use client';

import React from 'react';
import { MeetingType } from '@/lib/types';
import { MapPin, Video, Phone } from 'lucide-react';

interface MeetingTypeSelectorProps {
  allowedTypes: MeetingType[];
  selectedType: MeetingType | null;
  onSelectType: (type: MeetingType) => void;
}

const meetingTypeConfig: Record<MeetingType, { icon: React.ReactNode; label: string; description: string }> = {
  'in-person': {
    icon: <MapPin className="w-5 h-5" />,
    label: 'In-Person',
    description: 'Meet at the location',
  },
  'video': {
    icon: <Video className="w-5 h-5" />,
    label: 'Video Call',
    description: 'Join via Zoom/Meet',
  },
  'phone': {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone Call',
    description: "We'll call you",
  },
};

export function MeetingTypeSelector({
  allowedTypes,
  selectedType,
  onSelectType,
}: MeetingTypeSelectorProps) {
  return (
    <div className="bg-white/5 rounded-xl p-4 space-y-3 animate-fade-in">
      <span className="text-sm font-medium text-white/80">Meeting Type</span>

      <div className="space-y-2">
        {allowedTypes.map(type => {
          const config = meetingTypeConfig[type];
          const isSelected = selectedType === type;

          return (
            <button
              key={type}
              onClick={() => onSelectType(type)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                isSelected
                  ? 'bg-[#007BE5] text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-white/10'}`}>
                {config.icon}
              </div>
              <div className="text-left">
                <p className="font-medium text-sm">{config.label}</p>
                <p className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                  {config.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
