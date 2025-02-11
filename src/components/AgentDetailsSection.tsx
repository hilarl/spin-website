// components/AgentDetailsSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
// Using the alias (adjust the path if necessary)
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
            <h2 className="text-3xl font-medium text-gray-100">Build Intelligent Agents</h2>
            <p className="text-gray-400 leading-relaxed">
              Leverage our secure environments and chain-based processing pipelines to deploy your agent blueprints. Our platform runs your bytesized code on a distributed, hardware-rooted system—ensuring secure, scalable, and efficient agent execution.
            </p>
          </div>

          {/* Pipeline Builder Visual */}
          <ChainBuilder />

          {/* Agent Types */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#1a1a1a]/50 border-transparent hover:border-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-medium text-gray-100">Domain Specific Language</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Define agent blueprints in just a few lines of bytesized code—our DSL makes configuration simple, secure, and modular.
                </p>
                <div className="bg-[#141414] rounded-xl p-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">
                    <span className="text-purple-400">inputChainBuilder</span>
                    <span className="text-gray-400">()</span>
                    {'\n  '}
                    <span className="text-blue-400">.aiService</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-green-400">"gcp"</span>
                    <span className="text-gray-400">, </span>
                    <span className="text-green-400">"llama-32"</span>
                    <span className="text-gray-400">)</span>
                    {'\n  '}
                    <span className="text-blue-400">.prompt</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-green-400">"search for"</span>
                    <span className="text-gray-400">)</span>
                    {'\n  '}
                    <span className="text-blue-400">.output</span>
                    <span className="text-gray-400">()</span>
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a]/50 border-transparent hover:border-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-medium text-gray-100">Custom Chaining</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Chain together your own logic using our chain-based processing pipelines—tailor your agent’s behavior to your unique domain.
                </p>
                <div className="bg-[#141414] rounded-xl p-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">
                    <span className="text-purple-400">class</span>
                    <span className="text-gray-100"> CustomAgent </span>
                    <span className="text-purple-400">extends</span>
                    <span className="text-blue-400"> BaseAgent</span>
                    <span className="text-gray-400"> {`{`}</span>
                    {'\n  '}
                    <span className="text-purple-400">async</span>
                    <span className="text-yellow-400"> handleMessage</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-orange-400">userId</span>
                    <span className="text-gray-400">, </span>
                    <span className="text-orange-400">message</span>
                    <span className="text-gray-400">) {`{`}</span>
                    {'\n    '}
                    <span className="text-gray-500">{`// Custom processing logic here`}</span>
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
