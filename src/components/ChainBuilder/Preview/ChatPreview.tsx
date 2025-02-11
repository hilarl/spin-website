// components/Preview/ChatPreview.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChatMessage } from '../types';

interface ChatPreviewProps {
  chatMessages: ChatMessage[];
  visibleMessages: number;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const messageVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const ChatPreview: React.FC<ChatPreviewProps> = ({ chatMessages, visibleMessages }) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-4">
      {chatMessages.slice(0, visibleMessages).map((message, index) => (
        <motion.div
          key={index}
          variants={messageVariants}
          className={`flex items-start gap-3 ${message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'}`}
        >
          <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
            message.role === 'assistant'
              ? 'bg-[#1a1a1a] text-gray-300'
              : 'bg-green-900/20 text-green-500'
          }`}>
            {message.content}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ChatPreview;
