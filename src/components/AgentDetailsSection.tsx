// AgentDetailsSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import ChainBuilder from '@/components/ChainBuilder/ChainBuilder';

const AgentDetailsSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-24"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-medium text-gray-100">Creative Knowledge Framework</h2>
            <p className="text-gray-400 leading-relaxed">
              Harness our graph-based knowledge representation system to map cultural connections and creative relationships.
            </p>
          </div>

          {/* Pipeline Builder Visual */}
          <ChainBuilder />

          {/* Knowledge Types */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#1a1a1a]/50 border-transparent hover:border-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-medium text-gray-100">Multimodal Embedding System</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Transform creative inputs into high-dimensional semantic representations with cross-modal translation capabilities and dynamic contextual adaptation.
                </p>
                <div className="bg-[#141414] rounded-xl p-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">
                    <span className="text-purple-400">multimodalEmbedding</span>
                    <span className="text-gray-400">()</span>
                    {'\n  '}
                    <span className="text-blue-400">.modalityEncoder</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-green-400">"visual"</span>
                    <span className="text-gray-400">, </span>
                    <span className="text-green-400">"audio"</span>
                    <span className="text-gray-400">)</span>
                    {'\n  '}
                    <span className="text-blue-400">.contextEncoder</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-green-400">"cultural"</span>
                    <span className="text-gray-400">)</span>
                    {'\n  '}
                    <span className="text-blue-400">.dimensions</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-green-400">2048</span>
                    <span className="text-gray-400">)</span>
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a]/50 border-transparent hover:border-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-medium text-gray-100">Graph Knowledge Representation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Model complex creative relationships through our advanced graph database architecture with dynamic relationship mapping.
                </p>
                <div className="bg-[#141414] rounded-xl p-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">
                    <span className="text-purple-400">class</span>
                    <span className="text-gray-100"> SemanticKnowledgeGraph </span>
                    <span className="text-purple-400">extends</span>
                    <span className="text-blue-400"> BaseGraph</span>
                    <span className="text-gray-400"> {`{`}</span>
                    {'\n  '}
                    <span className="text-purple-400">async</span>
                    <span className="text-yellow-400"> queryCreativeInfluence</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-orange-400">artMovement</span>
                    <span className="text-gray-400">, </span>
                    <span className="text-orange-400">period</span>
                    <span className="text-gray-400">) {`{`}</span>
                    {'\n    '}
                    <span className="text-gray-500">{`// Dynamic relationship modeling`}</span>
                    {'\n  '}
                    <span className="text-gray-400">{`}`}</span>
                    {'\n'}
                    <span className="text-gray-400">{`}`}</span>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentDetailsSection;