import Link from 'next/link';
import { MessageCircle, LayoutDashboard, Calendar, ArrowRight, FileText, Code, RefreshCw, AlertTriangle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1629] flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Scheduling Tool Prototype
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            A frontend-only prototype demonstrating interview scheduling with a candidate chat widget and hiring manager dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/prd"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-[#007BE5]/50 transition-all"
            >
              <FileText className="w-4 h-4 text-[#007BE5]" />
              Product Requirements (PRD)
            </Link>
            <Link
              href="/trd"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-green-500/50 transition-all"
            >
              <Code className="w-4 h-4 text-green-400" />
              Technical Requirements (TRD)
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-3">
            <Link
              href="/shift-swap-prd"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-orange-500/50 transition-all"
            >
              <RefreshCw className="w-4 h-4 text-orange-400" />
              Shift Swap PRD
            </Link>
            <Link
              href="/shift-swap-trd"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-orange-500/50 transition-all"
            >
              <AlertTriangle className="w-4 h-4 text-orange-400" />
              Shift Swap TRD
            </Link>
          </div>
        </div>

        {/* Demo Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Candidate Demo */}
          <Link
            href="/candidate"
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#007BE5]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-[#007BE5]/20 flex items-center justify-center group-hover:bg-[#007BE5]/30 transition-colors">
                <MessageCircle className="w-7 h-7 text-[#007BE5]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Candidate Experience</h2>
                <p className="text-sm text-gray-400">Chat Widget Demo</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Experience the interview scheduling flow from the candidate&apos;s perspective. Book interviews through an interactive chat widget.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#007BE5]" />
                Select available time slots
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#007BE5]" />
                View meeting type set by manager
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#007BE5]" />
                Receive confirmation with meeting details
              </li>
            </ul>
            <div className="flex items-center text-[#007BE5] font-medium group-hover:gap-3 gap-2 transition-all">
              Try Candidate Demo
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>

          {/* Manager Demo */}
          <Link
            href="/manager"
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#007BE5]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-[#007BE5]/20 flex items-center justify-center group-hover:bg-[#007BE5]/30 transition-colors">
                <LayoutDashboard className="w-7 h-7 text-[#007BE5]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Manager Dashboard</h2>
                <p className="text-sm text-gray-400">Admin Controls</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Manage availability, view scheduled interviews, and configure meeting settings from the hiring manager&apos;s perspective.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#007BE5]" />
                Set weekly availability
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#007BE5]" />
                View calendar and upcoming interviews
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#007BE5]" />
                Configure meeting preferences
              </li>
            </ul>
            <div className="flex items-center text-[#007BE5] font-medium group-hover:gap-3 gap-2 transition-all">
              Open Dashboard
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            This is a frontend-only prototype. All data is mock/hardcoded.
          </p>
        </div>
      </div>
    </main>
  );
}
