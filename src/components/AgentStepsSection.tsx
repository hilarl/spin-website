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

const SpinProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Create the Blueprint",
      icon: FileJson2,
      description: "Define your agent's configuration using the lightweight SPIN Language. Specify models, data access patterns, and service integrations in a simple, declarative format."
    },
    {
      step: "02",
      title: "Create Pipeline Chain",
      icon: GitBranch,
      description: "Design your workflow pipeline, connecting models, services, and data processing steps. Chain together components to create complex, multi-step processes."
    },
    {
      step: "03",
      title: "Containerize & Deploy",
      icon: Container,
      description: "SPIN automatically containerizes your bytesized code and deploys it securely. Runs in isolated environments with dynamic scaling and edge computing capabilities."
    },
    {
      step: "04",
      title: "Choose Interface",
      icon: Layout,
      description: "Select your agent's interface type - chat UI for conversational interactions, feed for content streams, or bot for automated tasks."
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
              Design Bespoke Agents
            </h2>
            <p className="text-gray-400 leading-relaxed">
              A simple four-step process to design, build, and deploy intelligent agents using SPIN Computer's
              distributed operating system.
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

export default SpinProcess;