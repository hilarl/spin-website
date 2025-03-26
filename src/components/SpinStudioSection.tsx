// SpinStudioSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

const SpinStudioSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-medium text-gray-100">SPIN Creative Studio</h2>
            <p className="text-gray-400 leading-relaxed">
              Our multimodal creative suite that transforms ideas into contextually-rich, emotionally intelligent creative works with cultural awareness.
            </p>
          </div>
          {/* Large Media Cards */}
          <div className="space-y-12">
            {/* Visual Creation */}
            <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="md:grid grid-cols-2">
                  <div className="p-12 md:flex flex-col justify-center space-y-6">
                    <h3 className="text-2xl font-medium text-neutral-200">Visual Creation</h3>
                    <p className="text-gray-400 leading-relaxed text-base md:text-xl">
                      Generate contextual imagery that considers cultural associations and emotional subtext with our comprehensive visual intelligence.
                    </p>
                    <ul className="space-y-3 text-base md:text-lg">
                      {["Cultural context preservation", "Emotional depth mapping", "Style consistency controls", "Compositional narrative"].map((feature, index) => (
                        <li key={index} className="text-gray-400 flex items-center gap-2 text-base md:text-lg">
                          <div className="w-1 h-1 bg-green-500/90 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="aspect-square relative group">
                    <img src="/mammoth.png" alt="Visual Creation" className="w-full h-full object-cover" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Narrative Generation */}
            <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="md:grid grid md:grid-cols-2">
                  <div className="aspect-video relative group">
                    <img src="/cyberpunk.png" alt="Narrative Generation" className="w-full h-full object-cover" />
                    <PlayCircle className="absolute inset-0 m-auto h-16 w-16 text-white opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-12 md:flex flex-col justify-center space-y-6">
                    <h3 className="text-2xl font-medium text-neutral-200">Narrative Intelligence</h3>
                    <p className="text-gray-400 leading-relaxed text-base md:text-xl">
                      Create stories with deep semantic understanding, emotional complexity, and cultural resonance.
                    </p>
                    <ul className="space-y-3 text-base md:text-lg">
                      {["Psychological depth modeling", "Narrative structure analysis", "Cultural reference integration", "Emotional arc optimization"].map((feature, index) => (
                        <li key={index} className="text-gray-400 flex items-center gap-2 text-base md:text-lg">
                          <div className="w-1 h-1 bg-green-500/90 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpinStudioSection;