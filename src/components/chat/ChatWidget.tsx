'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { ChatMessage, TimeSlot } from '@/lib/types';
import { useScheduling } from '@/context/SchedulingContext';
import { mockCandidateInfo, formatDate, formatTime } from '@/lib/mock-data';
import {
  ChatState,
  initialChatState,
  getGreetingMessage,
  getPhoneCollectionMessage,
  getSuccessMessage,
  getRescheduleMessage,
  createBotMessage,
  createUserMessage,
} from '@/lib/chat-flow';
import { ChatBubble, TypingIndicator } from './ChatBubble';
import { TimeSlotPicker } from './TimeSlotPicker';
import { ConfirmationCard } from './ConfirmationCard';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [chatState, setChatState] = useState<ChatState>(initialChatState);
  const [isTyping, setIsTyping] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { getAvailableSlots, meetingPreferences, bookSlot } = useScheduling();
  const availableSlots = getAvailableSlots();

  // Meeting type is set by manager, not candidate
  const meetingType = meetingPreferences.meetingType;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addBotMessage = useCallback((content: string, component?: ChatMessage['component']) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, createBotMessage(content, component)]);
    }, 800);
  }, []);

  // Initialize chat when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = getGreetingMessage(
        mockCandidateInfo.name,
        mockCandidateInfo.jobTitle,
        mockCandidateInfo.company
      );
      addBotMessage(greeting, 'time_slots');
      setChatState(prev => ({ ...prev, step: 'show_slots', selectedMeetingType: meetingType }));
    }
  }, [isOpen, messages.length, addBotMessage, meetingType]);

  const handleSlotSelect = (slot: TimeSlot) => {
    setChatState(prev => ({ ...prev, selectedSlot: slot }));
    setMessages(prev => [
      ...prev,
      createUserMessage(`${formatDate(slot.date)} at ${formatTime(slot.startTime)}`),
    ]);

    // If phone interview, collect phone number first
    if (meetingType === 'phone') {
      addBotMessage(getPhoneCollectionMessage(), 'phone_input');
      setChatState(prev => ({ ...prev, step: 'collect_phone' }));
    } else {
      // Otherwise go straight to confirmation
      setChatState(prev => ({ ...prev, step: 'confirm' }));
      addBotMessage('Please confirm your interview details:', 'confirmation');
    }
  };

  const handlePhoneSubmit = () => {
    if (!phoneInput.trim()) return;

    setChatState(prev => ({ ...prev, phoneNumber: phoneInput }));
    setMessages(prev => [...prev, createUserMessage(phoneInput)]);
    setPhoneInput('');

    setChatState(prev => ({ ...prev, step: 'confirm' }));
    addBotMessage('Please confirm your interview details:', 'confirmation');
  };

  const handleConfirm = () => {
    if (!chatState.selectedSlot || !chatState.selectedMeetingType) return;

    // Book the slot
    bookSlot(
      chatState.selectedSlot,
      mockCandidateInfo.name,
      mockCandidateInfo.email,
      chatState.phoneNumber || undefined,
      mockCandidateInfo.jobTitle,
      chatState.selectedMeetingType
    );

    setChatState(prev => ({ ...prev, isConfirmed: true, step: 'success' }));
    setMessages(prev => [...prev, createUserMessage('Confirmed!')]);
    addBotMessage(getSuccessMessage(chatState.selectedMeetingType));
  };

  const handleReschedule = () => {
    setChatState(prev => ({
      ...prev,
      step: 'show_slots',
      selectedSlot: null,
      isConfirmed: false,
    }));
    setMessages(prev => [...prev, createUserMessage('I need to reschedule')]);
    addBotMessage(getRescheduleMessage(), 'time_slots');
  };

  const getMeetingDetails = () => {
    if (meetingType === 'in-person') {
      return { location: meetingPreferences.defaultLocation };
    } else if (meetingType === 'video') {
      return { videoLink: meetingPreferences.videoLink };
    } else if (meetingType === 'phone') {
      return { phoneNumber: chatState.phoneNumber || meetingPreferences.phoneNumber };
    }
    return {};
  };

  const renderInteractiveComponent = (message: ChatMessage) => {
    if (!message.component) return null;

    switch (message.component) {
      case 'time_slots':
        if (chatState.step === 'show_slots') {
          return (
            <TimeSlotPicker
              slots={availableSlots}
              selectedSlot={chatState.selectedSlot}
              onSelectSlot={handleSlotSelect}
            />
          );
        }
        return null;

      case 'phone_input':
        if (chatState.step === 'collect_phone') {
          return (
            <div className="bg-white/5 rounded-xl p-4 animate-fade-in">
              <div className="flex gap-2">
                <Input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handlePhoneSubmit()}
                />
                <Button onClick={handlePhoneSubmit}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          );
        }
        return null;

      case 'confirmation':
        if ((chatState.step === 'confirm' || chatState.step === 'success') && chatState.selectedSlot && chatState.selectedMeetingType) {
          return (
            <ConfirmationCard
              slot={chatState.selectedSlot}
              meetingType={chatState.selectedMeetingType}
              meetingDetails={getMeetingDetails()}
              isConfirmed={chatState.isConfirmed}
              onConfirm={handleConfirm}
              onReschedule={handleReschedule}
            />
          );
        }
        return null;

      default:
        return null;
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-[#007BE5] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>

      {/* Chat Panel - Mobile responsive */}
      <div
        className={`fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[380px] h-[100dvh] sm:h-[600px] sm:max-h-[80vh] bg-[#0f1629] border-t sm:border border-white/10 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
          <div>
            <h3 className="font-semibold text-white">Schedule Interview</h3>
            <p className="text-xs text-gray-400">{mockCandidateInfo.company}</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="space-y-3">
              <ChatBubble message={message} />
              {message.type === 'bot' && renderInteractiveComponent(message)}
            </div>
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </>
  );
}
