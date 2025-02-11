// components/CustomInterfacesSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const CustomInterfacesSection = () => {
  const interfaces = [
    {
      title: "Chat Interface",
      description: "Experience natural conversations with agents that remember context and evolve over time.",
      image: "/api/placeholder/600/400",
      features: ["Message threading", "Rich media support", "User authentication", "Conversation history"]
    },
    {
      title: "Prompt Interface",
      description: "Receive clear, structured responses with enhanced processing and output formatting.",
      image: "/api/placeholder/600/400",
      features: ["Template system", "Variable handling", "Validation rules", "Clear output formatting"]
    },
    {
      title: "Feed Interface",
      description: "Stay informed with real-time content streams that adjust to your interests.",
      image: "/api/placeholder/600/400",
      features: ["Live updates", "Content categorization", "Custom layouts", "Interactive elements"]
    },
    {
      title: "Bot Interface",
      description: "Automate interactions and tasks with bots that integrate seamlessly across platforms.",
      image: "/api/placeholder/600/400",
      features: ["Command system", "Event handling", "Platform adaptation", "Performance analytics"]
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-medium text-gray-100">Custom Interfaces</h2>
            <p className="text-gray-400 leading-relaxed">
              Choose from a range of interfaces to interact with your agents—whether it&apos;s a conversational chat, a structured prompt, a live feed, or an automated bot.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {interfaces.map((interface_, index) => (
              <Card key={index} className="bg-[#1a1a1a]/50 border-transparent hover:border-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video relative">
                    <img src={interface_.image} alt={interface_.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-medium text-gray-100">{interface_.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{interface_.description}</p>
                    <ul className="space-y-2">
                      {interface_.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-500/90 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomInterfacesSection;
