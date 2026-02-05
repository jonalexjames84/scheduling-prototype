'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Calendar,
  Clock,
  Users,
  Settings,
  LayoutDashboard,
  ArrowLeft
} from 'lucide-react';

const navItems = [
  { href: '/manager', label: 'Overview', icon: LayoutDashboard },
  { href: '/manager/availability', label: 'Availability', icon: Clock },
  { href: '/manager/calendar', label: 'Calendar', icon: Calendar },
  { href: '/manager/interviews', label: 'Interviews', icon: Users },
  { href: '/manager/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 min-h-screen bg-white/5 border-r border-white/10 p-6 flex-col">
        {/* Logo/Back */}
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Demo</span>
        </Link>

        {/* Title */}
        <h2 className="text-xl font-semibold text-white mb-6">Manager Dashboard</h2>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-[#007BE5] text-white'
                    : 'text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-xs text-gray-500 text-center">Scheduling Prototype v1.0</p>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#0f1629] border-b border-white/10 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </Link>
          <h1 className="text-lg font-semibold text-white">Dashboard</h1>
          <div className="w-16" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0f1629] border-t border-white/10 px-2 py-2 safe-area-pb">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'text-[#007BE5]'
                    : 'text-gray-500'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
