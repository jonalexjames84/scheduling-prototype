'use client';

import Link from 'next/link';
import { ArrowLeft, Briefcase, Building2, MapPin } from 'lucide-react';
import { ChatWidget } from '@/components/chat/ChatWidget';
import { mockCandidateInfo } from '@/lib/mock-data';

export default function CandidatePage() {
  return (
    <main className="min-h-screen bg-[#0f1629]">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Demo Selection
          </Link>
        </div>
      </header>

      {/* Job Posting Content (Simulated) */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Company Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{mockCandidateInfo.company}</h1>
            <p className="text-gray-400">Restaurant & Bar</p>
          </div>
        </div>

        {/* Job Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">{mockCandidateInfo.jobTitle}</h2>
          <div className="flex flex-wrap gap-4 text-gray-400">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              New York, NY
            </span>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Full-time
            </span>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">About the Role</h3>
          <div className="text-gray-400 space-y-4">
            <p>
              We&apos;re looking for an experienced Server to join our team at The Downtown Bistro.
              You&apos;ll be responsible for providing excellent customer service to our guests
              in a fast-paced, upscale dining environment.
            </p>
            <h4 className="text-white font-medium">Requirements:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>2+ years of experience in fine dining or upscale casual restaurants</li>
              <li>Excellent communication and interpersonal skills</li>
              <li>Ability to work in a fast-paced environment</li>
              <li>Knowledge of wine and food pairings preferred</li>
              <li>Must be available for evening and weekend shifts</li>
            </ul>
            <h4 className="text-white font-medium">Benefits:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Competitive hourly wage plus tips</li>
              <li>Health insurance for full-time employees</li>
              <li>Meal discounts</li>
              <li>Flexible scheduling</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#007BE5]/10 border border-[#007BE5]/30 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Ready to Apply?</h3>
          <p className="text-gray-400 mb-4">
            Click the chat bubble in the bottom right corner to schedule your interview!
          </p>
          <div className="inline-flex items-center gap-2 text-[#007BE5]">
            <span className="text-2xl animate-bounce">👋</span>
            <span>Chat with us to book your interview</span>
          </div>
        </div>

        {/* Demo Note */}
        <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
          <p className="text-sm text-yellow-300">
            <strong>Demo Note:</strong> This is a simulated job posting page. Click the blue chat
            bubble in the bottom-right corner to experience the interview scheduling flow.
          </p>
        </div>
      </div>

      {/* Chat Widget */}
      <ChatWidget />
    </main>
  );
}
