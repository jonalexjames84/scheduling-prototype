'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  Database,
  Server,
  Shield,
  Zap,
  GitBranch,
  Bell,
  Clock,
  Layers,
  Lock,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  UserCheck,
  Settings,
  Scale,
} from 'lucide-react';

export default function ShiftSwapTRDPage() {
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
          <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full mb-4">
            Technical Requirements Document
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Shift Swapping - Technical Spec
          </h1>
          <p className="text-gray-400 text-lg">
            Database design, business rule engine, state machine, and API architecture for the shift swapping feature — with solutions for every edge case.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="/shift-swap-prd"
              className="text-sm text-orange-400 hover:underline"
            >
              View Shift Swap PRD
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/trd"
              className="text-sm text-green-400 hover:underline"
            >
              View Interview Scheduling TRD
            </Link>
            <span className="text-gray-600">|</span>
            <span className="text-sm text-gray-500">February 2025</span>
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
                The shift swapping system extends the existing scheduling architecture with a business rules engine, eligibility service, and swap state machine.
              </p>

              {/* Architecture Diagram */}
              <div className="bg-[#0a0f1a] rounded-xl p-6 border border-white/5">
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  {/* Frontend Layer */}
                  <div className="col-span-3 p-4 bg-orange-500/10 rounded-lg border border-orange-500/30">
                    <p className="font-medium text-orange-400 mb-2">Frontend (Next.js)</p>
                    <div className="flex justify-center gap-4 text-xs text-gray-400">
                      <span>Employee Swap UI</span>
                      <span>Manager Approval Queue</span>
                      <span>Schedule Board</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-3 flex justify-center">
                    <div className="w-0.5 h-6 bg-white/20" />
                  </div>

                  {/* Business Logic Layer */}
                  <div className="col-span-3 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                    <p className="font-medium text-yellow-400 mb-2">Business Rules Engine</p>
                    <div className="flex justify-center gap-4 text-xs text-gray-400">
                      <span>Eligibility Service</span>
                      <span>Swap State Machine</span>
                      <span>Compliance Checker</span>
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
                      <span>Edge Functions</span>
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
                    <p className="text-xs text-gray-400">Shifts, Swaps, Rules</p>
                  </div>
                  <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                    <p className="font-medium text-red-400 mb-1">Redis</p>
                    <p className="text-xs text-gray-400">Swap Locks, Queues</p>
                  </div>
                  <div className="p-4 bg-[#007BE5]/10 rounded-lg border border-[#007BE5]/30">
                    <p className="font-medium text-[#007BE5] mb-1">Cron Jobs</p>
                    <p className="text-xs text-gray-400">Deadlines, Escalation</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-medium text-white mb-2">New Infrastructure Required</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>- Business rules engine (Supabase Edge Functions)</li>
                    <li>- Swap state machine with transition guards</li>
                    <li>- Eligibility service (role + cert + hours check)</li>
                    <li>- Scheduled jobs for deadlines/escalation</li>
                    <li>- Crew strength scoring system</li>
                  </ul>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Key Design Decisions</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>- Optimistic locking on swap claims (prevent races)</li>
                    <li>- Event-sourced swap history (full audit trail)</li>
                    <li>- Configurable rules per restaurant (not hardcoded)</li>
                    <li>- Notification batching for manager fatigue</li>
                    <li>- Soft-delete for all entities (never lose data)</li>
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
              {/* Employees Table */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                  <h3 className="font-semibold text-white font-mono">employees</h3>
                  <p className="text-sm text-gray-400">Employee profiles with eligibility tracking</p>
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
                          ['user_id', 'uuid (FK)', 'Reference to auth.users'],
                          ['restaurant_id', 'uuid (FK)', 'Reference to restaurants table'],
                          ['full_name', 'text', 'Employee display name'],
                          ['email', 'text', 'Contact email'],
                          ['phone', 'text', 'Contact phone (for SMS notifications)'],
                          ['status', 'enum', 'active | on_leave | suspended | terminated'],
                          ['hire_date', 'date', 'Date of hire (for tenure calculation)'],
                          ['date_of_birth', 'date', 'For minor labor law compliance'],
                          ['skill_rating', 'enum', 'A | B | C (crew strength scoring)'],
                          ['max_weekly_hours', 'integer', 'Maximum allowed hours per week'],
                          ['swap_eligible', 'boolean', 'Computed: tenure > min_days AND status = active'],
                          ['swap_suspension_until', 'timestamptz', 'If suspended from swaps (no-show penalty)'],
                          ['no_show_count_30d', 'integer', 'Rolling 30-day no-show count'],
                          ['total_swaps_initiated', 'integer', 'Lifetime swap count (pattern detection)'],
                          ['created_at', 'timestamptz', 'Account creation'],
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

              {/* Employee Roles Table */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                  <h3 className="font-semibold text-white font-mono">employee_roles</h3>
                  <p className="text-sm text-gray-400">Maps employees to qualified roles (many-to-many)</p>
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
                          ['employee_id', 'uuid (FK)', 'Reference to employees'],
                          ['role_id', 'uuid (FK)', 'Reference to roles table'],
                          ['proficiency_level', 'enum', 'trainee | proficient | expert'],
                          ['certified_at', 'date', 'When qualified for this role'],
                          ['is_active', 'boolean', 'Currently qualified'],
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

              {/* Certifications Table */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                  <h3 className="font-semibold text-white font-mono">employee_certifications</h3>
                  <p className="text-sm text-gray-400">Tracks required certifications with expiration</p>
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
                          ['employee_id', 'uuid (FK)', 'Reference to employees'],
                          ['certification_type', 'enum', 'food_safety | alcohol_service | manager | first_aid'],
                          ['issued_date', 'date', 'When certification was issued'],
                          ['expiry_date', 'date', 'Expiration (null if no expiry)'],
                          ['is_valid', 'boolean', 'Computed: expiry_date > now()'],
                          ['document_url', 'text', 'Uploaded proof (Supabase Storage)'],
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

              {/* Shifts Table */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                  <h3 className="font-semibold text-white font-mono">shifts</h3>
                  <p className="text-sm text-gray-400">Individual shift assignments from published schedules</p>
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
                          ['schedule_id', 'uuid (FK)', 'Reference to published schedule'],
                          ['restaurant_id', 'uuid (FK)', 'Reference to restaurant'],
                          ['employee_id', 'uuid (FK)', 'Currently assigned employee'],
                          ['original_employee_id', 'uuid (FK)', 'Originally assigned (for audit)'],
                          ['role_id', 'uuid (FK)', 'Required role for this shift'],
                          ['shift_date', 'date', 'Date of the shift'],
                          ['start_time', 'time', 'Shift start'],
                          ['end_time', 'time', 'Shift end'],
                          ['is_locked', 'boolean', 'Manager locked (no swapping allowed)'],
                          ['locked_reason', 'text', 'Why the shift is locked'],
                          ['is_critical', 'boolean', 'Part of high-volume/blackout period'],
                          ['min_skill_rating', 'enum', 'Minimum A | B | C for this shift'],
                          ['status', 'enum', 'assigned | swap_pending | open | completed | no_show'],
                          ['created_at', 'timestamptz', 'Shift creation'],
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

              {/* Swap Requests Table */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                  <h3 className="font-semibold text-white font-mono">swap_requests</h3>
                  <p className="text-sm text-gray-400">Core swap lifecycle tracking (the heart of the system)</p>
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
                          ['restaurant_id', 'uuid (FK)', 'Reference to restaurant'],
                          ['shift_id', 'uuid (FK)', 'The shift being swapped'],
                          ['requester_id', 'uuid (FK)', 'Employee requesting the swap'],
                          ['acceptor_id', 'uuid (FK)', 'Employee accepting (null if open/drop)'],
                          ['swap_type', 'enum', 'direct_trade | shift_drop | shift_pickup'],
                          ['trade_shift_id', 'uuid (FK)', 'If direct trade, the shift offered in return'],
                          ['status', 'enum', 'pending | claimed | pending_approval | approved | rejected | expired | cancelled | completed'],
                          ['requires_approval', 'boolean', 'Whether manager approval is needed'],
                          ['approval_reason', 'text', 'Why approval was required (for transparency)'],
                          ['approved_by', 'uuid (FK)', 'Manager who approved/rejected'],
                          ['approved_at', 'timestamptz', 'When approved/rejected'],
                          ['rejection_reason', 'text', 'If rejected, why'],
                          ['deadline_at', 'timestamptz', 'When this request expires'],
                          ['escalation_level', 'enum', 'normal | urgent | critical | emergency'],
                          ['created_at', 'timestamptz', 'Request creation'],
                          ['updated_at', 'timestamptz', 'Last update'],
                          ['completed_at', 'timestamptz', 'When shift was actually worked'],
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

              {/* Swap Audit Log */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                  <h3 className="font-semibold text-white font-mono">swap_audit_log</h3>
                  <p className="text-sm text-gray-400">Immutable event log for every swap action (event sourcing)</p>
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
                          ['swap_request_id', 'uuid (FK)', 'Reference to swap request'],
                          ['action', 'enum', 'created | claimed | approved | rejected | expired | cancelled | completed | no_show | reverted'],
                          ['actor_id', 'uuid (FK)', 'Who performed the action'],
                          ['actor_type', 'enum', 'employee | manager | system'],
                          ['metadata', 'jsonb', 'Additional context (reason, rule triggered, etc.)'],
                          ['created_at', 'timestamptz', 'When action occurred'],
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

              {/* Restaurant Swap Settings */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                  <h3 className="font-semibold text-white font-mono">swap_settings</h3>
                  <p className="text-sm text-gray-400">Configurable business rules per restaurant</p>
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
                          ['restaurant_id', 'uuid (FK)', 'One per restaurant (unique)'],
                          ['min_tenure_days', 'integer', 'Days before swap eligibility (default: 30)'],
                          ['swap_window_hours', 'integer', 'Hours after schedule publish to allow swaps (0 = unlimited)'],
                          ['min_advance_hours', 'integer', 'Minimum hours before shift to request swap (default: 12)'],
                          ['auto_approve_enabled', 'boolean', 'Enable auto-approval for qualifying swaps'],
                          ['auto_approve_min_hours', 'integer', 'Minimum hours before shift for auto-approve (default: 48)'],
                          ['manager_timeout_hours', 'integer', 'Hours before unanswered approval auto-rejects (default: 12)'],
                          ['manager_timeout_action', 'enum', 'auto_reject | auto_approve (default: auto_reject)'],
                          ['max_swaps_per_week', 'integer', 'Per-employee weekly swap limit (default: 3)'],
                          ['no_show_threshold', 'integer', 'No-shows in 30 days before suspension (default: 2)'],
                          ['no_show_suspension_days', 'integer', 'Days suspended from swaps after threshold (default: 14)'],
                          ['allow_re_swap', 'boolean', 'Can an accepted swap be re-swapped? (default: false)'],
                          ['require_overtime_approval', 'boolean', 'Always require approval if swap creates OT (default: true)'],
                          ['enforce_crew_score', 'boolean', 'Block swaps that drop below min crew score (default: false)'],
                          ['created_at', 'timestamptz', 'Created'],
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
            </div>
          </section>

          {/* Swap State Machine */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <RefreshCw className="w-4 h-4 text-orange-400" />
              </div>
              Swap Request State Machine
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <p className="text-gray-300">
                Every swap request follows a strict state machine. Invalid transitions are blocked at the database level with CHECK constraints.
              </p>

              {/* State Diagram */}
              <div className="bg-[#0a0f1a] rounded-xl p-6 border border-white/5">
                <div className="space-y-3">
                  {[
                    { from: 'PENDING', to: 'CLAIMED', trigger: 'Eligible employee accepts', guard: 'Eligibility check passes', color: 'blue' },
                    { from: 'PENDING', to: 'EXPIRED', trigger: 'Deadline reached, no taker', guard: 'Cron job at deadline_at', color: 'gray' },
                    { from: 'PENDING', to: 'CANCELLED', trigger: 'Requester cancels', guard: 'Before deadline', color: 'gray' },
                    { from: 'CLAIMED', to: 'PENDING_APPROVAL', trigger: 'System evaluates rules', guard: 'Requires manager approval', color: 'yellow' },
                    { from: 'CLAIMED', to: 'APPROVED', trigger: 'System evaluates rules', guard: 'Auto-approve criteria met', color: 'green' },
                    { from: 'PENDING_APPROVAL', to: 'APPROVED', trigger: 'Manager approves', guard: 'Manager action', color: 'green' },
                    { from: 'PENDING_APPROVAL', to: 'REJECTED', trigger: 'Manager rejects', guard: 'Manager provides reason', color: 'red' },
                    { from: 'PENDING_APPROVAL', to: 'REJECTED', trigger: 'Manager timeout', guard: 'manager_timeout_hours exceeded', color: 'red' },
                    { from: 'APPROVED', to: 'COMPLETED', trigger: 'Shift worked successfully', guard: 'Clock-in verified or manual confirm', color: 'green' },
                    { from: 'APPROVED', to: 'NO_SHOW', trigger: 'Acceptor didn\'t show', guard: '15min after shift start, no clock-in', color: 'red' },
                  ].map((transition, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg text-sm">
                      <span className={`px-2 py-1 rounded text-xs font-mono font-medium ${
                        transition.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                        transition.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                        transition.color === 'green' ? 'bg-green-500/20 text-green-400' :
                        transition.color === 'red' ? 'bg-red-500/20 text-red-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {transition.from}
                      </span>
                      <span className="text-gray-500">→</span>
                      <span className={`px-2 py-1 rounded text-xs font-mono font-medium ${
                        transition.to === 'APPROVED' || transition.to === 'COMPLETED' ? 'bg-green-500/20 text-green-400' :
                        transition.to === 'REJECTED' || transition.to === 'NO_SHOW' ? 'bg-red-500/20 text-red-400' :
                        transition.to === 'PENDING_APPROVAL' ? 'bg-yellow-500/20 text-yellow-400' :
                        transition.to === 'CLAIMED' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {transition.to}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white truncate">{transition.trigger}</p>
                        <p className="text-xs text-gray-500 truncate">Guard: {transition.guard}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                <p className="text-sm text-orange-300">
                  <strong>Edge Case — NO_SHOW handling:</strong> When a no-show is recorded on a swapped shift, the system: (1) increments the acceptor&apos;s no_show_count_30d, (2) checks against the restaurant&apos;s no_show_threshold, (3) auto-suspends from swaps if threshold exceeded, (4) notifies the manager, and (5) creates an audit log entry. The original requester is NOT penalized.
                </p>
              </div>
            </div>
          </section>

          {/* Eligibility Engine */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <UserCheck className="w-4 h-4 text-[#007BE5]" />
              </div>
              Eligibility Engine
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <p className="text-gray-300">
                Before any swap is processed, the eligibility engine runs a series of checks. All checks must pass, and the first failure short-circuits with a clear error message.
              </p>

              <div className="bg-[#0a0f1a] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">{`// Eligibility check pipeline — runs on every swap attempt
async function checkEligibility(
  employee: Employee,
  shift: Shift,
  settings: SwapSettings
): Promise<EligibilityResult> {
  const checks = [
    // 1. Account status
    () => employee.status === 'active'
      ? pass() : fail('Employee is not in active status'),

    // 2. Tenure requirement
    () => daysSince(employee.hire_date) >= settings.min_tenure_days
      ? pass() : fail(\`Must be employed \${settings.min_tenure_days}+ days\`),

    // 3. Swap suspension check
    () => !employee.swap_suspension_until ||
         employee.swap_suspension_until < now()
      ? pass() : fail('Suspended from swaps due to no-show history'),

    // 4. Weekly swap limit
    () => getSwapCount(employee.id, thisWeek()) < settings.max_swaps_per_week
      ? pass() : fail(\`Max \${settings.max_swaps_per_week} swaps per week\`),

    // 5. Role qualification
    () => hasActiveRole(employee.id, shift.role_id)
      ? pass() : fail('Not qualified for this role'),

    // 6. Certification check
    () => hasValidCertifications(employee.id, shift.role_id)
      ? pass() : fail('Required certification missing or expired'),

    // 7. Minor labor law
    () => !isMinor(employee) || isLegalShift(employee, shift)
      ? pass() : fail('Shift violates minor labor restrictions'),

    // 8. Overtime check
    () => !wouldCreateOvertime(employee.id, shift)
      ? pass() : warn('Would create overtime — requires approval'),

    // 9. Schedule conflict
    () => !hasConflict(employee.id, shift.shift_date, shift.start_time, shift.end_time)
      ? pass() : fail('Conflicts with existing shift'),

    // 10. Skill rating check
    () => !shift.min_skill_rating ||
         ratingValue(employee.skill_rating) >= ratingValue(shift.min_skill_rating)
      ? pass() : fail(\`Requires \${shift.min_skill_rating}-level or above\`),
  ];

  return runChecks(checks);
}`}</pre>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <h4 className="font-medium text-green-300 mb-2">Pass = Eligible</h4>
                  <p className="text-sm text-gray-400">
                    All checks pass. Employee can claim the shift. If auto-approve criteria are met, the swap is immediately approved.
                  </p>
                </div>
                <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <h4 className="font-medium text-yellow-300 mb-2">Warn = Needs Approval</h4>
                  <p className="text-sm text-gray-400">
                    A soft-fail (like overtime). The swap can proceed but requires manager approval. The warning reason is recorded.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Crew Strength Scoring */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Scale className="w-4 h-4 text-[#007BE5]" />
              </div>
              Crew Strength Scoring System
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <p className="text-gray-300">
                Prevents the &ldquo;strong crew swaps out of Friday night&rdquo; problem by scoring crew quality and enforcing minimums.
              </p>

              <div className="bg-[#0a0f1a] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">{`// Crew strength check — runs when enforce_crew_score is enabled
function checkCrewStrength(
  shift: Shift,
  currentEmployee: Employee,
  newEmployee: Employee,
  shiftDate: Date
): CrewStrengthResult {
  const SCORES = { A: 5, B: 3, C: 1 };

  // Get all employees working same date & overlapping time
  const crew = getCrewForShift(shift.restaurant_id, shiftDate, shift.start_time, shift.end_time);

  // Calculate current score
  const currentScore = crew.reduce((sum, emp) => sum + SCORES[emp.skill_rating], 0);

  // Calculate score after swap
  const newScore = currentScore
    - SCORES[currentEmployee.skill_rating]
    + SCORES[newEmployee.skill_rating];

  // Get minimum for this shift
  const minScore = getMinCrewScore(shift.restaurant_id, shiftDate, shift.start_time);

  if (newScore < minScore) {
    return {
      allowed: false,
      message: \`Crew score would drop from \${currentScore} to \${newScore} (minimum: \${minScore})\`,
      currentScore,
      newScore,
      minScore,
    };
  }

  return { allowed: true, currentScore, newScore, minScore };
}`}</pre>
              </div>

              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-medium text-white mb-2">Schema: crew_score_requirements</h4>
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
                        ['restaurant_id', 'uuid (FK)', 'Reference to restaurant'],
                        ['day_of_week', 'smallint', '0-6 (Sunday-Saturday)'],
                        ['time_block', 'enum', 'morning | afternoon | evening | closing'],
                        ['min_crew_score', 'integer', 'Minimum total crew score required'],
                        ['min_headcount', 'integer', 'Minimum number of employees'],
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
              {/* Swap Endpoints */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-4">Shift Swaps</h3>
                <div className="space-y-3">
                  {[
                    { method: 'GET', path: '/api/shifts/available', desc: 'List shifts available for swap (filtered by employee eligibility)' },
                    { method: 'POST', path: '/api/swaps', desc: 'Create swap request (drop, trade offer, or pickup)' },
                    { method: 'POST', path: '/api/swaps/:id/claim', desc: 'Claim an open shift drop (triggers eligibility check)' },
                    { method: 'POST', path: '/api/swaps/:id/approve', desc: 'Manager approves swap request' },
                    { method: 'POST', path: '/api/swaps/:id/reject', desc: 'Manager rejects swap request (with reason)' },
                    { method: 'POST', path: '/api/swaps/:id/cancel', desc: 'Requester cancels their swap request' },
                    { method: 'GET', path: '/api/swaps/pending', desc: 'Manager approval queue (with filters)' },
                    { method: 'GET', path: '/api/swaps/history', desc: 'Swap audit trail for employee or shift' },
                  ].map((endpoint, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <span className={`px-2 py-1 rounded text-xs font-mono font-medium ${
                        endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-green-500/20 text-green-400'
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

              {/* Eligibility Endpoints */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-4">Eligibility & Rules</h3>
                <div className="space-y-3">
                  {[
                    { method: 'GET', path: '/api/eligibility/:employeeId/:shiftId', desc: 'Check if employee is eligible for a specific shift' },
                    { method: 'GET', path: '/api/shifts/:id/eligible-employees', desc: 'List all eligible employees for a shift' },
                    { method: 'GET', path: '/api/crew-score/:date/:timeBlock', desc: 'Get current crew strength score for a time block' },
                    { method: 'PATCH', path: '/api/settings/swap', desc: 'Update swap settings for restaurant' },
                    { method: 'POST', path: '/api/shifts/:id/lock', desc: 'Lock a shift from swapping (manager only)' },
                    { method: 'DELETE', path: '/api/shifts/:id/lock', desc: 'Unlock a previously locked shift' },
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
            </div>
          </section>

          {/* Scheduled Jobs */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <Clock className="w-4 h-4 text-yellow-400" />
              </div>
              Scheduled Jobs & Escalation
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <p className="text-gray-300">
                Time-based business rules require reliable cron jobs. These run as Supabase Edge Functions triggered by pg_cron.
              </p>

              <div className="space-y-3">
                {[
                  {
                    job: 'swap_deadline_checker',
                    schedule: 'Every 15 minutes',
                    desc: 'Finds swap requests past their deadline_at. Expires unclaimed drops, auto-rejects timed-out approvals, reverts shifts to original owner.',
                    edge_case: 'Must handle the case where a swap is claimed just as the deadline fires (use SELECT ... FOR UPDATE to prevent races).',
                  },
                  {
                    job: 'swap_escalation',
                    schedule: 'Every hour',
                    desc: 'Escalates swap requests approaching deadlines: 48h → urgent notifications, 24h → manager alert, 12h → critical.',
                    edge_case: 'Respects manager notification quiet hours. Queues escalations for delivery after quiet hours end.',
                  },
                  {
                    job: 'no_show_detector',
                    schedule: 'Every 30 minutes',
                    desc: 'Checks swapped shifts where start_time has passed and no clock-in recorded. Marks as no_show after 15-minute grace period.',
                    edge_case: 'Only triggers for restaurants with clock-in integration. Otherwise, managers confirm manually.',
                  },
                  {
                    job: 'notification_batcher',
                    schedule: 'Every 2 hours',
                    desc: 'Collects pending swap approval requests and sends digest notification to managers instead of individual pings.',
                    edge_case: 'Skips batching for critical/emergency escalation levels — those always send immediately.',
                  },
                  {
                    job: 'no_show_count_reset',
                    schedule: 'Daily at midnight',
                    desc: 'Recalculates rolling 30-day no-show counts. Removes expired swap suspensions.',
                    edge_case: 'Uses the restaurant\'s timezone for the midnight calculation, not UTC.',
                  },
                ].map((job, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm text-yellow-400">{job.job}</span>
                      <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-full">{job.schedule}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{job.desc}</p>
                    <div className="px-3 py-1.5 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <p className="text-xs text-orange-300"><strong>Edge Case:</strong> {job.edge_case}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Real-time Subscriptions */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#007BE5]" />
              </div>
              Real-time Subscriptions
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                Real-time updates via Supabase Realtime so employees and managers see changes instantly.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { channel: 'swap_requests:restaurant_id=eq.{id}', desc: 'New swap postings visible to all eligible employees' },
                  { channel: 'swap_requests:requester_id=eq.{id}', desc: 'Requester sees when their shift is claimed or approved' },
                  { channel: 'swap_requests:acceptor_id=eq.{id}', desc: 'Acceptor sees approval/rejection in real-time' },
                  { channel: 'shifts:restaurant_id=eq.{id}', desc: 'Schedule board updates live when swaps complete' },
                ].map((sub, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg">
                    <p className="font-mono text-sm text-[#007BE5] mb-2 break-all">{sub.channel}</p>
                    <p className="text-xs text-gray-400">{sub.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-[#007BE5]/10 rounded-lg border border-[#007BE5]/20">
                <p className="text-sm text-[#007BE5]">
                  <strong>Optimistic Locking:</strong> When an employee clicks &ldquo;Claim Shift,&rdquo; a Redis lock is placed for 60 seconds while the eligibility check runs. This prevents two employees from claiming the same shift simultaneously. If the check fails, the lock is released and the shift returns to the open board.
                </p>
              </div>
            </div>
          </section>

          {/* Notifications */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Bell className="w-4 h-4 text-[#007BE5]" />
              </div>
              Notification Architecture
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="bg-[#0a0f1a] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">{`// Notification dispatch — handles manager fatigue mitigation
async function dispatchSwapNotification(
  event: SwapEvent,
  settings: SwapSettings
) {
  const notification = buildNotification(event);

  // Critical events always send immediately
  if (event.escalation === 'critical' || event.escalation === 'emergency') {
    await sendImmediate(notification, ['push', 'sms']);
    return;
  }

  // Manager notifications are batched (except critical)
  if (notification.recipient_type === 'manager') {
    const quietHours = await getQuietHours(notification.recipient_id);

    if (isInQuietHours(quietHours)) {
      await queueForDelivery(notification, quietHours.end_time);
      return;
    }

    // Non-urgent: batch into digest
    if (event.escalation === 'normal') {
      await addToBatch(notification);
      return;
    }
  }

  // Employee notifications send immediately
  await sendImmediate(notification, notification.channels);
}`}</pre>
              </div>

              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <h4 className="font-medium text-yellow-300 mb-2">Manager Fatigue Mitigation</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>- Normal swap approvals batched into 2-hour digests</li>
                  <li>- Configurable quiet hours (e.g., 10pm - 7am)</li>
                  <li>- Critical alerts always break through quiet hours</li>
                  <li>- Single daily summary email of all swap activity</li>
                  <li>- In-app badge count for pending approvals (not push per item)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-red-400" />
              </div>
              Security & RLS Policies
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Lock, title: 'Employee Isolation', desc: 'Employees can only see shifts and swaps within their restaurant. Cannot access other restaurant data.' },
                  { icon: Shield, title: 'Manager Elevation', desc: 'Only managers can approve/reject swaps, lock shifts, or modify swap settings. Enforced at RLS level.' },
                  { icon: AlertTriangle, title: 'Audit Immutability', desc: 'swap_audit_log has INSERT-only policy. No UPDATE or DELETE. Events cannot be tampered with.' },
                  { icon: Lock, title: 'Rate Limiting', desc: 'Swap creation: 5/hour per employee. Claim attempts: 10/hour per employee. Prevents abuse.' },
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
                <h4 className="font-medium text-red-300 mb-2">Key RLS Policies</h4>
                <div className="bg-[#0a0f1a] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-300">{`-- Employees see only their restaurant's open swaps
CREATE POLICY "Employees view restaurant swaps" ON swap_requests
  FOR SELECT
  USING (
    restaurant_id IN (
      SELECT restaurant_id FROM employees
      WHERE user_id = auth.uid()
    )
  );

-- Only the requester can cancel their own swap
CREATE POLICY "Requester cancels own swap" ON swap_requests
  FOR UPDATE
  USING (requester_id = (
    SELECT id FROM employees WHERE user_id = auth.uid()
  ))
  WITH CHECK (status = 'cancelled');

-- Managers approve/reject swaps for their restaurant
CREATE POLICY "Manager approval" ON swap_requests
  FOR UPDATE
  USING (
    restaurant_id IN (
      SELECT restaurant_id FROM employees
      WHERE user_id = auth.uid() AND role = 'manager'
    )
  );

-- Audit log is append-only (no updates or deletes)
CREATE POLICY "Append only audit" ON swap_audit_log
  FOR INSERT
  WITH CHECK (true);
-- No UPDATE or DELETE policies exist = immutable`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Edge Case Solutions Summary */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Settings className="w-4 h-4 text-orange-400" />
              </div>
              Edge Case → Technical Solution Map
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="space-y-3">
                {[
                  { edge: 'New hire swaps on day one', solution: 'min_tenure_days in swap_settings, computed swap_eligible field on employees', component: 'Eligibility Engine' },
                  { edge: 'Unqualified person picks up shift', solution: 'employee_roles junction table + role matching in eligibility check', component: 'Eligibility Engine' },
                  { edge: 'Expired certification', solution: 'employee_certifications.is_valid computed column + check in pipeline', component: 'Eligibility Engine' },
                  { edge: 'Manager overwhelmed by notifications', solution: 'notification_batcher cron + quiet hours + digest emails', component: 'Notification Architecture' },
                  { edge: 'Printed schedule becomes outdated', solution: 'schedule_version tracking + "changes since print" diff endpoint', component: 'API Layer' },
                  { edge: 'Strong crew swaps out of Friday', solution: 'crew_score_requirements table + checkCrewStrength() guard', component: 'Crew Strength Scoring' },
                  { edge: 'No-show on swapped shift', solution: 'no_show_detector cron + no_show_count_30d + auto-suspension', component: 'Scheduled Jobs' },
                  { edge: 'Unfilled shift at deadline', solution: 'swap_deadline_checker cron + shift revert + escalation levels', component: 'Scheduled Jobs' },
                  { edge: 'Manager doesn\'t respond to approval', solution: 'manager_timeout_hours + manager_timeout_action in swap_settings', component: 'State Machine' },
                  { edge: 'Two people claim same shift', solution: 'Redis lock on claim + SELECT ... FOR UPDATE on swap row', component: 'Real-time + Locking' },
                  { edge: 'Minor working restricted hours', solution: 'date_of_birth + isMinor() + state labor law rules in eligibility', component: 'Eligibility Engine' },
                  { edge: 'Swap creates overtime', solution: 'wouldCreateOvertime() check + require_overtime_approval setting', component: 'Eligibility Engine' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white">{item.edge}</p>
                      <p className="text-xs text-gray-400 mt-1">{item.solution}</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-[#007BE5]/20 text-[#007BE5] rounded-full whitespace-nowrap flex-shrink-0">
                      {item.component}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Implementation Phases */}
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
                    title: 'Foundation & Schema',
                    items: [
                      'employees, roles, certifications tables',
                      'shifts and schedules tables',
                      'swap_settings with defaults',
                      'RLS policies for all tables',
                    ],
                  },
                  {
                    phase: 'Phase 2',
                    title: 'Core Swap Engine',
                    items: [
                      'swap_requests table and state machine',
                      'Eligibility engine (10-point check pipeline)',
                      'Basic swap API endpoints (create, claim, cancel)',
                      'swap_audit_log with event sourcing',
                    ],
                  },
                  {
                    phase: 'Phase 3',
                    title: 'Manager Controls',
                    items: [
                      'Approval queue UI and endpoints',
                      'Shift locking and blackout periods',
                      'Auto-approve rules engine',
                      'Crew strength scoring system',
                    ],
                  },
                  {
                    phase: 'Phase 4',
                    title: 'Automation & Notifications',
                    items: [
                      'Scheduled jobs (deadline, escalation, no-show)',
                      'Notification batching and quiet hours',
                      'Real-time subscriptions for live updates',
                      'SMS/push notification delivery',
                    ],
                  },
                  {
                    phase: 'Phase 5',
                    title: 'Analytics & Optimization',
                    items: [
                      'Swap pattern detection and reporting',
                      'Crew strength analytics dashboard',
                      'Employee reliability scoring',
                      'Printed schedule change tracking',
                    ],
                  },
                ].map((phase, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
                        {i + 1}
                      </div>
                      {i < 4 && <div className="w-0.5 h-full bg-white/10 mt-2" />}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-orange-400 font-medium">{phase.phase}</span>
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
              Review the product requirements and edge cases for this feature.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/shift-swap-prd"
                className="px-6 py-3 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-500/90 transition-colors"
              >
                View Shift Swap PRD
              </Link>
              <Link
                href="/trd"
                className="px-6 py-3 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors"
              >
                View Interview Scheduling TRD
              </Link>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            This technical specification addresses all identified edge cases. Implementation details may evolve based on requirements and infrastructure decisions.
          </p>
        </div>
      </div>
    </main>
  );
}
