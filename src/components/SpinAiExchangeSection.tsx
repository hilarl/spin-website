// SpinAiExchangeSection.tsx 
// Renamed to CreativeCollaborationSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const SpinAiExchangeSection = () => {
  const collaborationFeatures = [
    {
      title: "Creative Profiles",
      description: "Unique creative DNA representations and transferable style signatures for monetization.",
      features: ["Style signature extraction", "Creative lineage tracking", "Profile evolution metrics", "Style transfer controls"]
    },
    {
      title: "Workflow Templates",
      description: "Modular creative production systems adaptable across multiple domains with performance metrics.",
      features: ["Process templating", "Cross-domain adaptation", "Efficiency optimization", "Collaborative workflow"]
    },
    {
      title: "AI Creative Modules",
      description: "Specialized creative intelligence components that enhance specific aspects of the creative process.",
      features: ["Emotional intelligence", "Cultural context mapping", "Technical style analysis", "Composition enhancement"]
    }
  ];

  const collaborationStats = [
    { label: "Creative Assets", value: "50K+" },
    { label: "Collaboration Network", value: "10K+" },
    { label: "Attribution Accuracy", value: "99.9%" },
    { label: "Economic Impact", value: "$15M+" }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-medium text-gray-100">Human-AI Creative Collaboration</h2>
            <p className="text-gray-400 leading-relaxed">
              Explore our framework for human-AI creative partnerships—enabling transparent contribution tracking, fair attribution, and novel creative exploration.
            </p>
          </div>
          {/* Main Collaboration Overview */}
          <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-2">
                <div className="p-12 flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl font-medium">Collaborative Intelligence Protocol</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our framework redefines creative collaboration with transparent tracking of contributions, fair compensation, and clear attribution.
                  </p>
                  <ul className="space-y-3">
                    {["Augmentation, not replacement", "Contextual creative intelligence", "Transparent contribution metrics", "Adaptive learning mechanisms"].map((feature, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-500/90 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-square relative group bg-[#141414] p-8">
                  <img src="/api/placeholder/800/800" alt="Collaboration Interface" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Collaboration Features */}
          <div className="grid grid-cols-3 gap-8">
            {collaborationFeatures.map((feature, index) => (
              <Card key={index} className="bg-[#141414]/50 border-transparent hover:border-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-xl font-medium text-gray-100">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-500/90 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Collaboration Infrastructure */}
          <div className="grid grid-cols-2 gap-8">
            <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-medium">Ethical Collaboration Framework</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our platform ensures fair compensation, intellectual property protection, and creative autonomy preservation in all collaborations.
                </p>
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <img src="/api/placeholder/800/450" alt="Ethical Framework" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-medium">Global Creative Ecosystem</h3>
                <p className="text-gray-400 leading-relaxed">
                  Join a worldwide network of creators breaking geographical barriers and enabling micro-creative entrepreneurship through collaborative value generation.
                </p>
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <img src="/api/placeholder/800/450" alt="Global Ecosystem" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Collaboration Stats */}
          <div className="grid grid-cols-4 gap-8">
            {collaborationStats.map((stat, index) => (
              <Card key={index} className="bg-[#141414]/50 border-transparent backdrop-blur-sm rounded-2xl overflow-hidden">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-2xl font-medium text-gray-100">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpinAiExchangeSection;