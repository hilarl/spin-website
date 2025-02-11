"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Search,
  TrendingUp,
  Globe,
  ChevronRight,
  Share2
} from 'lucide-react';

const MarketResearchFeed = () => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [activeTab, setActiveTab] = useState('feed');

  const topics = [
    {
      name: 'Tech Trends',
      icon: '🚀',
      description: 'Latest in AI, blockchain, and emerging technologies'
    },
    {
      name: 'Green Energy',
      icon: '🌱',
      description: 'Sustainable solutions and renewable energy markets'
    },
    {
      name: 'Digital Commerce',
      icon: '🛍️',
      description: 'E-commerce evolution and digital marketplace insights'
    }
  ];

  const insights = [
    {
      id: 1,
      topic: 'Tech Trends',
      title: 'AI Investment Surge',
      description: 'Major tech companies double down on AI research and development',
      image: '/tech.png',
      timestamp: '2m ago',
      source: 'Tech Market Analysis',
      trend: 'Growing',
      engagement: 89
    },
    {
      id: 2,
      topic: 'Green Energy',
      title: 'Solar Tech Innovation',
      description: 'Breakthrough in solar panel efficiency drives market growth',
      image: '/energy.png',
      timestamp: '5m ago',
      source: 'Energy Insights',
      trend: 'Rising',
      engagement: 76
    },
    {
      id: 3,
      topic: 'Digital Commerce',
      title: 'Mobile Shopping Trends',
      description: 'Mobile commerce sees unprecedented growth in Q1',
      image: '/commerce.png',
      timestamp: '8m ago',
      source: 'Retail Analytics',
      trend: 'Booming',
      engagement: 92
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTopicIndex((prev) => (prev + 1) % topics.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-24 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(59,130,246,0.05)_35%,rgba(96,165,250,0.05)_65%,transparent_100%)]" />

      <div className="container mx-auto px-2 md:px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Right Side - Features Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-1 md:order-2"
          >
            <div className="space-y-6">
              <div className='mx-4'>
                <h2 className="text-2xl font-medium text-gray-100 mb-2">Market Insight</h2>
                <p className="text-gray-400 leading-relaxed">
                  Real-time market research and insights tailored to your interests.
                  Stay ahead with trending analysis and market opportunities.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mx-4">
                <Card className="bg-[#1a1a1a]/50 border-blue-500/10 hover:border-blue-500/20 transition-colors">
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium text-gray-200 mb-2">Live Updates</h3>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        Real-time market trends
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-400" />
                        Global coverage
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-[#1a1a1a]/50 border-blue-500/10 hover:border-blue-500/20 transition-colors">
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium text-gray-200 mb-2">Smart Analysis</h3>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex items-center gap-2">
                        <Search className="w-4 h-4 text-blue-400" />
                        Curated insights
                      </li>
                      <li className="flex items-center gap-2">
                        <Share2 className="w-4 h-4 text-blue-400" />
                        Easy sharing
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Left Side - Interface Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="order-2 md:order-1 relative mx-2 md:mx-4"
          >
            <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-4 md:p-6">
                <Tabs defaultValue="feed" onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full bg-transparent border-b border-white/5 mb-4">
                    <TabsTrigger
                      value="feed"
                      className="flex-1 data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-blue-400"
                    >
                      Feed
                    </TabsTrigger>
                    <TabsTrigger
                      value="topics"
                      className="flex-1 data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-blue-400"
                    >
                      Topics
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="feed" className="mt-0 space-y-4">
                    <AnimatePresence mode="popLayout">
                      {insights.map((insight) => (
                        <motion.div
                          key={insight.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Card className="bg-[#1a1a1a] border-white/5 hover:border-blue-500/20 transition-colors group">
                            <CardContent className="p-4">
                              <div className="flex gap-4">
                                <div className="w-20 h-20 rounded-xl overflow-hidden bg-black/20 flex-shrink-0">
                                  <img 
                                    src={insight.image} 
                                    alt={insight.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col md:flex-row justify-between gap-2">
                                    <div>
                                      <Badge className="bg-blue-500/10 text-blue-400 text-xs font-thin border-blue-500/20 mb-2">
                                        {insight.topic}
                                      </Badge>
                                      <h4 className="text-sm font-medium text-gray-200 mb-1">{insight.title}</h4>
                                      <p className="text-xs text-gray-400 line-clamp-2">{insight.description}</p>
                                    </div>
                                    <div className="flex items-center gap-3 mt-2">
                                      <span className="text-xs text-gray-500">{insight.timestamp}</span>
                                      <Button 
                                        variant="outline" 
                                        size="sm"
                                        className="h-8 text-xs bg-transparent border-blue-500/20 hover:bg-blue-500/20 text-blue-400"
                                      >
                                        View
                                        <ChevronRight className="w-3 h-3 ml-1" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </TabsContent>

                  <TabsContent value="topics" className="mt-0">
                    <div className="space-y-4">
                      {topics.map((topic, index) => (
                        <Card 
                          key={index}
                          className="bg-[#1a1a1a] border-white/5 hover:border-blue-500/20 transition-colors"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <div>
                                <h4 className="text-sm font-medium text-gray-200">{topic.name}</h4>
                                <p className="text-xs text-gray-400">{topic.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketResearchFeed;