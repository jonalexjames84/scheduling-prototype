'use client';

import { useScheduling } from '@/context/SchedulingContext';
import { InterviewCard } from '@/components/dashboard/InterviewCard';
import { useState } from 'react';

type FilterStatus = 'all' | 'scheduled' | 'confirmed' | 'cancelled';

export default function InterviewsPage() {
  const { interviews } = useScheduling();
  const [filter, setFilter] = useState<FilterStatus>('all');

  const filteredInterviews = interviews
    .filter(i => filter === 'all' || i.status === filter)
    .sort((a, b) => new Date(a.slot.date).getTime() - new Date(b.slot.date).getTime());

  const filters: { value: FilterStatus; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'scheduled', label: 'Scheduled' },
    { value: 'confirmed', label: 'Confirmed' },
    { value: 'cancelled', label: 'Cancelled' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Interviews</h1>
        <p className="text-gray-400">Manage and view all scheduled interviews</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f.value
                ? 'bg-[#007BE5] text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Interview List */}
      {filteredInterviews.length === 0 ? (
        <div className="text-center py-12 bg-white/5 rounded-xl">
          <p className="text-gray-400">No interviews found</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredInterviews.map(interview => (
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>
      )}
    </div>
  );
}
