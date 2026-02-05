'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Users,
  Clock,
  CheckCircle,
  Settings,
  RefreshCw,
  AlertTriangle,
  Shield,
  Building2,
  UserCheck,
  Ban,
  Bell,
  ClipboardList,
  Scale,
  HelpCircle,
  ThumbsUp,
  ThumbsDown,
  Printer,
  Timer,
  UserX,
  Star,
  Briefcase,
} from 'lucide-react';

export default function ShiftSwapPRDPage() {
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
            Product Requirements Document
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Shift Swapping Feature
          </h1>
          <p className="text-gray-400 text-lg">
            Enable restaurant employees to swap, drop, and pick up shifts with manager oversight. A comprehensive analysis of edge cases, business rules, and operational impact.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="/shift-swap-trd"
              className="text-sm text-green-400 hover:underline"
            >
              View Technical Spec (TRD)
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/prd"
              className="text-sm text-[#007BE5] hover:underline"
            >
              View Interview Scheduling PRD
            </Link>
            <span className="text-gray-600">|</span>
            <span className="text-sm text-gray-500">February 2025</span>
          </div>
        </div>

        {/* Scope Warning */}
        <div className="mb-12 p-6 bg-orange-500/10 border border-orange-500/30 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-orange-300 mb-2">Scope Expansion Warning</h3>
              <p className="text-sm text-orange-200/70">
                This feature represents a significant scope expansion beyond the current applicant/job posting focus. It assumes all employees have accounts, introduces complex business rules, requires manager workflow changes, and creates new accountability chains. This document catalogs every edge case and operational risk to help determine if and when to build this feature.
              </p>
            </div>
          </div>
        </div>

        {/* Document Content */}
        <div className="space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <RefreshCw className="w-4 h-4 text-[#007BE5]" />
              </div>
              Overview
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                Shift swapping allows employees to trade, drop, or pick up shifts from coworkers. While this sounds simple, it introduces an entirely new product surface with deep operational implications for restaurants of different sizes and types. This PRD documents every edge case, business rule, and risk so the team can make an informed build/no-build decision.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <p className="text-2xl font-bold text-orange-400">3</p>
                  <p className="text-sm text-gray-400">Swap types (trade, drop, pickup)</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <p className="text-2xl font-bold text-orange-400">20+</p>
                  <p className="text-sm text-gray-400">Edge cases identified</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <p className="text-2xl font-bold text-orange-400">5</p>
                  <p className="text-sm text-gray-400">Stakeholder roles affected</p>
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
              What Problem Does This Solve?
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <div>
                <h4 className="font-medium text-white mb-3">Current Pain Points</h4>
                <ul className="space-y-3">
                  {[
                    'Employees text/call the manager to request shift changes, interrupting their workflow',
                    'Managers manually find replacements by calling through the employee roster',
                    'No visibility into who is qualified or available for a given shift',
                    'Verbal agreements lead to no-shows with no accountability trail',
                    'Last-minute changes are communicated via group text, easily missed',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-red-400">{i + 1}</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-white/10 pt-4">
                <h4 className="font-medium text-white mb-3">Why This Might Not Be Worth Building</h4>
                <ul className="space-y-3">
                  {[
                    'Current focus is applicant/job posting — this is an entirely different product surface',
                    'Requires ALL employees to have accounts (onboarding, training, support burden)',
                    'Adds significant manager overhead if approval workflows are poorly designed',
                    'Small restaurants (under 10 employees) may find this overkill — they just text each other',
                    'Large chains already use enterprise solutions (HotSchedules, 7shifts, When I Work)',
                    'Could create more problems than it solves if crew strength isn\'t protected',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertTriangle className="w-3 h-3 text-yellow-400" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* New Assumptions */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
              </div>
              New Infrastructure Assumptions
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                This feature requires foundational infrastructure that doesn&apos;t exist today. Each assumption carries its own complexity and cost.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: 'All employees must have accounts',
                    desc: 'Every hourly worker needs to be onboarded into the system. This means email/phone verification, profile setup, and ongoing account management. What about employees without smartphones? Shared devices? Language barriers?',
                    severity: 'high',
                  },
                  {
                    title: 'Role and skill tracking must exist',
                    desc: 'The system needs to know who can do what. A host can\'t swap with a line cook. A bartender can\'t swap with someone who doesn\'t have a liquor license. Who maintains this data? How is it validated?',
                    severity: 'high',
                  },
                  {
                    title: 'Managers need a shift management interface',
                    desc: 'Before employees can swap shifts, managers need to create and publish schedules digitally. This is a separate feature that must come first.',
                    severity: 'high',
                  },
                  {
                    title: 'Real-time notifications are required',
                    desc: 'Shift swaps are time-sensitive. Push notifications, SMS, or in-app alerts must work reliably. Delayed notifications can cause missed shifts.',
                    severity: 'medium',
                  },
                  {
                    title: 'Compliance engine for labor laws',
                    desc: 'Overtime calculations, minor work restrictions, mandatory break requirements — all vary by state/locality. A swap that creates a labor violation must be blocked.',
                    severity: 'medium',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border-l-2 border-l-yellow-500/50">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-white">{item.title}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          item.severity === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {item.severity} complexity
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                    <span className="text-[#007BE5] font-semibold">E</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Employee</h3>
                    <p className="text-sm text-gray-400">Hourly Restaurant Worker</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Needs to swap a shift due to personal conflicts, school, or emergencies. Wants a fast, simple process without calling the manager.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-300">Goals:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>- Post a shift for swap quickly</li>
                    <li>- Find someone qualified to cover</li>
                    <li>- Get confirmation before the deadline</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-semibold">M</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Manager</h3>
                    <p className="text-sm text-gray-400">Restaurant Manager/Owner</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Already overwhelmed with daily operations. Needs oversight of shift changes without being bottlenecked by every swap request.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-300">Goals:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>- Maintain crew strength on critical shifts</li>
                    <li>- Approve/reject swaps without constant interruption</li>
                    <li>- Know who is actually working each shift</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Edge Case #1: Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <UserCheck className="w-4 h-4 text-[#007BE5]" />
              </div>
              Edge Cases: Who Can Swap?
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <p className="text-gray-300">
                Not everyone should be able to swap with everyone. The system needs guardrails to prevent unqualified workers from picking up shifts they can&apos;t perform.
              </p>

              <div className="space-y-4">
                {[
                  {
                    question: 'Can a brand new hire swap shifts on day one?',
                    answer: 'No. There should be a configurable probationary period (e.g., 30, 60, 90 days) before an employee is eligible to participate in shift swapping. New employees are still learning the job, the culture, and the team. A swap could put an untrained person in a critical role.',
                    rule: 'Minimum tenure requirement before swap eligibility',
                    icon: Timer,
                  },
                  {
                    question: 'Can anyone pick up my shift regardless of their role?',
                    answer: 'No. A host cannot pick up a line cook shift. A busser cannot work the bar. The system must enforce role-based matching. Employees can only pick up shifts for roles they are qualified and trained for.',
                    rule: 'Role-based qualification matching required',
                    icon: Briefcase,
                  },
                  {
                    question: 'What about certifications (food safety, alcohol service)?',
                    answer: 'Certain positions require active certifications. A bartender must have a valid liquor license. Food handlers need current food safety certificates. If a certification is expired, the employee should be ineligible for those shifts even if their role matches.',
                    rule: 'Active certification validation for regulated positions',
                    icon: Shield,
                  },
                  {
                    question: 'What if the person has too many hours already?',
                    answer: 'Picking up a shift might push someone into overtime, which has cost implications for the business. The system should warn or block swaps that would exceed weekly hour limits or create overtime situations without manager approval.',
                    rule: 'Overtime threshold checks before swap approval',
                    icon: Clock,
                  },
                  {
                    question: 'Can a minor (under 18) pick up a late-night shift?',
                    answer: 'No. Labor laws restrict when minors can work (varies by state — typically no later than 10pm on school nights). The system must enforce age-based scheduling restrictions automatically.',
                    rule: 'Minor labor law compliance enforcement',
                    icon: Scale,
                  },
                  {
                    question: 'What about employees on disciplinary action or leave?',
                    answer: 'Employees who are suspended, on leave, or under a performance improvement plan may be restricted from picking up additional shifts. The system should check employee status before allowing participation.',
                    rule: 'Employee status validation (active, on leave, suspended)',
                    icon: Ban,
                  },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <item.icon className="w-5 h-5 text-[#007BE5] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">{item.question}</p>
                        <p className="text-sm text-gray-400 mt-1">{item.answer}</p>
                      </div>
                    </div>
                    <div className="ml-8 mt-2 px-3 py-1.5 bg-[#007BE5]/10 rounded-lg">
                      <p className="text-xs text-[#007BE5] font-medium">Business Rule: {item.rule}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Edge Case #2: Manager Approval */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              Edge Cases: Manager Approval & Fatigue
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <p className="text-gray-300">
                The approval workflow is the most critical design decision. Too strict and it defeats the purpose. Too loose and it creates operational chaos.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <h4 className="font-medium text-green-300 mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    Auto-Approve When...
                  </h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      Same role, same skill level (lateral swap)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      Swap is 48+ hours before the shift
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      Neither employee exceeds weekly hour limits
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      Not a blackout/critical period
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                  <h4 className="font-medium text-red-300 mb-2 flex items-center gap-2">
                    <ThumbsDown className="w-4 h-4" />
                    Require Approval When...
                  </h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      Swap is within 24 hours of shift start
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      Different skill levels or cross-role swap
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      Would create overtime for either employee
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      Shift is during a blackout or high-volume period
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      Employee dropping shift has a pattern of frequent swaps
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                {[
                  {
                    question: 'Will this add to the manager\'s already busy schedule?',
                    answer: 'If every swap requires manual approval, yes — this becomes another interruption in their day. The key is smart auto-approval for safe swaps. Only flag truly risky swaps. Batch notifications instead of real-time pings. Let managers set "quiet hours" where non-urgent swaps queue up.',
                  },
                  {
                    question: 'Can the manager reject a swap? What happens then?',
                    answer: 'Yes. If rejected, the original employee keeps the shift and is notified immediately. They can attempt to find another eligible swapper or escalate to the manager for help finding coverage. The rejection should include a reason so the employee understands.',
                  },
                  {
                    question: 'What if the manager doesn\'t respond to a swap request in time?',
                    answer: 'There must be a configurable timeout. If a manager doesn\'t respond within X hours (e.g., 12 hours), the swap either auto-approves (risky) or auto-rejects (safer) and the original owner keeps the shift. The default should be auto-reject for safety.',
                  },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg">
                    <p className="font-medium text-white mb-2">{item.question}</p>
                    <p className="text-sm text-gray-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Edge Case #3: Time Deadlines */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Timer className="w-4 h-4 text-[#007BE5]" />
              </div>
              Edge Cases: Time Deadlines & Unfilled Shifts
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <p className="text-gray-300">
                What happens when the clock runs out and nobody picks up a dropped shift? This is one of the most critical business rules.
              </p>

              {/* Timeline */}
              <div className="bg-[#0a0f1a] rounded-xl p-6 border border-white/5">
                <h4 className="font-medium text-white mb-4">Shift Swap Deadline Timeline</h4>
                <div className="space-y-4">
                  {[
                    { time: '72+ hours before', status: 'Open', color: 'green', desc: 'Swap posted to eligible employees. Auto-approval eligible.' },
                    { time: '48 hours before', status: 'Urgent', color: 'yellow', desc: 'If unclaimed, notification escalates. Broader pool of employees notified.' },
                    { time: '24 hours before', status: 'Critical', color: 'orange', desc: 'Manager is alerted. Swap now requires manager approval regardless of rules.' },
                    { time: '12 hours before', status: 'Deadline', color: 'red', desc: 'Swap request closes. Shift reverts to original owner. Manager notified if still open.' },
                    { time: '4 hours before', status: 'Emergency', color: 'red', desc: 'If original owner cannot work, manager must manually find coverage or adjust staffing.' },
                  ].map((item, i, arr) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${
                          item.color === 'green' ? 'bg-green-400' :
                          item.color === 'yellow' ? 'bg-yellow-400' :
                          item.color === 'orange' ? 'bg-orange-400' :
                          'bg-red-400'
                        }`} />
                        {i < arr.length - 1 && <div className="w-0.5 flex-1 bg-white/10 mt-1" />}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-white">{item.time}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            item.color === 'green' ? 'bg-green-500/20 text-green-400' :
                            item.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                            item.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    question: 'What if a shift doesn\'t get filled by the deadline?',
                    answer: 'The shift reverts to the original owner. They are still responsible for showing up. If they communicated in good faith and truly cannot work, the manager must handle it as a staffing emergency — the system cannot force someone to appear.',
                    rule: 'Unfilled shifts revert to original owner at deadline',
                  },
                  {
                    question: 'Should there be a swap window (e.g., only within 24-48 hours of schedule posting)?',
                    answer: 'Yes, configurable per restaurant. Some managers want to allow swaps only within the first 48 hours after posting. After that, the schedule is "locked" and only emergency swaps with manager approval are allowed. This protects against the chaos of constant schedule changes.',
                    rule: 'Configurable swap window after schedule publication',
                  },
                  {
                    question: 'Can someone swap a shift for next month?',
                    answer: 'The swap system should only apply to published schedules. If a schedule for next month hasn\'t been published yet, employees should submit availability preferences or time-off requests instead. Swaps are for already-assigned shifts only.',
                    rule: 'Swaps only apply to published, assigned shifts',
                  },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg">
                    <p className="font-medium text-white mb-2">{item.question}</p>
                    <p className="text-sm text-gray-400 mb-3">{item.answer}</p>
                    <div className="px-3 py-1.5 bg-[#007BE5]/10 rounded-lg">
                      <p className="text-xs text-[#007BE5] font-medium">Business Rule: {item.rule}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Edge Case #4: Accountability */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                <UserX className="w-4 h-4 text-red-400" />
              </div>
              Edge Cases: Accountability & No-Shows
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <p className="text-gray-300">
                When shifts change hands, accountability becomes complex. The system must clearly define who is responsible at every stage.
              </p>

              <div className="space-y-4">
                {[
                  {
                    question: 'I swapped my shift and the other person didn\'t show up. Am I in trouble?',
                    answer: 'Once a swap is approved (either auto-approved or manager-approved), responsibility transfers to the new shift owner. The original employee is NOT liable for the no-show. The no-show is recorded against the person who accepted the swap. However, if the swap was done through an unofficial back-channel and not through the system, the original owner remains responsible.',
                    rule: 'Approved swaps transfer full accountability to the new owner',
                  },
                  {
                    question: 'What if someone has a pattern of picking up shifts and not showing?',
                    answer: 'The system must track no-show rates per employee. After X no-shows (configurable, e.g., 2 within 30 days), the employee is automatically suspended from picking up swapped shifts. The manager is notified and can override or reinforce the suspension.',
                    rule: 'Auto-suspension after configurable no-show threshold',
                  },
                  {
                    question: 'Is there a history/audit trail?',
                    answer: 'Yes. Every swap request, approval, rejection, cancellation, and completion must be logged with timestamps. This protects both employees and managers in disputes. "I never agreed to that swap" should be provably true or false.',
                    rule: 'Full audit trail for every swap lifecycle event',
                  },
                  {
                    question: 'What if someone accepts a swap and then tries to swap it again?',
                    answer: 'Configurable. Some restaurants allow re-swapping (the shift passes to a third person). Others require the shift to revert to the original owner and restart the process. Re-swapping adds complexity but may be necessary for flexibility.',
                    rule: 'Re-swap policy configurable per restaurant',
                  },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg">
                    <p className="font-medium text-white mb-2">{item.question}</p>
                    <p className="text-sm text-gray-400 mb-3">{item.answer}</p>
                    <div className="px-3 py-1.5 bg-red-500/10 rounded-lg border border-red-500/20">
                      <p className="text-xs text-red-400 font-medium">Business Rule: {item.rule}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Edge Case #5: Printed Schedules & Crew Strength */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Printer className="w-4 h-4 text-orange-400" />
              </div>
              Edge Cases: Physical Media & Crew Strength
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <p className="text-gray-300">
                Many restaurants still print schedules, post them on walls, or use physical media. Digital shift swapping creates a disconnect between what&apos;s on the wall and what&apos;s actually happening.
              </p>

              <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20 mb-4">
                <h4 className="font-medium text-orange-300 mb-2">The Printed Schedule Problem</h4>
                <p className="text-sm text-orange-200/70">
                  Manager prints the schedule Monday morning. By Monday afternoon, three employees have swapped shifts through the app. The printed schedule on the wall is now wrong. New employees, who may not have the app yet, are looking at outdated information. Kitchen prep is planned around the wrong crew. This is a real operational risk.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    question: 'How do we handle printed schedules becoming outdated?',
                    answer: 'Options: (1) Show a "last modified" timestamp prominently so managers know to reprint, (2) provide a one-click "print updated schedule" feature, (3) encourage migration to digital-only display (TV/tablet in break room), (4) send summary emails of all changes since last print. The system should warn when changes occur after a schedule has been printed/exported.',
                  },
                  {
                    question: 'What if the strong crew all swaps out of a busy Friday night?',
                    answer: 'This is the biggest operational risk. The manager carefully schedules their best team for Friday dinner rush, then everyone swaps with less experienced workers. Solutions: (1) Manager can "lock" specific shifts or entire days from swapping, (2) employees can be tagged with skill ratings and the system can enforce minimum crew strength scores, (3) critical shifts can require explicit manager approval regardless of auto-approve rules.',
                  },
                  {
                    question: 'Can the manager designate "anchor" employees who can\'t swap specific shifts?',
                    answer: 'Yes. The concept of "locked shifts" or "anchor assignments" lets managers protect key positions. For example: "Sarah is the closing manager Friday — this shift cannot be swapped." This should be set per-shift, not globally, and clearly communicated to the employee.',
                  },
                  {
                    question: 'What about minimum staffing requirements per role?',
                    answer: 'The system should enforce minimum staffing per role per shift. If a swap would drop the number of line cooks below the minimum for a dinner shift, it should be blocked. Example: "Cannot approve swap — dinner shift requires minimum 3 line cooks, this would leave 2."',
                  },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg">
                    <p className="font-medium text-white mb-2">{item.question}</p>
                    <p className="text-sm text-gray-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Edge Case #6: Restaurant Fit */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-[#007BE5]" />
              </div>
              Which Restaurants Does This Work For?
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <h4 className="font-medium text-green-300 mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    Good Fit
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        type: 'Mid-size casual dining (15-40 staff)',
                        why: 'Big enough for shift overlap, small enough that enterprise tools are overkill. Multiple roles, regular schedule changes.',
                      },
                      {
                        type: 'Fast-casual chains (per location)',
                        why: 'High turnover, lots of part-time workers, frequent schedule conflicts. Standardized roles make matching easy.',
                      },
                      {
                        type: 'Multi-location operators',
                        why: 'Could even allow cross-location swaps for employees trained at multiple sites.',
                      },
                    ].map((item, i) => (
                      <div key={i}>
                        <p className="text-sm font-medium text-white">{item.type}</p>
                        <p className="text-xs text-gray-400">{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                  <h4 className="font-medium text-red-300 mb-3 flex items-center gap-2">
                    <ThumbsDown className="w-4 h-4" />
                    Poor Fit
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        type: 'Small mom-and-pop (under 8 staff)',
                        why: 'Everyone knows everyone. A group text is faster. The overhead of a formal system isn\'t justified.',
                      },
                      {
                        type: 'Fine dining with specialized roles',
                        why: 'Every position is highly specialized. A sommelier can\'t swap with a sous chef. The manager hand-picks every shift.',
                      },
                      {
                        type: 'Large enterprise chains (100+ per location)',
                        why: 'Already using HotSchedules, 7shifts, or When I Work. Switching cost is high. IT department manages tooling.',
                      },
                    ].map((item, i) => (
                      <div key={i}>
                        <p className="text-sm font-medium text-white">{item.type}</p>
                        <p className="text-xs text-gray-400">{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-medium text-white mb-2">Target Market Sweet Spot</h4>
                <p className="text-sm text-gray-400">
                  Independent and small-chain restaurants with 10-50 employees per location, primarily casual/fast-casual, with 3+ distinct roles and high part-time worker ratio. These restaurants are big enough to benefit from structured shift management but small enough that enterprise solutions are cost-prohibitive.
                </p>
              </div>
            </div>
          </section>

          {/* Notification Design */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Bell className="w-4 h-4 text-[#007BE5]" />
              </div>
              Notification Strategy
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                Notifications can make or break this feature. Too many and everyone ignores them. Too few and shifts get missed.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 border-b border-white/10">
                      <th className="pb-3 font-medium">Event</th>
                      <th className="pb-3 font-medium">Who</th>
                      <th className="pb-3 font-medium">Channel</th>
                      <th className="pb-3 font-medium">Timing</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {[
                      ['Shift posted for swap', 'Eligible employees', 'Push + In-App', 'Immediate'],
                      ['Swap offer received', 'Original owner', 'Push + SMS', 'Immediate'],
                      ['Swap approved', 'Both employees', 'Push + SMS', 'Immediate'],
                      ['Swap rejected', 'Requesting employee', 'Push + In-App', 'Immediate'],
                      ['Swap pending approval', 'Manager', 'In-App (batched)', 'Every 2 hours'],
                      ['Unfilled shift escalation', 'Manager', 'Push + SMS', '24h before shift'],
                      ['Shift revert (deadline)', 'Original owner', 'Push + SMS', 'At deadline'],
                      ['Swapped shift reminder', 'New shift owner', 'Push + SMS', '2h before shift'],
                      ['No-show on swapped shift', 'Manager', 'Push + SMS', '15min after start'],
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
              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p className="text-sm text-yellow-300">
                  <strong>Manager notification fatigue mitigation:</strong> Batch non-urgent swap approvals into 2-hour digest notifications. Only send real-time alerts for critical items (unfilled shifts within 24h, no-shows). Allow managers to set notification quiet hours.
                </p>
              </div>
            </div>
          </section>

          {/* Swap Types */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <ClipboardList className="w-4 h-4 text-[#007BE5]" />
              </div>
              Swap Types & Flows
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#007BE5]/20 flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6 text-[#007BE5]" />
                </div>
                <h3 className="font-semibold text-white mb-2">Direct Trade</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Two employees swap shifts with each other. Employee A works B&apos;s shift, B works A&apos;s shift.
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p className="font-medium text-gray-400 mb-1">Requirements:</p>
                  <p>Both must be qualified for each other&apos;s role</p>
                  <p>Neither can exceed hour limits</p>
                  <p>Both must agree to the trade</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Shift Drop</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Employee posts a shift to the open board. Any eligible employee can pick it up.
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p className="font-medium text-gray-400 mb-1">Requirements:</p>
                  <p>Shift goes to open marketplace</p>
                  <p>Time deadline applies</p>
                  <p>Reverts to owner if unclaimed</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Shift Pickup</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Employee picks up an open/extra shift without giving one up. Adds to their schedule.
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p className="font-medium text-gray-400 mb-1">Requirements:</p>
                  <p>Must be qualified for the role</p>
                  <p>Cannot exceed weekly hour limits</p>
                  <p>No schedule conflicts</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skill Rating System */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Star className="w-4 h-4 text-[#007BE5]" />
              </div>
              Crew Strength & Skill Ratings
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <p className="text-gray-300">
                To prevent the &ldquo;strong crew swaps out of Friday night&rdquo; problem, the system needs a way to measure and protect crew quality.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <p className="text-2xl font-bold text-green-400 mb-1">A</p>
                  <p className="text-sm font-medium text-white">Senior / Lead</p>
                  <p className="text-xs text-gray-400 mt-1">Can train others, handle rush, close independently</p>
                </div>
                <div className="text-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <p className="text-2xl font-bold text-yellow-400 mb-1">B</p>
                  <p className="text-sm font-medium text-white">Proficient</p>
                  <p className="text-xs text-gray-400 mt-1">Fully trained, can work independently, reliable</p>
                </div>
                <div className="text-center p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <p className="text-2xl font-bold text-orange-400 mb-1">C</p>
                  <p className="text-sm font-medium text-white">Developing</p>
                  <p className="text-xs text-gray-400 mt-1">Still learning, needs supervision, limited tasks</p>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-medium text-white mb-2">Minimum Crew Score Example</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Manager sets Friday Dinner minimum crew score to 12 points (A=5, B=3, C=1). Current crew: 2 A-level + 1 B-level = 13 points. If an A-level wants to swap with a C-level, the score would drop to 9 — below minimum. Swap blocked.
                </p>
                <div className="bg-[#0a0f1a] rounded-lg p-3 font-mono text-sm">
                  <p className="text-gray-400">Current: <span className="text-green-400">A(5) + A(5) + B(3)</span> = <span className="text-white">13</span> <span className="text-green-400">above minimum 12</span></p>
                  <p className="text-gray-400">After swap: <span className="text-orange-400">A(5) + C(1) + B(3)</span> = <span className="text-white">9</span> <span className="text-red-400">below minimum 12 — BLOCKED</span></p>
                </div>
              </div>
            </div>
          </section>

          {/* User Flow */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Settings className="w-4 h-4 text-[#007BE5]" />
              </div>
              User Flows
            </h2>

            {/* Employee Flow */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-white mb-4">Employee Shift Swap Flow</h3>
              <div className="flex flex-col md:flex-row items-start gap-4">
                {[
                  { step: '1', title: 'Request Swap', desc: 'Post shift or send trade offer' },
                  { step: '2', title: 'Eligibility Check', desc: 'System validates roles & hours' },
                  { step: '3', title: 'Match Found', desc: 'Eligible employee accepts' },
                  { step: '4', title: 'Approval', desc: 'Auto or manager review' },
                  { step: '5', title: 'Confirmed', desc: 'Both parties notified' },
                ].map((item, i, arr) => (
                  <div key={i} className="flex md:flex-col items-center gap-3 md:flex-1">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
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
              <h3 className="font-semibold text-white mb-4">Manager Oversight Flow</h3>
              <div className="flex flex-col md:flex-row items-start gap-4">
                {[
                  { step: '1', title: 'Set Rules', desc: 'Configure swap policies' },
                  { step: '2', title: 'Lock Shifts', desc: 'Protect critical assignments' },
                  { step: '3', title: 'Review Queue', desc: 'Approve/reject flagged swaps' },
                  { step: '4', title: 'Monitor', desc: 'Track crew strength & patterns' },
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

          {/* Summary of All Business Rules */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <Scale className="w-4 h-4 text-[#007BE5]" />
              </div>
              Complete Business Rules Summary
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="space-y-3">
                {[
                  { category: 'Eligibility', rules: [
                    'Minimum 30/60/90 day tenure before swap eligibility (configurable)',
                    'Role-based qualification matching required for all swaps',
                    'Active certifications required for regulated positions',
                    'Employee must be in "active" status (not on leave, suspended, or PIP)',
                    'Minor labor law compliance automatically enforced',
                  ]},
                  { category: 'Time Rules', rules: [
                    'Swaps only on published schedules (not future unpublished weeks)',
                    'Configurable swap window after schedule publication',
                    'Shift drops must be posted minimum 12 hours before shift (configurable)',
                    'Escalation at 48h, 24h, and 12h before unclaimed shifts',
                    'Unfilled shifts revert to original owner at deadline',
                  ]},
                  { category: 'Approval', rules: [
                    'Auto-approve: same role, 48h+ buffer, no overtime, no blackout',
                    'Require approval: within 24h, cross-role, overtime risk, critical period',
                    'Manager non-response defaults to auto-reject after timeout',
                    'Managers can lock specific shifts or entire days from swapping',
                    'Blackout periods block all non-emergency swaps',
                  ]},
                  { category: 'Accountability', rules: [
                    'Approved swaps transfer full responsibility to new owner',
                    'No-show tracking per employee with auto-suspension threshold',
                    'Full audit trail for every swap lifecycle event',
                    'Re-swap policy configurable per restaurant',
                    'Frequent swap patterns flagged for manager review',
                  ]},
                  { category: 'Crew Protection', rules: [
                    'Minimum staffing per role per shift enforced',
                    'Crew strength scoring (A/B/C) with minimum score thresholds',
                    'Anchor/locked shifts for key employees on critical days',
                    'Overtime threshold checks before swap approval',
                    'Maximum weekly swap limit per employee (configurable)',
                  ]},
                ].map((group, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg">
                    <h4 className="font-medium text-[#007BE5] mb-2">{group.category}</h4>
                    <ul className="space-y-1">
                      {group.rules.map((rule, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Build vs Don't Build */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#007BE5]/20 flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-[#007BE5]" />
              </div>
              Should We Build This?
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-400 mb-3">Reasons to Build</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {[
                      'Natural extension of scheduling product — users will expect it',
                      'Reduces manager overhead for routine schedule changes',
                      'Improves employee satisfaction and retention',
                      'Creates competitive differentiation vs. simple scheduling tools',
                      'Generates valuable workforce data (reliability scores, availability patterns)',
                      'Can be monetized as a premium feature tier',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-400 mb-3">Reasons to Wait</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {[
                      'Current focus is applicant/job posting — this is scope creep',
                      'Requires all employees on the platform (massive onboarding effort)',
                      'Complex business rules engine needed before launch',
                      'Competing with established players (7shifts, HotSchedules)',
                      'Could create worse problems than it solves without proper guardrails',
                      'Interview scheduling product-market fit not yet proven',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-[#007BE5]/10 rounded-lg border border-[#007BE5]/20">
                <h4 className="font-medium text-[#007BE5] mb-2">Recommendation</h4>
                <p className="text-sm text-gray-300">
                  Build this as a <strong className="text-white">Phase 2 feature</strong> after the core scheduling and interview product has proven product-market fit. The edge cases documented here should inform the database schema and architecture decisions made in Phase 1 so the foundation supports shift swapping later without major refactoring. Ship the interview scheduling first, get restaurants using the platform, then layer on shift management.
                </p>
              </div>
            </div>
          </section>

          {/* Success Metrics */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              Success Metrics (If Built)
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-white mb-3">Primary Metrics</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      Swap completion rate (target: 85%+)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      Time to fill swapped shift (target: under 4 hours)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      No-show rate on swapped shifts (target: under 3%)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      Manager time saved per week on scheduling changes
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-3">Secondary Metrics</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      Employee satisfaction with scheduling flexibility
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      Manager approval queue response time
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      Percentage of swaps auto-approved vs. manual
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      Employee retention rate (before vs. after feature)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <p className="text-gray-400 mb-6">
              Review the technical implementation details for these edge cases.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/shift-swap-trd"
                className="px-6 py-3 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-500/90 transition-colors"
              >
                View Technical Spec (TRD)
              </Link>
              <Link
                href="/prd"
                className="px-6 py-3 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors"
              >
                View Interview Scheduling PRD
              </Link>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            This PRD documents edge cases and business rules for evaluation purposes. Feature priority to be determined based on core product traction.
          </p>
        </div>
      </div>
    </main>
  );
}
