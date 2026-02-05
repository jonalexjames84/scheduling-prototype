'use client';

import React from 'react';
import { ChatMessage } from '@/lib/types';

interface ChatBubbleProps {
  message: ChatMessage;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isBot = message.type === 'bot';

  return (
    <div
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
    >
      <div
        className={`max-w-[85%] px-4 py-3 rounded-2xl ${
          isBot
            ? 'bg-white/10 text-white rounded-bl-md'
            : 'bg-[#007BE5] text-white rounded-br-md'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex justify-start animate-fade-in">
      <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-md">
        <div className="flex space-x-1.5">
          <div className="w-2 h-2 bg-white/50 rounded-full typing-dot" />
          <div className="w-2 h-2 bg-white/50 rounded-full typing-dot" />
          <div className="w-2 h-2 bg-white/50 rounded-full typing-dot" />
        </div>
      </div>
    </div>
  );
}
