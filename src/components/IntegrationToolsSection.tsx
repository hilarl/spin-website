// components/IntegrationToolsSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const IntegrationToolsSection = () => {
  const integrations = [
    {
      title: "External APIs",
      description: "Connect with any API or custom protocol for endless integration possibilities.",
      features: ["Robust authentication", "Efficient request handling", "Smart caching", "Seamless data flow"]
    },
    {
      title: "Real-time Search",
      description: "Leverage live data streams to deliver up-to-date insights in real time.",
      features: ["Multi-source aggregation", "Smart filtering", "Instant updates", "Accurate results"]
    },
    {
      title: "Platform Deployment",
      description: "Deploy your agents as bots on popular platforms like Discord, Slack, or Telegram with ease.",
      features: ["Cross-platform compatibility", "User-friendly setup", "Customizable interfaces", "Streamlined integration"]
    }
  ];

  return (
    <section className="py-32 relative bg-[#1a1a1a]/30">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-medium text-gray-100">Integration & Deployment</h2>
            <p className="text-gray-400 leading-relaxed">
              Easily connect your agents to any system and deploy them across platforms—from web apps to messaging bots—bringing distributed intelligence wherever you need it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <Card key={index} className="bg-[#141414]/50 border-transparent hover:border-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-xl font-medium text-gray-100">{integration.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{integration.description}</p>
                  <ul className="space-y-3">
                    {integration.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-500/90 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationToolsSection;
