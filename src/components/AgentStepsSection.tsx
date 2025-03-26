// AgentStepsSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileJson2, GitBranch, Container, Layout } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProcessCardProps {
  step: string;
  title: string;
  icon: React.ElementType;
  description: string;
}

const ProcessCard = ({ step, title, icon: Icon, description }: ProcessCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative"
  >
    <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm hover:bg-[#1a1a1a]/70 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-green-500" />
          </div>
          <div className="space-y-2 flex-1">
            <div className="text-xs text-green-500 font-medium">STEP {step}</div>
            <h3 className="text-base font-medium text-gray-200">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const AgentStepsSection = () => {
  const steps = [
    {
      step: "01",
      title: "Multimodal Input Analysis",
      icon: FileJson2,
      description: "Input creative content across various modalities—visual, audio, textual—for comprehensive embedding generation and semantic analysis."
    },
    {
      step: "02",
      title: "Cultural Context Integration",
      icon: GitBranch,
      description: "Enrich your content with cultural context from our knowledge graph, identifying historical influences and contemporary associations."
    },
    {
      step: "03",
      title: "Creative Potential Scoring",
      icon: Container,
      description: "Evaluate innovation, cultural resonance, and emotional depth through our creativity potential algorithms and psychological profiling."
    },
    {
      step: "04",
      title: "Generative Exploration",
      icon: Layout,
      description: "Transform your creative blueprint into varied outputs with our generative models that understand compositional narrative and emotional subtext."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-medium text-gray-100">
              Creative Intelligence Process
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Our four-step process transforms raw creative input into contextually-aware, emotionally intelligent output through SPIN Computer's distributed creative intelligence system.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <ProcessCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentStepsSection;