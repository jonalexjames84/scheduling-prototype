'use client';

import { useScheduling } from '@/context/SchedulingContext';
import { Card, CardContent } from '@/components/ui/Card';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { formatDate, formatTime } from '@/lib/mock-data';
import Link from 'next/link';

export default function ManagerOverview() {
  const { interviews, availabilityBlocks } = useScheduling();

  const upcomingInterviews = interviews
    .filter(i => i.status !== 'cancelled')
    .filter(i => new Date(i.slot.date) >= new Date())
    .sort((a, b) => new Date(a.slot.date).getTime() - new Date(b.slot.date).getTime())
    .slice(0, 5);

  const confirmedCount = interviews.filter(i => i.status === 'confirmed').length;
  const scheduledCount = interviews.filter(i => i.status === 'scheduled').length;
  const totalAvailabilityHours = availabilityBlocks.reduce((acc, block) => {
    const [startH] = block.startTime.split(':').map(Number);
    const [endH] = block.endTime.split(':').map(Number);
    return acc + (endH - startH);
  }, 0);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Dashboard Overview</h1>
        <p className="text-sm text-gray-400">Manage your interview scheduling</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card className="p-4 sm:p-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-[#007BE5]/20 rounded-xl">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#007BE5]" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white">{scheduledCount + confirmedCount}</p>
              <p className="text-xs sm:text-sm text-gray-400">Total</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-green-500/20 rounded-xl">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white">{confirmedCount}</p>
              <p className="text-xs sm:text-sm text-gray-400">Confirmed</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-yellow-500/20 rounded-xl">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white">{scheduledCount}</p>
              <p className="text-xs sm:text-sm text-gray-400">Pending</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-purple-500/20 rounded-xl">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white">{totalAvailabilityHours}h</p>
              <p className="text-xs sm:text-sm text-gray-400">Weekly</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Upcoming Interviews */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-white">Upcoming Interviews</h2>
          <Link href="/manager/interviews" className="text-sm text-[#007BE5] hover:underline">
            View All
          </Link>
        </div>

        {upcomingInterviews.length === 0 ? (
          <Card className="p-6 sm:p-8 text-center">
            <p className="text-gray-400">No upcoming interviews scheduled</p>
          </Card>
        ) : (
          <div className="space-y-3">
            {upcomingInterviews.map(interview => (
              <Card key={interview.id} hover className="p-3 sm:p-4">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#007BE5]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#007BE5] font-medium">
                        {interview.candidateName.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white truncate">{interview.candidateName}</p>
                      <p className="text-xs sm:text-sm text-gray-400">{formatTime(interview.slot.startTime)} · {formatDate(interview.slot.date)}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                      interview.status === 'confirmed'
                        ? 'bg-green-500/20 text-green-300'
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {interview.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <Link href="/manager/availability">
          <Card hover className="p-4 sm:p-6 h-full">
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#007BE5] mb-2 sm:mb-3" />
            <h3 className="font-semibold text-white mb-1">Set Availability</h3>
            <p className="text-xs sm:text-sm text-gray-400">Configure your weekly availability</p>
          </Card>
        </Link>

        <Link href="/manager/calendar">
          <Card hover className="p-4 sm:p-6 h-full">
            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-[#007BE5] mb-2 sm:mb-3" />
            <h3 className="font-semibold text-white mb-1">View Calendar</h3>
            <p className="text-xs sm:text-sm text-gray-400">See all scheduled interviews</p>
          </Card>
        </Link>

        <Link href="/manager/settings">
          <Card hover className="p-4 sm:p-6 h-full">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#007BE5] mb-2 sm:mb-3" />
            <h3 className="font-semibold text-white mb-1">Meeting Settings</h3>
            <p className="text-xs sm:text-sm text-gray-400">Configure meeting preferences</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
