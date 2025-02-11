// components/ChainBuilder/ChainBuilder.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import ChainList from './ChainList';
import { initialData } from '../initialData';
import { ChainItem, ChatMessage, FeedPost, MarketData } from '../types';
import PreviewTabs from '../Preview/PreviewTabs';

const ChainBuilder = () => {
  const [chain, setChain] = useState<ChainItem[]>([
    { 
      type: 'primaryModel', 
      value: 'Llama 3.2',
      label: 'Primary Model',
      description: 'Foundation Model'
    }
  ]);
  
  const [previewTweets] = useState<string[]>(initialData.previewTweets);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(initialData.chatMessages);
  const [feedPosts] = useState<FeedPost[]>(initialData.feedPosts);
  const [currentTweet, setCurrentTweet] = useState<number>(0);
  const [isConfiguring, setIsConfiguring] = useState<boolean>(true);
  const [marketData] = useState<MarketData[]>(initialData.marketData);
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [visiblePosts, setVisiblePosts] = useState<number>(0);
  const [newMessage, setNewMessage] = useState<string>('');
  
  const previewRef = useRef<HTMLDivElement>(null);

  // Remove the auto-deployment trigger from here.
  const addToChain = () => {
    const nextOption = initialData.chainOptions[chain.length - 1];
    if (nextOption) {
      setChain([...chain, { 
        type: nextOption.type, 
        value: nextOption.value,
        label: nextOption.label,
        description: nextOption.description,
        services: nextOption.services,
        storageOptions: nextOption.storageOptions,
        models: nextOption.models,
        creditInfo: nextOption.creditInfo
      }]);
    }
    // Do not set isConfiguring to false here!
  };

  // When the user clicks the deploy button, trigger the preview.
  const handleCreateAgent = () => {
    setIsConfiguring(false);
    setVisibleMessages(0);
    setVisiblePosts(0);
    previewRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const newChatMessage: ChatMessage = {
      role: 'user',
      content: newMessage,
      timestamp: new Date()
    };
    
    setChatMessages([...chatMessages, newChatMessage]);
    setNewMessage('');
    setVisibleMessages(prev => prev + 1);
  };

  useEffect(() => {
    if (!isConfiguring) {
      const messageInterval = setInterval(() => {
        setVisibleMessages(prev => 
          prev < chatMessages.length ? prev + 1 : prev
        );
      }, 500);
  
      const postInterval = setInterval(() => {
        setVisiblePosts(prev => 
          prev < feedPosts.length ? prev + 1 : prev
        );
      }, 700);
  
      const tweetInterval = setInterval(() => {
        setCurrentTweet((prev) => (prev + 1) % previewTweets.length);
      }, 3000);
  
      return () => {
        clearInterval(messageInterval);
        clearInterval(postInterval);
        clearInterval(tweetInterval);
      };
    }
  }, [isConfiguring, chatMessages.length, feedPosts.length, previewTweets.length]);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="py-32 relative"
    >
      <div className="container max-w-7xl mx-auto md:px-6" id="agent-spin">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="grid lg:grid-cols-2 grid-cols-1 gap-8"
        >
          {/* Left: Chain Menu */}
          <ChainList 
            chain={chain} 
            isConfiguring={isConfiguring} 
            onAddToChain={addToChain} 
            onDeployAgent={handleCreateAgent}
            chainOptionsLength={initialData.chainOptions.length}
          />

          {/* Right: Preview */}
          <div ref={previewRef}>
            <h3 className="text-sm font-medium mb-4 text-gray-500">Preview</h3>
            {isConfiguring ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center h-24 text-gray-400 text-sm"
              >
                Use the menu to create your agent and preview it here
              </motion.div>
            ) : (
              <PreviewTabs
                previewTweets={previewTweets}
                currentTweet={currentTweet}
                chatMessages={chatMessages}
                visibleMessages={visibleMessages}
                feedPosts={feedPosts}
                visiblePosts={visiblePosts}
                newMessage={newMessage}
                handleSendMessage={handleSendMessage}
                setNewMessage={setNewMessage}
                marketData={marketData}
              />
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ChainBuilder;
