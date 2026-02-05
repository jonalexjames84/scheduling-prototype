'use client';

import { useState } from 'react';
import { useScheduling } from '@/context/SchedulingContext';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { MapPin, Video, Phone, Clock, Link2, Check, Calendar, X, Loader2 } from 'lucide-react';
import { MeetingType } from '@/lib/types';

export default function SettingsPage() {
  const { meetingPreferences, updateMeetingPreferences } = useScheduling();
  const [formData, setFormData] = useState({
    defaultLocation: meetingPreferences.defaultLocation,
    videoLink: meetingPreferences.videoLink,
    phoneNumber: meetingPreferences.phoneNumber,
    slotDuration: meetingPreferences.slotDuration,
    meetingType: meetingPreferences.meetingType,
  });
  const [saved, setSaved] = useState(false);

  // Calendar connection states
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [calendarStep, setCalendarStep] = useState<'select' | 'connecting' | 'permissions' | 'success'>('select');
  const [isCalendarConnected, setIsCalendarConnected] = useState(false);
  const [connectedEmail, setConnectedEmail] = useState('');

  const handleSave = () => {
    updateMeetingPreferences(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const selectMeetingType = (type: MeetingType) => {
    setFormData(prev => ({ ...prev, meetingType: type }));
  };

  const startCalendarConnection = () => {
    setShowCalendarModal(true);
    setCalendarStep('select');
  };

  const selectCalendarProvider = () => {
    setCalendarStep('connecting');
    // Simulate OAuth redirect
    setTimeout(() => {
      setCalendarStep('permissions');
    }, 1500);
  };

  const grantPermissions = () => {
    setCalendarStep('connecting');
    // Simulate permission grant and sync
    setTimeout(() => {
      setConnectedEmail('manager@restaurant.com');
      setIsCalendarConnected(true);
      setCalendarStep('success');
    }, 2000);
  };

  const disconnectCalendar = () => {
    setIsCalendarConnected(false);
    setConnectedEmail('');
  };

  const closeModal = () => {
    setShowCalendarModal(false);
    setCalendarStep('select');
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto px-4 sm:px-0">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">Meeting Settings</h1>
        <p className="text-sm sm:text-base text-gray-400">Configure your interview preferences</p>
      </div>

      {/* Interview Type */}
      <Card>
        <CardHeader>
          <h2 className="font-semibold text-white">Interview Type</h2>
          <p className="text-sm text-gray-400">How will you conduct interviews?</p>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { type: 'in-person' as MeetingType, icon: MapPin, label: 'In-Person', desc: 'Meet at your location' },
            { type: 'video' as MeetingType, icon: Video, label: 'Video Call', desc: 'Zoom, Google Meet, etc.' },
            { type: 'phone' as MeetingType, icon: Phone, label: 'Phone Call', desc: 'Call the candidate' },
          ].map(({ type, icon: Icon, label, desc }) => (
            <button
              key={type}
              onClick={() => selectMeetingType(type)}
              className={`w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-colors ${
                formData.meetingType === type
                  ? 'bg-[#007BE5]/20 border border-[#007BE5]/30'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <div className={`p-2 rounded-lg flex-shrink-0 ${
                formData.meetingType === type ? 'bg-[#007BE5]/30' : 'bg-white/10'
              }`}>
                <Icon className={`w-5 h-5 ${
                  formData.meetingType === type ? 'text-[#007BE5]' : 'text-gray-400'
                }`} />
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="font-medium text-white">{label}</p>
                <p className="text-xs sm:text-sm text-gray-400 truncate">{desc}</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                formData.meetingType === type
                  ? 'bg-[#007BE5] border-[#007BE5]'
                  : 'border-gray-500'
              }`}>
                {formData.meetingType === type && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Meeting Details - Show relevant fields based on type */}
      <Card>
        <CardHeader>
          <h2 className="font-semibold text-white">Meeting Details</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Location - shown for in-person */}
          {formData.meetingType === 'in-person' && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <label className="text-sm font-medium text-gray-300">Interview Location</label>
              </div>
              <Textarea
                value={formData.defaultLocation}
                onChange={(e) => setFormData(prev => ({ ...prev, defaultLocation: e.target.value }))}
                placeholder="Enter your interview location address"
                rows={2}
              />
            </div>
          )}

          {/* Video Link - shown for video */}
          {formData.meetingType === 'video' && (
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
          )}

          {/* Phone Number - shown for phone */}
          {formData.meetingType === 'phone' && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <label className="text-sm font-medium text-gray-300">Your Phone Number</label>
              </div>
              <Input
                value={formData.phoneNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                placeholder="(555) 123-4567"
              />
              <p className="text-xs text-gray-500 mt-1">This is the number you&apos;ll call candidates from</p>
            </div>
          )}

          {/* Slot Duration - always shown */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <label className="text-sm font-medium text-gray-300">Interview Duration</label>
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

      {/* Calendar Sync */}
      <Card>
        <CardHeader>
          <h2 className="font-semibold text-white">Calendar Sync</h2>
          <p className="text-sm text-gray-400">Connect your calendar to avoid double-booking</p>
        </CardHeader>
        <CardContent>
          {isCalendarConnected ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Google Calendar Connected</p>
                    <p className="text-sm text-gray-400">{connectedEmail}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={disconnectCalendar}>
                  Disconnect
                </Button>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-sm text-gray-300 mb-2">Sync Status</p>
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <Check className="w-4 h-4" />
                  <span>Interviews will be added to your calendar automatically</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Connect Calendar</p>
                  <p className="text-sm text-gray-400">Sync interviews automatically</p>
                </div>
              </div>
              <Button onClick={startCalendarConnection} className="w-full sm:w-auto">
                Connect
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pb-6">
        <Button onClick={handleSave} className="w-full sm:w-auto">
          {saved ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Saved!
            </>
          ) : (
            'Save Settings'
          )}
        </Button>
        <span className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
          Changes are stored in memory only (prototype)
        </span>
      </div>

      {/* Calendar Connection Modal */}
      {showCalendarModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0f1629] border border-white/10 rounded-2xl w-full max-w-md overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="font-semibold text-white">Connect Calendar</h3>
              <button onClick={closeModal} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {calendarStep === 'select' && (
                <div className="space-y-4">
                  <p className="text-gray-400 text-sm">Choose your calendar provider to sync interviews automatically.</p>

                  <button
                    onClick={selectCalendarProvider}
                    className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium text-white">Google Calendar</p>
                      <p className="text-sm text-gray-400">Connect with your Google account</p>
                    </div>
                  </button>

                  <button
                    onClick={selectCalendarProvider}
                    className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#0078D4] rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                        <path d="M21.17 2.06A2.006 2.006 0 0019.17 0H4.83C3.27 0 2 1.27 2 2.83v18.34C2 22.73 3.27 24 4.83 24h14.34c1.56 0 2.83-1.27 2.83-2.83V4.06c0-.75-.3-1.47-.83-2zM14 5h5v14h-5V5zm-2 14H5V5h7v14z"/>
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium text-white">Outlook Calendar</p>
                      <p className="text-sm text-gray-400">Connect with Microsoft 365</p>
                    </div>
                  </button>
                </div>
              )}

              {calendarStep === 'connecting' && (
                <div className="py-8 text-center">
                  <Loader2 className="w-12 h-12 text-[#007BE5] mx-auto mb-4 animate-spin" />
                  <p className="text-white font-medium">Connecting to Google Calendar...</p>
                  <p className="text-sm text-gray-400 mt-2">Please wait while we set up the connection</p>
                </div>
              )}

              {calendarStep === 'permissions' && (
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[#007BE5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-[#007BE5]" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Allow Calendar Access</h4>
                    <p className="text-sm text-gray-400 mt-2">SWOB Scheduling needs permission to:</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <Check className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-white">View your calendar</p>
                        <p className="text-xs text-gray-400">Check for conflicts with your existing events</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <Check className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-white">Create calendar events</p>
                        <p className="text-xs text-gray-400">Add scheduled interviews to your calendar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <Check className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-white">Send meeting invites</p>
                        <p className="text-xs text-gray-400">Automatically invite candidates to interviews</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-4">
                    <Button onClick={grantPermissions} className="w-full">
                      Allow Access
                    </Button>
                    <Button variant="ghost" onClick={closeModal} className="w-full">
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              {calendarStep === 'success' && (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Calendar Connected!</h4>
                  <p className="text-sm text-gray-400 mb-6">
                    Your Google Calendar is now synced. Interviews will automatically appear on your calendar.
                  </p>
                  <Button onClick={closeModal} className="w-full">
                    Done
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
