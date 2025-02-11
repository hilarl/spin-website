"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const featureCards = [
  {
    title: "Broad AI Compatibility",
    description: "Effortlessly connect and use the most powerful models available today.",
    imageUrl: "/ai-logos.png",
    delay: 0.2
  },
  {
    title: "Agentic Credits",
    description: "Fuel innovation with our AI backed token economy on a hardware-rooted distributed ledger system.",
    imageUrl: "/tokens.png",
    delay: 0.3
  },
  {
    title: "No-Code Pipeline",
    description: "Launch custom agents without writing a single line of code.",
    imageUrl: "/dsl.png",
    delay: 0.4
  }
];

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-24"
    >
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

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-50">
            SPIN
          </h1>
          <span className="text-base md:text-xl tracking-[0.3em] font-medium text-gray-400 mt-1">
            COMPUTER
          </span>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A computing platform for distributed intelligence—where tokenized agents can be run in secure environments.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button
              className="bg-green-500/10 hover:bg-white/15 text-white rounded-full px-6 py-5 md:px-8 md:py-6 text-base md:text-lg backdrop-blur-sm border border-green-500/15"
              asChild
            >
              <Link href="/#agent-spin" className="text-green-100 font-thin leading-tight">Spin an Agent</Link>
            </Button>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-32 max-w-6xl mx-auto">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay }}
              className={`relative group ${index === 1 ? 'translate-y-12' : ''}`}
            >
              <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/5 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/20 mb-4 relative">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
    </motion.section>
  );
};

export default HeroSection;