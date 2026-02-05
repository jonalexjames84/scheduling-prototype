'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, MessageCircle, Users, Clock, Video, Phone, MapPin, CheckCircle, Settings, RefreshCw } from 'lucide-react';

export default function PRDPage() {
  return (
    <main className="min-h-screen bg-[#0f1629] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#007BE5] hover:text-[#007BE5]/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Demo
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-[#007BE5]/20 text-[#007BE5] text-sm font-medium rounded-full mb-4">
            Product Requirements Document
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Interview Scheduling Feature
          </h1>
          <p className="text-gray-400 text-lg">
            Enable candidates to self-schedule interviews with hiring managers through an embedded chat widget.
          </p>
        </div>

        {/* Document Content */}
        <div className="space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-[#007BE5]" />
              </div>
              Overview
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                The Interview Scheduling feature streamlines the interview booking process by allowing candidates to self-schedule interviews based on hiring manager availability. This reduces back-and-forth communication and accelerates time-to-hire.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <p className="text-2xl font-bold text-[#007BE5]">70%</p>
                  <p className="text-sm text-gray-400">Reduction in scheduling time</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <p className="text-2xl font-bold text-[#007BE5]">24/7</p>
                  <p className="text-sm text-gray-400">Candidate booking availability</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <p className="text-2xl font-bold text-[#007BE5]">0</p>
                  <p className="text-sm text-gray-400">Manual scheduling emails</p>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                <span className="text-red-400 text-lg">!</span>
              </div>
              Problem Statement
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                Currently, scheduling interviews requires multiple touchpoints:
              </p>
              <ul className="space-y-3">
                {[
                  'Hiring managers manually share availability via email or text',
                  'Candidates respond with their preferred times',
                  'Back-and-forth to find mutual availability',
                  'Manual calendar event creation and meeting link sharing',
                  'No centralized view of all scheduled interviews',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-red-400">{i + 1}</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 pt-2">
                This process is time-consuming, error-prone, and creates a poor candidate experience.
              </p>
            </div>
          </section>

          {/* User Personas */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Users className="w-4 h-4 text-[#007BE5]" />
              </div>
              User Personas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#007BE5]/20 flex items-center justify-center">
                    <span className="text-[#007BE5] font-semibold">C</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Candidate</h3>
                    <p className="text-sm text-gray-400">Job Applicant</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  A job seeker who has been invited to interview and needs to schedule a time that works with their current commitments.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-300">Goals:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>- Quickly find an available time slot</li>
                    <li>- Know exactly where/how the interview will happen</li>
                    <li>- Easily reschedule if needed</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-semibold">M</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Hiring Manager</h3>
                    <p className="text-sm text-gray-400">Restaurant Owner/Manager</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  A busy manager who needs to interview candidates but has limited time and wants to avoid scheduling overhead.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-300">Goals:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>- Set availability once, use many times</li>
                    <li>- See all interviews in one place</li>
                    <li>- Easily confirm or reschedule interviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Requirements */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-[#007BE5]" />
              </div>
              Feature Requirements
            </h2>

            {/* Candidate Chat Widget */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-5 h-5 text-[#007BE5]" />
                <h3 className="text-lg font-semibold text-white">Candidate Chat Widget</h3>
              </div>
              <p className="text-gray-400 mb-4">
                A floating chat interface embedded in candidate communications that guides them through scheduling.
              </p>
              <div className="space-y-3">
                {[
                  { title: 'Time Slot Selection', desc: 'Display available slots based on manager availability. Group by date with clear AM/PM formatting.' },
                  { title: 'Meeting Type Display', desc: 'Show the interview format (in-person, video, or phone) set by the hiring manager.' },
                  { title: 'Phone Number Collection', desc: 'For phone interviews, collect candidate phone number before confirmation.' },
                  { title: 'Confirmation Screen', desc: 'Show complete meeting details including date, time, and location/link/number.' },
                  { title: 'Reschedule Option', desc: 'Allow candidates to select a new time if their schedule changes.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Manager Dashboard */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-5 h-5 text-[#007BE5]" />
                <h3 className="text-lg font-semibold text-white">Manager Dashboard</h3>
              </div>
              <p className="text-gray-400 mb-4">
                A comprehensive dashboard for hiring managers to manage their interview scheduling.
              </p>
              <div className="space-y-3">
                {[
                  { title: 'Weekly Availability', desc: 'Set recurring time blocks when available for interviews. Easy add/remove interface.' },
                  { title: 'Calendar View', desc: 'Month view (desktop) or week view (mobile) showing all scheduled interviews.' },
                  { title: 'Interview Management', desc: 'View, confirm, reschedule, or cancel interviews. Change meeting type per interview.' },
                  { title: 'Meeting Settings', desc: 'Configure default meeting type, interview location, video link, and phone number.' },
                  { title: 'Calendar Integration', desc: 'Connect Google or Outlook calendar to sync interviews and avoid double-booking.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Meeting Types */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Video className="w-4 h-4 text-[#007BE5]" />
              </div>
              Meeting Types
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#007BE5]/20 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#007BE5]" />
                </div>
                <h3 className="font-semibold text-white mb-2">In-Person</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Face-to-face interview at the business location.
                </p>
                <div className="text-xs text-gray-500">
                  <p className="font-medium text-gray-400 mb-1">Displays:</p>
                  <p>Full address with directions link</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#007BE5]/20 flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-[#007BE5]" />
                </div>
                <h3 className="font-semibold text-white mb-2">Video Call</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Remote interview via Zoom, Google Meet, etc.
                </p>
                <div className="text-xs text-gray-500">
                  <p className="font-medium text-gray-400 mb-1">Displays:</p>
                  <p>Clickable meeting link</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#007BE5]/20 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#007BE5]" />
                </div>
                <h3 className="font-semibold text-white mb-2">Phone Call</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Quick screening call with the candidate.
                </p>
                <div className="text-xs text-gray-500">
                  <p className="font-medium text-gray-400 mb-1">Displays:</p>
                  <p>Phone number + call expectation</p>
                </div>
              </div>
            </div>
          </section>

          {/* User Flow */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <RefreshCw className="w-4 h-4 text-[#007BE5]" />
              </div>
              User Flows
            </h2>

            {/* Candidate Flow */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-white mb-4">Candidate Booking Flow</h3>
              <div className="flex flex-col md:flex-row items-start gap-4">
                {[
                  { step: '1', title: 'Open Widget', desc: 'Click chat bubble' },
                  { step: '2', title: 'View Greeting', desc: 'See job & company info' },
                  { step: '3', title: 'Select Time', desc: 'Pick available slot' },
                  { step: '4', title: 'Phone (if needed)', desc: 'Enter phone number' },
                  { step: '5', title: 'Confirm', desc: 'Review & book' },
                ].map((item, i, arr) => (
                  <div key={i} className="flex md:flex-col items-center gap-3 md:flex-1">
                    <div className="w-10 h-10 rounded-full bg-[#007BE5] flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="md:text-center">
                      <p className="font-medium text-white text-sm">{item.title}</p>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="hidden md:block flex-1 h-0.5 bg-white/10 mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Manager Flow */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Manager Setup Flow</h3>
              <div className="flex flex-col md:flex-row items-start gap-4">
                {[
                  { step: '1', title: 'Set Availability', desc: 'Weekly time blocks' },
                  { step: '2', title: 'Configure Settings', desc: 'Meeting type & details' },
                  { step: '3', title: 'Connect Calendar', desc: 'Sync with Google/Outlook' },
                  { step: '4', title: 'Manage Interviews', desc: 'Confirm & reschedule' },
                ].map((item, i, arr) => (
                  <div key={i} className="flex md:flex-col items-center gap-3 md:flex-1">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="md:text-center">
                      <p className="font-medium text-white text-sm">{item.title}</p>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="hidden md:block flex-1 h-0.5 bg-white/10 mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Notes */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Clock className="w-4 h-4 text-[#007BE5]" />
              </div>
              Technical Considerations
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Calendar Integration</h4>
                  <p className="text-sm text-gray-400">
                    OAuth 2.0 flow for Google Calendar and Microsoft Graph API for Outlook. Real-time sync to prevent double-booking.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Time Zone Handling</h4>
                  <p className="text-sm text-gray-400">
                    Display times in user&apos;s local timezone. Store all times in UTC. Show timezone indicator for clarity.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Notifications</h4>
                  <p className="text-sm text-gray-400">
                    Email/SMS confirmations, reminders 24h and 1h before, and instant notifications for reschedules/cancellations.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Conflict Prevention</h4>
                  <p className="text-sm text-gray-400">
                    Lock slots during booking to prevent race conditions. Real-time availability updates via WebSocket.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Success Metrics */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              Success Metrics
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-white mb-3">Primary Metrics</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#007BE5]" />
                      Time from invite to scheduled interview
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#007BE5]" />
                      Interview completion rate
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#007BE5]" />
                      No-show rate
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-3">Secondary Metrics</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      Candidate satisfaction score
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      Manager time saved per hire
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      Reschedule rate
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <p className="text-gray-400 mb-6">
              Ready to see this feature in action?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/candidate"
                className="px-6 py-3 bg-[#007BE5] text-white font-medium rounded-xl hover:bg-[#007BE5]/90 transition-colors"
              >
                Try Candidate Demo
              </Link>
              <Link
                href="/manager"
                className="px-6 py-3 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors"
              >
                Open Manager Dashboard
              </Link>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            This is a prototype PRD. Actual implementation may vary based on technical constraints and user research.
          </p>
        </div>
      </div>
    </main>
  );
}
