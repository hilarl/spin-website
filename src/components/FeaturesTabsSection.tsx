// components/FeaturesTabsSection.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, Brain, Code, Database, GitBranch, Sparkles } from 'lucide-react';

const sections = {
  framework: {
    title: "Agent-based Computing",
    description: "Build intelligent agents using agent blueprints defined in bytesized code. Our distributed agent-based computing system deploys your agent blueprints into secure environments for running the code—enabling them to think, learn, and interact seamlessly.",
    features: [
      {
        icon: <Code className="h-6 w-6 text-green-500/90" />,
        title: "Domain Specific Language",
        description: "Define agent blueprints in just a few lines of bytesized code—clear, concise, and secure."
      },
      {
        icon: <GitBranch className="h-6 w-6 text-green-500/90" />,
        title: "Custom Chaining",
        description: "Easily build chain-based processing pipelines to customize your agent’s behavior."
      },
      {
        icon: <Bot className="h-6 w-6 text-green-500/90" />,
        title: "Dynamic Interfaces",
        description: "Interact with your agents through chat, prompts, feeds, or bots—all integrated into a distributed system."
      }
    ]
  },
  credits: {
    title: "Integrated Economic Model",
    description: "Our token economy is powered by a hardware-rooted distributed ledger system. This ensures that every agent blueprint receives fair value through native tokens, dynamic pricing, and automated market making.",
    features: [
      {
        icon: <Database className="h-6 w-6 text-green-500/90" />,
        title: "Agent Credits",
        description: "Every agent blueprint runs on its own token, ensuring transparent value and efficient resource allocation."
      },
      {
        icon: <Sparkles className="h-6 w-6 text-green-500/90" />,
        title: "Market Making",
        description: "Seamlessly swap and trade tokens as demand shifts, driving a vibrant token economy."
      },
      {
        icon: <Brain className="h-6 w-6 text-green-500/90" />,
        title: "Fair Pricing",
        description: "Real-time adjustments maintain a balanced value exchange across the system."
      }
    ]
  },
  development: {
    title: "Developer Experience",
    description: "Power your creativity with our robust toolkit and comprehensive documentation. Our platform provides everything you need—from intuitive interfaces to in-depth technical components—to build, test, and deploy your intelligent agent blueprints.",
    features: [
      {
        title: "Core Components",
        items: [
          "Modern Next.js Frontend",
          "Type-safe Prisma ORM",
          "Real-time Redis features",
          "Powerful GraphQL API"
        ]
      },
      {
        title: "Tools & Services",
        items: [
          "Custom agent creation toolkit",
          "Credit and portfolio management",
          "Live market data feeds",
          "Integration with top AI providers"
        ]
      }
    ]
  }
};

const FeaturesTabsSection = () => {
  const [activeSection, setActiveSection] = useState('framework');

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <Tabs defaultValue="framework" value={activeSection} onValueChange={setActiveSection} className="space-y-16">
          <div className="flex justify-center">
            <TabsList className="bg-[#1a1a1a]/50 border border-white/5 backdrop-blur-sm rounded-full p-1">
              {Object.keys(sections).map((tab) => (
                <TabsTrigger key={tab} value={tab} className="px-8 py-2 rounded-full data-[state=active]:bg-white/10 text-sm">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <AnimatePresence mode="wait">
            {Object.entries(sections).map(([key, section]) => (
              <TabsContent key={key} value={key}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-16">
                  <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="text-3xl font-medium text-gray-100">{section.title}</h2>
                    <p className="text-gray-400 leading-relaxed">{section.description}</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {section.features.map((feature, index) => (
                      <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                        <Card className="bg-[#1a1a1a]/50 border-transparent hover:border-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300">
                          <CardContent className="p-6 space-y-4">
                            {'icon' in feature && feature.icon && (
                              <div className="p-2 bg-[#141414] rounded-lg w-fit">
                                {feature.icon}
                              </div>
                            )}
                            <h3 className="text-lg font-medium text-gray-100">{feature.title}</h3>
                            {'description' in feature ? (
                              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            ) : (
                              <ul className="space-y-2">
                                {feature.items.map((item, idx) => (
                                  <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                                    <div className="w-1 h-1 bg-green-500/90 rounded-full" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturesTabsSection;
