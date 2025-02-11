// components/SpinStudioSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

const SpinStudioSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-medium text-gray-100">SPIN Studio</h2>
            <p className="text-gray-400 leading-relaxed">
              A creative suite to design, test, and refine your intelligent agents—transforming your ideas into deployable blueprints.
            </p>
          </div>
          {/* Large Media Cards */}
          <div className="space-y-12">
            {/* Image Generation */}
            <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="md:grid grid-cols-2">
                  <div className="p-12 md:flex flex-col justify-center space-y-6">
                    <h3 className="text-2xl font-medium text-neutral-200">Image Generation</h3>
                    <p className="text-gray-400 leading-relaxed text-base md:text-xl">
                      Create stunning visuals with our intelligent prompt enhancer that adapts style and resolution on the fly.
                    </p>
                    <ul className="space-y-3 text-base md:text-lg">
                      {["Automated prompt refinement", "Style consistency control", "Multi-resolution output", "Batch processing"].map((feature, index) => (
                        <li key={index} className="text-gray-400 flex items-center gap-2 text-base md:text-lg">
                          <div className="w-1 h-1 bg-green-500/90 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="aspect-square relative group">
                    <img src="/mammoth.png" alt="Image Generation" className="w-full h-full object-cover" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Generation */}
            <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="md:grid grid md:grid-cols-2">
                  <div className="aspect-video relative group">
                    <img src="/cyberpunk.png" alt="Video Generation" className="w-full h-full object-cover" />
                    <PlayCircle className="absolute inset-0 m-auto h-16 w-16 text-white opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-12 md:flex flex-col justify-center space-y-6">
                    <h3 className="text-2xl font-medium text-neutral-200">Video Generation</h3>
                    <p className="text-gray-400 leading-relaxed text-base md:text-xl">
                      Generate high-quality videos and control the style, duration, and effects effortlessly.
                    </p>
                    <ul className="space-y-3 text-base md:text-lg">
                      {["Style transfer capabilities", "Advanced scene composition"].map((feature, index) => (
                        <li key={index} className="text-gray-400 flex items-center gap-2 text-base md:text-lg">
                          <div className="w-1 h-1 bg-green-500/90 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpinStudioSection;
