// components/Preview/PreviewTabs.tsx
"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BotPreview from './BotPreview';
import ChatPreview from './ChatPreview';
import FeedPreview from './FeedPreview';
import MarketChart from './MarketChart';
import ChatInput from './ChatInput';
import { ChatMessage, MarketData, FeedPost } from '../types';

interface PreviewTabsProps {
  previewTweets: string[];
  currentTweet: number;
  chatMessages: ChatMessage[];
  visibleMessages: number;
  feedPosts: FeedPost[];
  visiblePosts: number;
  newMessage: string;
  handleSendMessage: () => void;
  setNewMessage: (value: string) => void;
  marketData: MarketData[];
}

const PreviewTabs: React.FC<PreviewTabsProps> = ({
  previewTweets,
  currentTweet,
  chatMessages,
  visibleMessages,
  feedPosts,
  visiblePosts,
  newMessage,
  handleSendMessage,
  setNewMessage,
  marketData,
}) => {
  return (
    <Tabs defaultValue="bot" className="w-full">
      <TabsList className="w-full bg-transparent border-b border-white/5 mb-4">
        <TabsTrigger 
          value="bot" 
          className="flex-1 data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-gray-300"
        >
          Bot
        </TabsTrigger>
        <TabsTrigger 
          value="chat" 
          className="flex-1 data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-gray-300"
        >
          Chat
        </TabsTrigger>
        <TabsTrigger 
          value="feed" 
          className="flex-1 data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-gray-300"
        >
          Feed
        </TabsTrigger>
      </TabsList>

      <div className="bg-[#141414] rounded-xl border border-white/5">
        <TabsContent value="bot" className="p-6">
          <BotPreview tweet={previewTweets[currentTweet]} />
        </TabsContent>

        <TabsContent value="chat" className="p-6">
          <ChatPreview chatMessages={chatMessages} visibleMessages={visibleMessages} />
          <ChatInput 
            newMessage={newMessage} 
            setNewMessage={setNewMessage} 
            handleSendMessage={handleSendMessage}
          />
        </TabsContent>

        <TabsContent value="feed" className="p-6">
          <FeedPreview feedPosts={feedPosts} visiblePosts={visiblePosts} />
        </TabsContent>
      </div>

      <div className="mt-4 p-6 bg-[#141414] rounded-xl border border-white/5">
        <h3 className="text-sm font-medium mb-4 text-gray-500">MU$IC Market Trend</h3>
        <div className="h-48">
          <MarketChart marketData={marketData} />
        </div>
      </div>
    </Tabs>
  );
};

export default PreviewTabs;
