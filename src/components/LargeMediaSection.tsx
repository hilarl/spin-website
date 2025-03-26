// LargeMediaSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

const LargeMediaSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-24">
          {/* Creative Intelligence Visualization */}
          <div className="max-w-6xl mx-auto">
            <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video relative group">
                  <img src="/api/placeholder/1200/675" alt="Creative Intelligence Visualization" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <PlayCircle className="absolute bottom-6 left-6 h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Experience SPIN Computer's creative intelligence in action—analyzing cultural context, emotional depth, and generating contextually-aware content.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LargeMediaSection;