// DataFlow.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const workflowCards = [
  {
    title: "Multimodal Processing",
    description: "Process various creative inputs—visual, audio, textual—through specialized encoders for dimensional analysis.",
    imageUrl: "/file.png",
    delay: 0.2
  },
  {
    title: "Semantic Embedding",
    description: "Transform creative content into high-dimensional vector embeddings that capture stylistic and semantic essence.",
    imageUrl: "/vectors.png",
    delay: 0.3
  },
  {
    title: "Cultural Context",
    description: "Enrich creative analysis with cultural, historical, and emotional context from our knowledge graph system.",
    imageUrl: "/integrations.png",
    delay: 0.4
  },
  {
    title: "Creative Exploration",
    description: "Generate variations and new content with our generative models enhanced by emotional intelligence and contextual awareness.",
    imageUrl: "/ai-logos.png",
    delay: 0.5
  }
];

const DataFlow = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c1c,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-1/4 top-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-1/4 bottom-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[160px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8 max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl p-0 md:text-3xl font-medium mb-0 tracking-tight text-gray-50">
            Creative Intelligence Pipeline
          </h2>
        </motion.div>

        {/* Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {workflowCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay }}
              className="relative group"
            >
              <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/5 transition-all duration-300">
                <CardContent className="p-4 md:p-6">
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/20 mb-4 relative">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-100 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataFlow;