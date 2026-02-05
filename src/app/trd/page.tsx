'use client';

import Link from 'next/link';
import { ArrowLeft, Database, Server, Shield, Zap, GitBranch, Bell, Clock, Code, Layers, Lock, Globe, Webhook, Calendar } from 'lucide-react';

export default function TRDPage() {
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
          <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full mb-4">
            Technical Requirements Document
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Interview Scheduling - Technical Spec
          </h1>
          <p className="text-gray-400 text-lg">
            Technical architecture, database design, and implementation details for the scheduling feature.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="/prd"
              className="text-sm text-[#007BE5] hover:underline"
            >
              View PRD
            </Link>
            <span className="text-gray-600">|</span>
            <span className="text-sm text-gray-500">Last updated: February 2025</span>
          </div>
        </div>

        {/* Document Content */}
        <div className="space-y-12">
          {/* Architecture Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Layers className="w-4 h-4 text-[#007BE5]" />
              </div>
              Architecture Overview
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <p className="text-gray-300">
                The scheduling feature follows a serverless architecture leveraging Supabase for backend services.
              </p>

              {/* Architecture Diagram */}
              <div className="bg-[#0a0f1a] rounded-xl p-6 border border-white/5">
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  {/* Frontend Layer */}
                  <div className="col-span-3 p-4 bg-[#007BE5]/10 rounded-lg border border-[#007BE5]/30">
                    <p className="font-medium text-[#007BE5] mb-2">Frontend (Next.js)</p>
                    <div className="flex justify-center gap-4 text-xs text-gray-400">
                      <span>Chat Widget</span>
                      <span>Manager Dashboard</span>
                      <span>Candidate Portal</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-3 flex justify-center">
                    <div className="w-0.5 h-6 bg-white/20" />
                  </div>

                  {/* API Layer */}
                  <div className="col-span-3 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                    <p className="font-medium text-green-400 mb-2">API Layer</p>
                    <div className="flex justify-center gap-4 text-xs text-gray-400">
                      <span>Supabase Edge Functions</span>
                      <span>REST API</span>
                      <span>Realtime Subscriptions</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-3 flex justify-center">
                    <div className="w-0.5 h-6 bg-white/20" />
                  </div>

                  {/* Data Layer */}
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
                    <p className="font-medium text-purple-400 mb-1">PostgreSQL</p>
                    <p className="text-xs text-gray-400">Primary DB</p>
                  </div>
                  <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                    <p className="font-medium text-yellow-400 mb-1">Redis</p>
                    <p className="text-xs text-gray-400">Slot Locking</p>
                  </div>
                  <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/30">
                    <p className="font-medium text-orange-400 mb-1">Storage</p>
                    <p className="text-xs text-gray-400">Attachments</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Tech Stack</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>- Next.js 14+ (App Router)</li>
                    <li>- TypeScript</li>
                    <li>- Supabase (Auth, Database, Realtime)</li>
                    <li>- Tailwind CSS</li>
                    <li>- Vercel (Hosting)</li>
                  </ul>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Key Principles</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>- Serverless-first architecture</li>
                    <li>- Real-time updates via WebSocket</li>
                    <li>- Row-level security (RLS)</li>
                    <li>- Optimistic UI updates</li>
                    <li>- Mobile-first responsive design</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Database Schema */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Database className="w-4 h-4 text-purple-400" />
              </div>
              Database Schema
            </h2>
            <div className="space-y-6">
              {/* Availability Table */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                  <h3 className="font-semibold text-white font-mono">manager_availability</h3>
                  <p className="text-sm text-gray-400">Recurring weekly availability blocks</p>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-gray-400 border-b border-white/10">
                          <th className="pb-3 font-medium">Column</th>
                          <th className="pb-3 font-medium">Type</th>
                          <th className="pb-3 font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        {[
                          ['id', 'uuid', 'Primary key'],
                          ['manager_id', 'uuid (FK)', 'Reference to users table'],
                          ['day_of_week', 'smallint', '0-6 (Sunday-Saturday)'],
                          ['start_time', 'time', 'Block start time'],
                          ['end_time', 'time', 'Block end time'],
                          ['is_active', 'boolean', 'Soft delete flag'],
                          ['created_at', 'timestamptz', 'Creation timestamp'],
                        ].map(([col, type, desc], i) => (
                          <tr key={i} className="border-b border-white/5">
                            <td className="py-3 font-mono text-[#007BE5]">{col}</td>
                            <td className="py-3 font-mono text-yellow-400">{type}</td>
                            <td className="py-3 text-gray-400">{desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Interviews Table */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                  <h3 className="font-semibold text-white font-mono">interviews</h3>
                  <p className="text-sm text-gray-400">Scheduled interview records</p>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-gray-400 border-b border-white/10">
                          <th className="pb-3 font-medium">Column</th>
                          <th className="pb-3 font-medium">Type</th>
                          <th className="pb-3 font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        {[
                          ['id', 'uuid', 'Primary key'],
                          ['manager_id', 'uuid (FK)', 'Hiring manager'],
                          ['candidate_id', 'uuid (FK)', 'Candidate reference'],
                          ['job_posting_id', 'uuid (FK)', 'Associated job posting'],
                          ['scheduled_date', 'date', 'Interview date'],
                          ['start_time', 'time', 'Start time'],
                          ['end_time', 'time', 'End time'],
                          ['meeting_type', 'enum', 'in_person | video | phone'],
                          ['status', 'enum', 'scheduled | confirmed | cancelled | completed'],
                          ['location', 'text', 'Physical address (if in-person)'],
                          ['video_link', 'text', 'Meeting URL (if video)'],
                          ['phone_number', 'text', 'Contact number (if phone)'],
                          ['candidate_phone', 'text', 'Candidate phone (for phone interviews)'],
                          ['notes', 'text', 'Internal notes'],
                          ['cancelled_at', 'timestamptz', 'Cancellation timestamp'],
                          ['cancelled_by', 'uuid (FK)', 'Who cancelled'],
                          ['cancellation_reason', 'text', 'Reason for cancellation'],
                          ['created_at', 'timestamptz', 'Creation timestamp'],
                          ['updated_at', 'timestamptz', 'Last update'],
                        ].map(([col, type, desc], i) => (
                          <tr key={i} className="border-b border-white/5">
                            <td className="py-3 font-mono text-[#007BE5]">{col}</td>
                            <td className="py-3 font-mono text-yellow-400">{type}</td>
                            <td className="py-3 text-gray-400">{desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Meeting Preferences Table */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                  <h3 className="font-semibold text-white font-mono">meeting_preferences</h3>
                  <p className="text-sm text-gray-400">Manager default meeting settings</p>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-gray-400 border-b border-white/10">
                          <th className="pb-3 font-medium">Column</th>
                          <th className="pb-3 font-medium">Type</th>
                          <th className="pb-3 font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        {[
                          ['id', 'uuid', 'Primary key'],
                          ['manager_id', 'uuid (FK)', 'Manager reference (unique)'],
                          ['default_meeting_type', 'enum', 'Default for new interviews'],
                          ['default_location', 'text', 'Default in-person address'],
                          ['default_video_link', 'text', 'Default video meeting URL'],
                          ['default_phone', 'text', 'Manager phone number'],
                          ['slot_duration_minutes', 'integer', 'Interview length (default: 30)'],
                          ['buffer_minutes', 'integer', 'Buffer between interviews'],
                          ['created_at', 'timestamptz', 'Creation timestamp'],
                          ['updated_at', 'timestamptz', 'Last update'],
                        ].map(([col, type, desc], i) => (
                          <tr key={i} className="border-b border-white/5">
                            <td className="py-3 font-mono text-[#007BE5]">{col}</td>
                            <td className="py-3 font-mono text-yellow-400">{type}</td>
                            <td className="py-3 text-gray-400">{desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Calendar Connections Table */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                  <h3 className="font-semibold text-white font-mono">calendar_connections</h3>
                  <p className="text-sm text-gray-400">External calendar OAuth connections</p>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-gray-400 border-b border-white/10">
                          <th className="pb-3 font-medium">Column</th>
                          <th className="pb-3 font-medium">Type</th>
                          <th className="pb-3 font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        {[
                          ['id', 'uuid', 'Primary key'],
                          ['manager_id', 'uuid (FK)', 'Manager reference'],
                          ['provider', 'enum', 'google | outlook'],
                          ['provider_account_id', 'text', 'External account identifier'],
                          ['email', 'text', 'Connected email address'],
                          ['access_token', 'text', 'Encrypted OAuth access token'],
                          ['refresh_token', 'text', 'Encrypted OAuth refresh token'],
                          ['token_expires_at', 'timestamptz', 'Token expiration'],
                          ['calendar_id', 'text', 'Selected calendar ID'],
                          ['sync_enabled', 'boolean', 'Active sync flag'],
                          ['last_synced_at', 'timestamptz', 'Last successful sync'],
                          ['created_at', 'timestamptz', 'Connection created'],
                        ].map(([col, type, desc], i) => (
                          <tr key={i} className="border-b border-white/5">
                            <td className="py-3 font-mono text-[#007BE5]">{col}</td>
                            <td className="py-3 font-mono text-yellow-400">{type}</td>
                            <td className="py-3 text-gray-400">{desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* API Endpoints */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Server className="w-4 h-4 text-green-400" />
              </div>
              API Endpoints
            </h2>
            <div className="space-y-4">
              {/* Availability Endpoints */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-4">Availability</h3>
                <div className="space-y-3">
                  {[
                    { method: 'GET', path: '/api/availability/:managerId', desc: 'Get manager availability blocks' },
                    { method: 'POST', path: '/api/availability', desc: 'Create availability block' },
                    { method: 'DELETE', path: '/api/availability/:id', desc: 'Remove availability block' },
                    { method: 'GET', path: '/api/availability/:managerId/slots', desc: 'Get available time slots for booking' },
                  ].map((endpoint, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <span className={`px-2 py-1 rounded text-xs font-mono font-medium ${
                        endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                        endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <div>
                        <p className="font-mono text-sm text-white">{endpoint.path}</p>
                        <p className="text-xs text-gray-400">{endpoint.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interview Endpoints */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-4">Interviews</h3>
                <div className="space-y-3">
                  {[
                    { method: 'GET', path: '/api/interviews', desc: 'List interviews (filterable by status, date range)' },
                    { method: 'GET', path: '/api/interviews/:id', desc: 'Get interview details' },
                    { method: 'POST', path: '/api/interviews', desc: 'Book new interview' },
                    { method: 'PATCH', path: '/api/interviews/:id', desc: 'Update interview (reschedule, change type)' },
                    { method: 'POST', path: '/api/interviews/:id/confirm', desc: 'Confirm interview' },
                    { method: 'POST', path: '/api/interviews/:id/cancel', desc: 'Cancel interview' },
                  ].map((endpoint, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <span className={`px-2 py-1 rounded text-xs font-mono font-medium ${
                        endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                        endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                        endpoint.method === 'PATCH' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <div>
                        <p className="font-mono text-sm text-white">{endpoint.path}</p>
                        <p className="text-xs text-gray-400">{endpoint.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar Endpoints */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-4">Calendar Integration</h3>
                <div className="space-y-3">
                  {[
                    { method: 'GET', path: '/api/calendar/connect/:provider', desc: 'Initiate OAuth flow (google/outlook)' },
                    { method: 'GET', path: '/api/calendar/callback', desc: 'OAuth callback handler' },
                    { method: 'DELETE', path: '/api/calendar/disconnect', desc: 'Disconnect calendar' },
                    { method: 'POST', path: '/api/calendar/sync', desc: 'Trigger manual sync' },
                    { method: 'GET', path: '/api/calendar/events', desc: 'Get external calendar events (for conflict check)' },
                  ].map((endpoint, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <span className={`px-2 py-1 rounded text-xs font-mono font-medium ${
                        endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                        endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <div>
                        <p className="font-mono text-sm text-white">{endpoint.path}</p>
                        <p className="text-xs text-gray-400">{endpoint.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Real-time Subscriptions */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-yellow-400" />
              </div>
              Real-time Subscriptions
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                Using Supabase Realtime to push instant updates to connected clients.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { channel: 'interviews:manager_id=eq.{id}', desc: 'Manager receives updates for their interviews' },
                  { channel: 'interviews:candidate_id=eq.{id}', desc: 'Candidate receives their interview updates' },
                  { channel: 'availability:manager_id=eq.{id}', desc: 'Real-time availability changes (for booking widget)' },
                ].map((sub, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg">
                    <p className="font-mono text-sm text-yellow-400 mb-2">{sub.channel}</p>
                    <p className="text-xs text-gray-400">{sub.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p className="text-sm text-yellow-300">
                  <strong>Slot Locking:</strong> When a candidate starts booking a slot, a 5-minute lock is placed via Redis to prevent race conditions. Lock is released on booking completion or timeout.
                </p>
              </div>
            </div>
          </section>

          {/* Calendar Integration */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-[#007BE5]" />
              </div>
              Calendar Integration
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    Google Calendar
                  </h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>- OAuth 2.0 with PKCE</li>
                    <li>- Scopes: calendar.events, calendar.readonly</li>
                    <li>- Webhook push notifications for changes</li>
                    <li>- Batch API for bulk event creation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#0078D4] rounded flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                        <path d="M21.17 2.06A2.006 2.006 0 0019.17 0H4.83C3.27 0 2 1.27 2 2.83v18.34C2 22.73 3.27 24 4.83 24h14.34c1.56 0 2.83-1.27 2.83-2.83V4.06c0-.75-.3-1.47-.83-2z"/>
                      </svg>
                    </div>
                    Microsoft Outlook
                  </h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>- Microsoft Graph API</li>
                    <li>- Scopes: Calendars.ReadWrite</li>
                    <li>- Delta sync for efficient updates</li>
                    <li>- Change notifications subscription</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="font-medium text-white mb-3">Sync Logic</h4>
                <div className="bg-[#0a0f1a] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-300">{`// Pseudo-code for calendar sync
async function syncInterview(interview) {
  const connection = await getCalendarConnection(interview.manager_id);

  if (!connection) return;

  const event = {
    summary: \`Interview: \${interview.candidate_name}\`,
    start: { dateTime: interview.start_datetime },
    end: { dateTime: interview.end_datetime },
    location: getLocation(interview),
    attendees: [{ email: interview.candidate_email }],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 1440 }, // 24h
        { method: 'popup', minutes: 60 },   // 1h
      ]
    }
  };

  if (interview.external_event_id) {
    await updateCalendarEvent(connection, interview.external_event_id, event);
  } else {
    const created = await createCalendarEvent(connection, event);
    await updateInterview(interview.id, { external_event_id: created.id });
  }
}`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Notifications */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Bell className="w-4 h-4 text-[#007BE5]" />
              </div>
              Notifications
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 border-b border-white/10">
                      <th className="pb-3 font-medium">Event</th>
                      <th className="pb-3 font-medium">Recipient</th>
                      <th className="pb-3 font-medium">Channels</th>
                      <th className="pb-3 font-medium">Timing</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {[
                      ['Interview Booked', 'Both', 'Email, SMS', 'Immediate'],
                      ['Interview Confirmed', 'Candidate', 'Email', 'Immediate'],
                      ['Interview Rescheduled', 'Both', 'Email, SMS', 'Immediate'],
                      ['Interview Cancelled', 'Both', 'Email, SMS', 'Immediate'],
                      ['Reminder (24h)', 'Both', 'Email', '24h before'],
                      ['Reminder (1h)', 'Both', 'SMS, Push', '1h before'],
                      ['No-show Alert', 'Manager', 'Email', '15min after start'],
                    ].map(([event, recipient, channels, timing], i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="py-3 text-white">{event}</td>
                        <td className="py-3">{recipient}</td>
                        <td className="py-3">{channels}</td>
                        <td className="py-3 text-gray-400">{timing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Implementation:</strong> Notifications are handled via Supabase Edge Functions triggered by database webhooks. Email via Resend, SMS via Twilio.
                </p>
              </div>
            </div>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-red-400" />
              </div>
              Security Considerations
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Lock, title: 'Row Level Security', desc: 'Managers can only access their own availability and interviews. Candidates can only view/modify their own bookings.' },
                  { icon: Shield, title: 'Token Encryption', desc: 'OAuth tokens stored encrypted at rest using Supabase Vault. Refresh tokens rotated on each use.' },
                  { icon: Globe, title: 'Rate Limiting', desc: 'API endpoints rate-limited to prevent abuse. Booking endpoints: 10/min per IP. Auth endpoints: 5/min per IP.' },
                  { icon: Webhook, title: 'Webhook Validation', desc: 'All incoming webhooks (calendar, payment) validated via HMAC signatures before processing.' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="w-4 h-4 text-red-400" />
                      <h4 className="font-medium text-white">{item.title}</h4>
                    </div>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <h4 className="font-medium text-red-300 mb-2">RLS Policy Example</h4>
                <div className="bg-[#0a0f1a] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-300">{`-- Managers can only see their own interviews
CREATE POLICY "Managers view own interviews" ON interviews
  FOR SELECT
  USING (auth.uid() = manager_id);

-- Candidates can view interviews where they are the candidate
CREATE POLICY "Candidates view own interviews" ON interviews
  FOR SELECT
  USING (auth.uid() = candidate_id);

-- Only managers can update interview status
CREATE POLICY "Managers update interviews" ON interviews
  FOR UPDATE
  USING (auth.uid() = manager_id);`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Time Zone Handling */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Clock className="w-4 h-4 text-[#007BE5]" />
              </div>
              Time Zone Handling
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Storage</h4>
                  <p className="text-sm text-gray-400">
                    All times stored in UTC (timestamptz). Manager timezone stored in preferences.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Display</h4>
                  <p className="text-sm text-gray-400">
                    Convert to user&apos;s local timezone on frontend. Show timezone abbreviation.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Availability</h4>
                  <p className="text-sm text-gray-400">
                    Manager sets availability in their timezone. Stored relative to their TZ.
                  </p>
                </div>
              </div>
              <div className="bg-[#0a0f1a] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">{`// Convert availability to candidate's timezone
function getAvailableSlotsForCandidate(
  availability: AvailabilityBlock[],
  managerTz: string,
  candidateTz: string
): TimeSlot[] {
  return availability.flatMap(block => {
    // Convert manager's availability to UTC, then to candidate's TZ
    const startUtc = zonedTimeToUtc(block.startTime, managerTz);
    const endUtc = zonedTimeToUtc(block.endTime, managerTz);

    return generateSlots(startUtc, endUtc).map(slot => ({
      ...slot,
      displayTime: utcToZonedTime(slot.startUtc, candidateTz)
    }));
  });
}`}</pre>
              </div>
            </div>
          </section>

          {/* Migration Strategy */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <GitBranch className="w-4 h-4 text-[#007BE5]" />
              </div>
              Implementation Phases
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="space-y-6">
                {[
                  {
                    phase: 'Phase 1',
                    title: 'Core Scheduling',
                    items: ['Database schema & migrations', 'Availability CRUD', 'Basic interview booking', 'Manager dashboard'],
                  },
                  {
                    phase: 'Phase 2',
                    title: 'Candidate Experience',
                    items: ['Chat widget component', 'Time slot picker', 'Booking confirmation flow', 'Email notifications'],
                  },
                  {
                    phase: 'Phase 3',
                    title: 'Calendar Integration',
                    items: ['Google Calendar OAuth', 'Outlook Calendar OAuth', 'Two-way sync', 'Conflict detection'],
                  },
                  {
                    phase: 'Phase 4',
                    title: 'Advanced Features',
                    items: ['SMS notifications', 'Reminder automation', 'Analytics dashboard', 'Bulk operations'],
                  },
                ].map((phase, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#007BE5] flex items-center justify-center text-white font-semibold">
                        {i + 1}
                      </div>
                      {i < 3 && <div className="w-0.5 h-full bg-white/10 mt-2" />}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-[#007BE5] font-medium">{phase.phase}</span>
                      </div>
                      <h4 className="font-medium text-white mb-2">{phase.title}</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <p className="text-gray-400 mb-6">
              Ready to see the prototype in action?
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
            This is a technical specification document. Implementation details may evolve based on requirements.
          </p>
        </div>
      </div>
    </main>
  );
}
