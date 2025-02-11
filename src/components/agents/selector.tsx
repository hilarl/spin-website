"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Smile, TrendingUp, Heart } from 'lucide-react';
import ComedianShowcase from './ComedianShowcase';
import MarketResearchFeed from './MarketResearchFeed';
import LoveAdvisorShowcase from './LoveAdvisorShowcase';

const AgentShowcase = () => {
  const agents = [
    {
      id: 'comedian',
      name: 'Comedy Bud',
      component: ComedianShowcase
    },
    {
      id: 'market',
      name: 'Market Insight',
      component: MarketResearchFeed
    },
    {
      id: 'love',
      name: 'Dr. Love',
      component: LoveAdvisorShowcase
    }
  ];

  return (
    <div className="w-full p-6 md:p-2">
      <Tabs defaultValue="comedian" className="w-full">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-medium text-gray-100 mb-2">Use cases</h2>
          <p className="text-gray-400 max-w-2xl mb-6">
            Explore our collection of specialized AI agents designed to assist with different tasks
          </p>
          
          <TabsList className="bg-transparent border-b border-white/5">
            {agents.map(agent => (
              <TabsTrigger
                key={agent.id}
                value={agent.id}
                className="px-6 py-2 text-sm data-[state=active]:bg-transparent data-[state=active]:text-red-400 transition-colors"
              >
                {agent.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <AnimatePresence mode="wait">
          {agents.map(agent => (
            <TabsContent key={agent.id} value={agent.id}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut'
                }}
              >
                {React.createElement(agent.component)}
              </motion.div>
            </TabsContent>
          ))}
        </AnimatePresence>
      </Tabs>
    </div>
  );
};

export default AgentShowcase;