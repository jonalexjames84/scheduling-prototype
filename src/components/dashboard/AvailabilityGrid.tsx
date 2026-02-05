'use client';

import React, { useState } from 'react';
import { useScheduling } from '@/context/SchedulingContext';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Generate hours with AM/PM format
const HOURS = Array.from({ length: 24 }, (_, i) => {
  const hour = i;
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return {
    value: `${String(hour).padStart(2, '0')}:00`,
    label: `${displayHour}:00 ${period}`,
  };
});

// Convert 24h time to 12h format
const formatTimeDisplay = (time: string): string => {
  const [hour, min] = time.split(':').map(Number);
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${String(min).padStart(2, '0')} ${period}`;
};

export function AvailabilityGrid() {
  const { availabilityBlocks, addAvailabilityBlock, removeAvailabilityBlock } = useScheduling();
  const [isAdding, setIsAdding] = useState(false);
  const [newBlock, setNewBlock] = useState({
    dayOfWeek: 1,
    startTime: '09:00',
    endTime: '17:00',
  });

  const handleAddBlock = () => {
    addAvailabilityBlock(newBlock);
    setIsAdding(false);
    setNewBlock({ dayOfWeek: 1, startTime: '09:00', endTime: '17:00' });
  };

  const groupedBlocks = DAYS.map((day, index) => ({
    day,
    dayShort: DAYS_SHORT[index],
    dayIndex: index,
    blocks: availabilityBlocks.filter(b => b.dayOfWeek === index),
  }));

  // Filter to only weekdays for mobile
  const weekdayBlocks = groupedBlocks.filter(d => d.dayIndex >= 1 && d.dayIndex <= 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-white">Weekly Availability</h2>
          <p className="text-sm text-gray-400">Set your available times for interviews</p>
        </div>
        <Button onClick={() => setIsAdding(true)} className="w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Add Time Block
        </Button>
      </div>

      {/* Add Block Modal */}
      {isAdding && (
        <Card className="p-4">
          <h3 className="font-medium text-white mb-4">Add Availability Block</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Day</label>
              <select
                value={newBlock.dayOfWeek}
                onChange={(e) => setNewBlock({ ...newBlock, dayOfWeek: parseInt(e.target.value) })}
                className="w-full px-3 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white"
              >
                {DAYS.map((day, i) => (
                  <option key={i} value={i} className="bg-[#0f1629]">{day}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Start Time</label>
              <select
                value={newBlock.startTime}
                onChange={(e) => setNewBlock({ ...newBlock, startTime: e.target.value })}
                className="w-full px-3 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white"
              >
                {HOURS.map(h => (
                  <option key={h.value} value={h.value} className="bg-[#0f1629]">{h.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">End Time</label>
              <select
                value={newBlock.endTime}
                onChange={(e) => setNewBlock({ ...newBlock, endTime: e.target.value })}
                className="w-full px-3 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white"
              >
                {HOURS.map(h => (
                  <option key={h.value} value={h.value} className="bg-[#0f1629]">{h.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
            <Button variant="secondary" onClick={() => setIsAdding(false)} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button onClick={handleAddBlock} className="w-full sm:w-auto">
              Add Block
            </Button>
          </div>
        </Card>
      )}

      {/* Mobile: List view (weekdays only) */}
      <div className="md:hidden space-y-3">
        {weekdayBlocks.map(({ day, dayIndex, blocks }) => (
          <Card key={dayIndex} className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-white">{day}</h3>
              {blocks.length === 0 && (
                <span className="text-xs text-gray-500">No availability</span>
              )}
            </div>
            {blocks.length > 0 && (
              <div className="space-y-2">
                {blocks.map(block => (
                  <div
                    key={block.id}
                    className="flex items-center justify-between p-3 bg-[#007BE5]/20 border border-[#007BE5]/30 rounded-lg"
                  >
                    <span className="text-sm text-white font-medium">
                      {formatTimeDisplay(block.startTime)} - {formatTimeDisplay(block.endTime)}
                    </span>
                    <button
                      onClick={() => removeAvailabilityBlock(block.id)}
                      className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Desktop: Grid view (all days) */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-7 gap-4">
        {groupedBlocks.map(({ day, dayIndex, blocks }) => (
          <Card key={dayIndex} className="p-4">
            <h3 className={`font-medium mb-3 ${
              dayIndex === 0 || dayIndex === 6 ? 'text-gray-500' : 'text-white'
            }`}>
              {day}
            </h3>
            {blocks.length === 0 ? (
              <p className="text-sm text-gray-500">No availability</p>
            ) : (
              <div className="space-y-2">
                {blocks.map(block => (
                  <div
                    key={block.id}
                    className="flex items-center justify-between p-2 bg-[#007BE5]/20 border border-[#007BE5]/30 rounded-lg"
                  >
                    <span className="text-xs text-white">
                      {formatTimeDisplay(block.startTime)} - {formatTimeDisplay(block.endTime)}
                    </span>
                    <button
                      onClick={() => removeAvailabilityBlock(block.id)}
                      className="p-1 hover:bg-red-500/20 rounded transition-colors"
                    >
                      <Trash2 className="w-3 h-3 text-red-400" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
