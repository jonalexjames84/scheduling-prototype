'use client';

import React, { useState } from 'react';
import { useScheduling } from '@/context/SchedulingContext';
import { AvailabilityBlock } from '@/lib/types';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const HOURS = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);

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
    dayIndex: index,
    blocks: availabilityBlocks.filter(b => b.dayOfWeek === index),
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Weekly Availability</h2>
          <p className="text-sm text-gray-400">Set your available times for interviews</p>
        </div>
        <Button onClick={() => setIsAdding(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Time Block
        </Button>
      </div>

      {/* Add Block Modal */}
      {isAdding && (
        <Card className="p-4">
          <h3 className="font-medium text-white mb-4">Add Availability Block</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Day</label>
              <select
                value={newBlock.dayOfWeek}
                onChange={(e) => setNewBlock({ ...newBlock, dayOfWeek: parseInt(e.target.value) })}
                className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white"
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
                className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white"
              >
                {HOURS.map(h => (
                  <option key={h} value={h} className="bg-[#0f1629]">{h}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">End Time</label>
              <select
                value={newBlock.endTime}
                onChange={(e) => setNewBlock({ ...newBlock, endTime: e.target.value })}
                className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white"
              >
                {HOURS.map(h => (
                  <option key={h} value={h} className="bg-[#0f1629]">{h}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="secondary" onClick={() => setIsAdding(false)}>Cancel</Button>
            <Button onClick={handleAddBlock}>Add Block</Button>
          </div>
        </Card>
      )}

      {/* Weekly Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
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
                    <span className="text-sm text-white">
                      {block.startTime} - {block.endTime}
                    </span>
                    <button
                      onClick={() => removeAvailabilityBlock(block.id)}
                      className="p-1 hover:bg-red-500/20 rounded transition-colors"
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
    </div>
  );
}
