// IntegrationToolsSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const IntegrationToolsSection = () => {
  const integrations = [
    {
      title: "Creative APIs",
      description: "Connect with specialized creative services for enhanced generation and analysis capabilities.",
      features: ["Authentication framework", "Style transfer protocols", "Creative dataset access", "Attribution tracking"]
    },
    {
      title: "Cultural Context Engine",
      description: "Access real-time cultural context data to enhance creative works with relevant references and associations.",
      features: ["Temporal mapping", "Geographical context", "Social dynamics", "Cultural trends analysis"]
    },
    {
      title: "Collaboration Networks",
      description: "Deploy your creative assets into collaborative networks that track attribution and manage revenue sharing.",
      features: ["Transparent contribution metrics", "Derivative work lineage", "Revenue distribution", "IP protection"]
    }
  ];

  return (
    <section className="py-32 relative bg-[#1a1a1a]/30">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-medium text-gray-100">Creative Integration & Collaboration</h2>
            <p className="text-gray-400 leading-relaxed">
              Connect your creative process with specialized tools, cultural context engines, and collaborative networks—enabling rich, contextually-aware creative works.
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