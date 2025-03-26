// FinalCTA.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  const stats = [
    { number: "4096", label: "Embedding Dimensions" },
    { number: "$10M+", label: "Creative Assets" },
    { number: "99.9%", label: "Attribution Accuracy" },
    { number: "100K+", label: "Cultural Contexts" }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium text-gray-100">Join the Creative Intelligence Revolution</h2>
          <p className="text-gray-400 leading-relaxed">
            Explore SPIN Computer's revolutionary creative intelligence platform—where human imagination meets artificial intelligence in a collaborative ecosystem.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white/10 hover:bg-white/15 text-white rounded-full px-8 py-6 text-lg backdrop-blur-sm border border-white/5">
              Start Creating
            </Button>
            <Button variant="outline" className="text-white border-white/10 hover:bg-white/5 rounded-full px-8 py-6 text-lg">
              Explore Whitepaper
            </Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-4 gap-8 max-w-4xl mx-auto mt-24">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="text-center space-y-2">
              <div className="text-3xl font-medium text-gray-100">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;