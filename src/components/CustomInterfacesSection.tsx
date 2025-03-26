// CustomInterfacesSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const CustomInterfacesSection = () => {
  const interfaces = [
    {
      title: "Creative Profiling",
      description: "Analyze your unique creative signature and develop mathematical representations of your style.",
      image: "/api/placeholder/600/400",
      features: ["Style extraction", "Technique classification", "Influence mapping", "Quality benchmarking"]
    },
    {
      title: "Contextual Generation",
      description: "Generate content that respects cultural context, emotional nuance, and creative lineage.",
      image: "/api/placeholder/600/400",
      features: ["Cultural awareness", "Emotional intelligence", "Style consistency", "Novel combinations"]
    },
    {
      title: "Collaborative Creation",
      description: "Work alongside the AI in real-time, with transparent contribution tracking and attribution.",
      image: "/api/placeholder/600/400",
      features: ["Real-time feedback", "Contribution metrics", "Creative exploration", "Attribution tracking"]
    },
    {
      title: "Asset Management",
      description: "Manage your creative assets through our tokenized system with intellectual property protection.",
      image: "/api/placeholder/600/400",
      features: ["Creative lineage", "IP protection", "Revenue tracking", "Derivative works"]
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-medium text-gray-100">Creative Intelligence Interfaces</h2>
            <p className="text-gray-400 leading-relaxed">
              Access SPIN Computer's creative intelligence through specialized interfaces designed for different creative workflows and objectives.
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