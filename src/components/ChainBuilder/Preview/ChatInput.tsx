// components/Preview/ChatInput.tsx
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface ChatInputProps {
  newMessage: string;
  setNewMessage: (value: string) => void;
  handleSendMessage: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ newMessage, setNewMessage, handleSendMessage }) => {
  return (
    <div className="flex items-center gap-2 mt-4 border-t border-white/5 pt-4">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        placeholder="Type a message..."
        className="flex-1 bg-[#1a1a1a] text-gray-300 text-sm rounded-xl px-4 py-2 border border-white/5 focus:outline-none focus:border-green-500/20"
      />
      <Button
        size="icon"
        variant="outline"
        onClick={handleSendMessage}
        className="bg-[#1a1a1a] border-white/5 hover:bg-[#222] text-gray-300"
      >
        <Send size={16} />
      </Button>
    </div>
  );
};

export default ChatInput;
