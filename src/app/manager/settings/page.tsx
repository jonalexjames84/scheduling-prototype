'use client';

import { useState } from 'react';
import { useScheduling } from '@/context/SchedulingContext';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { MapPin, Video, Phone, Clock, Link2, Check, Calendar } from 'lucide-react';
import { MeetingType } from '@/lib/types';

export default function SettingsPage() {
  const { meetingPreferences, updateMeetingPreferences } = useScheduling();
  const [formData, setFormData] = useState({
    defaultLocation: meetingPreferences.defaultLocation,
    videoLink: meetingPreferences.videoLink,
    phoneNumber: meetingPreferences.phoneNumber,
    slotDuration: meetingPreferences.slotDuration,
    allowedTypes: [...meetingPreferences.allowedTypes],
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateMeetingPreferences(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleMeetingType = (type: MeetingType) => {
    setFormData(prev => ({
      ...prev,
      allowedTypes: prev.allowedTypes.includes(type)
        ? prev.allowedTypes.filter(t => t !== type)
        : [...prev.allowedTypes, type],
    }));
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Meeting Settings</h1>
        <p className="text-gray-400">Configure your meeting preferences</p>
      </div>

      {/* Allowed Meeting Types */}
      <Card>
        <CardHeader>
          <h2 className="font-semibold text-white">Allowed Meeting Types</h2>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { type: 'in-person' as MeetingType, icon: MapPin, label: 'In-Person', desc: 'Meet at a physical location' },
            { type: 'video' as MeetingType, icon: Video, label: 'Video Call', desc: 'Meet via Zoom, Google Meet, etc.' },
            { type: 'phone' as MeetingType, icon: Phone, label: 'Phone Call', desc: 'Conduct interview over the phone' },
          ].map(({ type, icon: Icon, label, desc }) => (
            <button
              key={type}
              onClick={() => toggleMeetingType(type)}
              className={`w-full flex items-center gap-4 p-4 rounded-lg transition-colors ${
                formData.allowedTypes.includes(type)
                  ? 'bg-[#007BE5]/20 border border-[#007BE5]/30'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <div className={`p-2 rounded-lg ${
                formData.allowedTypes.includes(type) ? 'bg-[#007BE5]/30' : 'bg-white/10'
              }`}>
                <Icon className={`w-5 h-5 ${
                  formData.allowedTypes.includes(type) ? 'text-[#007BE5]' : 'text-gray-400'
                }`} />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-white">{label}</p>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                formData.allowedTypes.includes(type)
                  ? 'bg-[#007BE5] border-[#007BE5]'
                  : 'border-gray-500'
              }`}>
                {formData.allowedTypes.includes(type) && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Meeting Details */}
      <Card>
        <CardHeader>
          <h2 className="font-semibold text-white">Meeting Details</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Location */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <label className="text-sm font-medium text-gray-300">Default Location</label>
            </div>
            <Textarea
              value={formData.defaultLocation}
              onChange={(e) => setFormData(prev => ({ ...prev, defaultLocation: e.target.value }))}
              placeholder="Enter your interview location address"
              rows={2}
            />
          </div>

          {/* Video Link */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link2 className="w-4 h-4 text-gray-400" />
              <label className="text-sm font-medium text-gray-300">Video Meeting Link</label>
            </div>
            <Input
              value={formData.videoLink}
              onChange={(e) => setFormData(prev => ({ ...prev, videoLink: e.target.value }))}
              placeholder="https://zoom.us/j/..."
            />
          </div>

          {/* Phone Number */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4 text-gray-400" />
              <label className="text-sm font-medium text-gray-300">Phone Number</label>
            </div>
            <Input
              value={formData.phoneNumber}
              onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Slot Duration */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <label className="text-sm font-medium text-gray-300">Slot Duration (minutes)</label>
            </div>
            <select
              value={formData.slotDuration}
              onChange={(e) => setFormData(prev => ({ ...prev, slotDuration: parseInt(e.target.value) }))}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white"
            >
              <option value={15} className="bg-[#0f1629]">15 minutes</option>
              <option value={30} className="bg-[#0f1629]">30 minutes</option>
              <option value={45} className="bg-[#0f1629]">45 minutes</option>
              <option value={60} className="bg-[#0f1629]">60 minutes</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Calendar Sync (Placeholder) */}
      <Card>
        <CardHeader>
          <h2 className="font-semibold text-white">Calendar Sync</h2>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="font-medium text-white">Google Calendar</p>
                <p className="text-sm text-gray-400">Sync interviews with your calendar</p>
              </div>
            </div>
            <Button variant="secondary" disabled>
              Connect
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Calendar sync is a placeholder feature in this prototype.
          </p>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex items-center gap-4">
        <Button onClick={handleSave}>
          {saved ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Saved!
            </>
          ) : (
            'Save Settings'
          )}
        </Button>
        <span className="text-sm text-gray-500">
          Changes are stored in memory only (prototype)
        </span>
      </div>
    </div>
  );
}
