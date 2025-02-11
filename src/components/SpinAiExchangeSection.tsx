// components/SpinAiExchangeSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const SpinAiExchangeSection = () => {
  const tradingFeatures = [
    {
      title: "Agent Credits",
      description: "Every agent uses its own token, ensuring clear value and efficient resource use.",
      features: ["Automated credit minting", "Dynamic supply control", "Staking rewards", "Agent-specific utilities"]
    },
    {
      title: "Market Operations",
      description: "Manage assets with advanced trading tools tailored for the agent economy.",
      features: ["Limit & market orders", "Liquidity pools", "Portfolio analytics", "Market-making incentives"]
    },
    {
      title: "Privacy Features",
      description: "Robust security protects every transaction, ensuring data privacy and transparency.",
      features: ["Encrypted transactions", "Private AI execution", "Selective disclosure", "Auditable security"]
    }
  ];

  const marketStats = [
    { label: "Active Agents", value: "10K+" },
    { label: "Daily Trading Volume", value: "$2M+" },
    { label: "Avg Response Time", value: "50ms" },
    { label: "Network Uptime", value: "99.9%" }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-medium text-gray-100">SPIN AI Exchange</h2>
            <p className="text-gray-400 leading-relaxed">
              Explore our secure marketplace for trading agent credits—fueling distributed intelligence with a fair, integrated economic system.
            </p>
          </div>
          {/* Main Exchange Overview */}
          <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-2">
                <div className="p-12 flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl font-medium">Secure Token Economy</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Trade and manage credits in a privacy-first environment, secured by our distributed network.
                  </p>
                  <ul className="space-y-3">
                    {["Cutting-edge hardware security", "Real-time price discovery", "Automated market functions", "Privacy-first transactions"].map((feature, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-500/90 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-square relative group bg-[#141414] p-8">
                  <img src="/api/placeholder/800/800" alt="Exchange Interface" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Trading Features */}
          <div className="grid grid-cols-3 gap-8">
            {tradingFeatures.map((feature, index) => (
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
          {/* Security Infrastructure */}
          <div className="grid grid-cols-2 gap-8">
            <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-medium">Enterprise-Grade Security</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our platform leverages hardware-backed protection and a distributed network to run your agent blueprints in secure environments.
                </p>
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <img src="/api/placeholder/800/450" alt="Security Infrastructure" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-medium">Distributed Network</h3>
                <p className="text-gray-400 leading-relaxed">
                  Enjoy the benefits of a global, distributed agent-based computing system that delivers privacy-preserving AI execution across secure nodes.
                </p>
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <img src="/api/placeholder/800/450" alt="Distributed Network" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Market Stats */}
          <div className="grid grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
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
