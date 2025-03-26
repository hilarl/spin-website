// FeaturesTabsSection.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, Brain, Code, Database, GitBranch, Sparkles } from 'lucide-react';

const sections = {
  embedding: {
    title: "Multimodal Embedding Framework",
    description: "Transform creative inputs into high-dimensional semantic representations that capture the essence of style, context, and meaning across different modalities.",
    features: [
      {
        icon: <Code className="h-6 w-6 text-green-500/90" />,
        title: "Cross-modal Translation",
        description: "Seamlessly translate between visual, audio, and textual representations with contextual understanding."
      },
      {
        icon: <GitBranch className="h-6 w-6 text-green-500/90" />,
        title: "Dimensional Richness",
        description: "2048-4096 dimensional embeddings capture subtle nuances of creative expression and style."
      },
      {
        icon: <Bot className="h-6 w-6 text-green-500/90" />,
        title: "Dynamic Adaptation",
        description: "Context-aware embeddings that adapt to cultural and temporal shifts in creative meaning."
      }
    ]
  },
  knowledge: {
    title: "Knowledge Representation Systems",
    description: "Our graph-based knowledge architecture maps complex relationships between creative elements, cultural contexts, and historical influences.",
    features: [
      {
        icon: <Database className="h-6 w-6 text-green-500/90" />,
        title: "Cultural Knowledge Graph",
        description: "Neo4j-based mapping of artistic movements, influences, and cultural significance."
      },
      {
        icon: <Sparkles className="h-6 w-6 text-green-500/90" />,
        title: "Dynamic Relationship Modeling",
        description: "Constantly evolving connections between creative elements based on new discoveries."
      },
      {
        icon: <Brain className="h-6 w-6 text-green-500/90" />,
        title: "Contextual Inference",
        description: "Real-time analysis of creative works within their proper historical and cultural context."
      }
    ]
  },
  creative: {
    title: "Creative Intelligence",
    description: "Our predictive and generative models incorporate psychological profiling, cultural understanding, and emotional intelligence for truly contextual creation.",
    features: [
      {
        title: "Psychological Profiling",
        items: [
          "Innovation scoring algorithms",
          "Emotional depth assessment",
          "Creative motivation analysis",
          "Style signature mapping"
        ]
      },
      {
        title: "Generative Capabilities",
        items: [
          "Contextual image generation",
          "Narrative composition with emotional subtext",
          "Audio generation with compositional narrative",
          "Dynamic creative constraint satisfaction"
        ]
      }
    ]
  }
};

const FeaturesTabsSection = () => {
  const [activeSection, setActiveSection] = useState('embedding');

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <Tabs defaultValue="embedding" value={activeSection} onValueChange={setActiveSection} className="space-y-16">
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