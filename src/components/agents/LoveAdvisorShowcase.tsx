"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Gift, Calendar, ShoppingCart, Clock, ChevronRight, Sparkles } from 'lucide-react';

const LoveAdvisorShowcase = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const messages = [
    { 
      role: 'assistant', 
      content: "Hi, I'm Mr. Love! 💝 I noticed Valentine's Day is in 4 days. Need help making it special? I can find the perfect gift and secure a romantic dinner reservation." 
    },
    { 
      role: 'user', 
      content: "Yes please! I need some help" 
    },
    { 
      role: 'assistant', 
      content: "Perfect timing! I've curated some amazing last-minute options based on your style and preferences. Let me show you what's still available..." 
    }
  ];

  const recommendations = [
    {
      type: 'gift',
      title: 'Rose Gold Heart Necklace',
      description: 'Handcrafted 18k rose gold necklace with diamond accents',
      price: '$299',
      image: '/neckless.png',
      platform: 'Shopify',
      delivery: 'Guaranteed delivery by Feb 14',
      badge: 'Express Shipping'
    },
    {
      type: 'restaurant',
      title: 'The Fulton',
      description: 'Special Valentine\'s Day 5-course tasting menu',
      price: '$$$',
      image: '/restaurant.png',
      platform: 'OpenTable',
      time: '7:30 PM',
      badge: 'Few slots left'
    },
    {
      type: 'gift',
      title: 'Luxury Chocolate Collection',
      description: 'Artisanal chocolates in heart-shaped box with champagne',
      price: '$89',
      image: '/choc.png',
      platform: 'Shopify',
      delivery: 'Same-day delivery on Feb 14',
      badge: 'Local Delivery'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < messages.length - 1) return prev + 1;
        if (prev === messages.length - 1 && !showRecommendations) {
          setShowRecommendations(true);
          return prev;
        }
        return prev;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [messages.length, showRecommendations]);

  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(236,72,153,0.05)_35%,rgba(168,85,247,0.05)_65%,transparent_100%)]" />
      <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile Brand Header - Only visible on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mb-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-6 h-6 text-pink-500" />
            <h1 className="text-2xl font-semibold text-gray-100">Mr. Love</h1>
          </div>
          <p className="text-sm text-gray-400 max-w-sm mx-auto">
            Your personal romance concierge for perfect moments and thoughtful gifts
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side - Hero Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <div className="sticky top-8">
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-500/30" />
                
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
                
                <div className="absolute inset-0 bg-[#1a1a1a]/60 backdrop-blur-sm" />
                
                <div className="relative h-full flex flex-col justify-between p-8">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                        <Heart className="w-5 h-5 text-pink-500" />
                      </div>
                      <h2 className="text-3xl font-semibold text-gray-100">Mr. Love</h2>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                      Let me help you create unforgettable moments with personally curated experiences.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-[#1a1a1a]/50 border-pink-500/10 hover:border-pink-500/20 transition-colors">
                        <CardContent className="p-4 flex items-start gap-3">
                          <Gift className="w-5 h-5 text-pink-500" />
                          <div>
                            <h3 className="text-sm font-medium text-gray-200 mb-1">Express Gifts</h3>
                            <p className="text-xs text-gray-400">Same-day delivery available</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-[#1a1a1a]/50 border-pink-500/10 hover:border-pink-500/20 transition-colors">
                        <CardContent className="p-4 flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-pink-500" />
                          <div>
                            <h3 className="text-sm font-medium text-gray-200 mb-1">Instant Bookings</h3>
                            <p className="text-xs text-gray-400">Premium reservations</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex gap-3">
                      <Badge variant="outline" className="bg-pink-500/10 text-pink-500 border-pink-500/20">
                        <Clock className="w-4 h-4 mr-2" />
                        4 Days Until Valentine's
                      </Badge>
                      <Badge variant="outline" className="bg-pink-500/10 text-pink-500 border-pink-500/20">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Special Offers
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Interactive Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-4 md:p-6 space-y-4">
                {/* Chat Interface */}
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {messages.slice(0, currentStep + 1).map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-start gap-3 ${message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'}`}
                      >
                        {message.role === 'assistant' && (
                          <div className="w-8 h-8 rounded-xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                            <Heart className="w-4 h-4 text-pink-500" />
                          </div>
                        )}
                        <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                          message.role === 'assistant' 
                            ? 'bg-[#1a1a1a] text-gray-300 border border-white/5' 
                            : 'bg-pink-500/20 text-pink-200'
                        }`}>
                          {message.content}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Recommendations */}
                {showRecommendations && (
                  <div className="space-y-3">
                    <AnimatePresence>
                      {recommendations.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <Card className="bg-[#1a1a1a] border-white/5 hover:border-pink-500/20 transition-colors group">
                            <CardContent className="p-4">
                              <div className="flex gap-4">
                                <div className="w-24 h-24 rounded-xl overflow-hidden bg-black/20 flex-shrink-0 group-hover:ring-2 ring-pink-500/20 transition-all">
                                  <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col md:flex-row justify-between gap-3">
                                    <div>
                                      <h4 className="text-sm font-medium text-gray-200 mb-1">{item.title}</h4>
                                      <p className="text-xs text-gray-400 mb-2 line-clamp-2">{item.description}</p>
                                      <div className="flex items-center flex-wrap gap-2">
                                        <Badge variant="outline" className="bg-pink-500/10 text-pink-500 border-pink-500/20">
                                          {item.badge}
                                        </Badge>
                                        <span className="text-xs text-gray-400">
                                          {item.type === 'restaurant' ? item.time : item.delivery}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-center md:flex-col md:items-end gap-3">
                                      <div className="text-sm font-medium text-gray-200">{item.price}</div>
                                      <Button 
                                        variant="outline" 
                                        size="sm"
                                        className="h-8 text-xs bg-transparent border-pink-500/20 hover:bg-pink-500/20 text-pink-500"
                                      >
                                        {item.type === 'restaurant' ? 'Reserve' : 'Order'}
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
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoveAdvisorShowcase;