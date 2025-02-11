"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Laugh, Share2, ThumbsUp, MessageCircle,
    Sparkles, Repeat2, Send, Image as ImageIcon
} from 'lucide-react';

const ComedianShowcase = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [showContent, setShowContent] = useState(false);
    const [activeTab, setActiveTab] = useState('chat');
    const [newMessage, setNewMessage] = useState('');
    const [currentTweetIndex, setCurrentTweetIndex] = useState(0);

    const messages = [
        {
            role: 'assistant',
            content: "Yo Alex! Just saw that coding meme you retweeted - absolutely hilarious! 😂 Speaking of which, I got some fresh tech humor that'll make your day..."
        },
        {
            role: 'user',
            content: "Hit me with your best shot! 🎯"
        },
        {
            role: 'assistant',
            content: "Check this out - I remixed that 'It works on my machine' meme based on your Docker struggles yesterday. Also wrote a fresh AI joke just for you..."
        }
    ];

    const tweets = [
        {
            type: 'dev',
            content: "'I don't always test my code, but when I do, I do it in production' #DevLife",
            timestamp: '2m',
            likes: 42,
            retweets: 12,
            replies: 5,
            image: '/test.png'
        },
        {
            type: 'millennial',
            content: "Spent $15 on avocado toast. Guess I'll never own a house now 🥑🏠 #MillennialProblems",
            timestamp: '15m',
            likes: 128,
            retweets: 34,
            replies: 8,
            image: '/avocado.png'
        },
        {
            type: 'expectations',
            content: "🤖",
            timestamp: '1h',
            likes: 89,
            retweets: 15,
            replies: 12,
            image: '/dress.png'
        }
    ];

    const notifications = [
        "Your 'git commit -m \"fixed bugs\"' tweet went viral in the dev community!",
        "3 new followers enjoyed your AI humor compilation",
        "Trending: Your work from home memes are gaining traction"
    ];

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            messages.push({ role: 'user', content: newMessage });
            setNewMessage('');
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStep(prev => {
                if (prev < messages.length - 1) return prev + 1;
                if (prev === messages.length - 1 && !showContent) {
                    setShowContent(true);
                    return prev;
                }
                return prev;
            });
        }, 2000);

        return () => clearInterval(timer);
    }, [messages.length, showContent]);

    // Rotate through tweets
    useEffect(() => {
        const tweetTimer = setInterval(() => {
            setCurrentTweetIndex((prev) => (prev + 1) % tweets.length);
        }, 5000);

        return () => clearInterval(tweetTimer);
    }, []);

    return (
        <section className="py-12 md:py-24 relative overflow-hidden min-h-screen flex items-center">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(168,85,247,0.05)_35%,rgba(59,130,246,0.05)_65%,transparent_100%)]" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                    {/* Right Side - Features Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="order-1 md:order-2"
                    >
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-medium text-gray-100 mb-2">Comedy Bud</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    I learn your humor style and create personalized content that matches your taste.
                                    From tech jokes to millennial memes, I've got your funny bone covered!
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Card className="bg-[#1a1a1a]/50 border-purple-500/10 hover:border-purple-500/20 transition-colors">
                                    <CardContent className="p-4">
                                        <h3 className="text-sm font-medium text-gray-200 mb-2">Personalized Humor</h3>
                                        <ul className="space-y-2 text-xs text-gray-400">
                                            <li className="flex items-center gap-2">
                                                <Sparkles className="w-4 h-4 text-purple-400" />
                                                Learns your comedy preferences
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <ThumbsUp className="w-4 h-4 text-purple-400" />
                                                Adapts to your reactions
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="bg-[#1a1a1a]/50 border-purple-500/10 hover:border-purple-500/20 transition-colors">
                                    <CardContent className="p-4">
                                        <h3 className="text-sm font-medium text-gray-200 mb-2">Active Engagement</h3>
                                        <ul className="space-y-2 text-xs text-gray-400">
                                            <li className="flex items-center gap-2">
                                                <MessageCircle className="w-4 h-4 text-purple-400" />
                                                Real-time conversations
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Share2 className="w-4 h-4 text-purple-400" />
                                                Social content creation
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
                        className="order-2 md:order-1 relative"
                    >
                        <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-3xl overflow-hidden">
                            <CardContent className="p-4 md:p-6">
                                <Tabs defaultValue="chat" onValueChange={setActiveTab} className="w-full">
                                    <TabsList className="w-full bg-transparent border-b border-white/5 mb-4">
                                        <TabsTrigger
                                            value="chat"
                                            className="flex-1 data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-purple-400"
                                        >
                                            Chat
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="tweets"
                                            className="flex-1 data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-purple-400"
                                        >
                                            Tweets
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="chat" className="mt-0">
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
                                                            <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                                                <Laugh className="w-4 h-4 text-purple-400" />
                                                            </div>
                                                        )}
                                                        <div className={`max-w-[80%] p-3 rounded-xl text-sm ${message.role === 'assistant'
                                                            ? 'bg-[#1a1a1a] text-gray-300 border border-white/5'
                                                            : 'bg-purple-500/20 text-purple-200'
                                                            }`}>
                                                            {message.content}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </AnimatePresence>

                                            <div className="flex items-center gap-2 mt-4 border-t border-white/5 pt-4">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-9 w-9 bg-[#1a1a1a] border-white/5 hover:bg-[#222]"
                                                >
                                                    <ImageIcon className="w-4 h-4 text-gray-400" />
                                                </Button>
                                                <input
                                                    type="text"
                                                    value={newMessage}
                                                    onChange={(e) => setNewMessage(e.target.value)}
                                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                                    placeholder="Message your comedy buddy..."
                                                    className="flex-1 bg-[#1a1a1a] text-gray-300 text-sm rounded-xl px-4 py-2 border border-white/5 focus:outline-none focus:border-purple-500/20"
                                                />
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={handleSendMessage}
                                                    className="h-9 w-9 bg-[#1a1a1a] border-white/5 hover:bg-[#222]"
                                                >
                                                    <Send className="w-4 h-4 text-gray-400" />
                                                </Button>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="tweets" className="mt-0">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                                        <Laugh className="w-4 h-4 text-purple-400" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-200">Comedy Bud</div>
                                                        <div className="text-xs text-gray-500">@comedBud</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <AnimatePresence>
                                                {[tweets[currentTweetIndex]].map((tweet, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -20 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        <Card className="bg-[#1a1a1a] border-white/5 hover:border-purple-500/20 transition-colors">
                                                            <CardContent className="p-4">
                                                                <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                                                                    {tweet.type === 'dev' && 'Dev Humor'}
                                                                    {tweet.type === 'millennial' && 'Millennial Mood'}
                                                                    {tweet.type === 'expectations' && 'Expectation vs Reality'}
                                                                </div>
                                                                <p className="text-sm text-gray-300 mb-3">{tweet.content}</p>
                                                                {tweet.image && (
                                                                    <div className="mb-3 rounded-xl overflow-hidden">
                                                                        <img
                                                                            src={tweet.image}
                                                                            alt="Tweet media"
                                                                            className="w-full object-cover"
                                                                        />
                                                                    </div>
                                                                )}
                                                                <div className="flex items-center justify-between text-xs text-gray-500">
                                                                    <div className="flex items-center gap-4">
                                                                        <button className="flex items-center gap-1 hover:text-purple-400">
                                                                            <MessageCircle className="w-3 h-3" />
                                                                            {tweet.replies}
                                                                        </button>
                                                                        <button className="flex items-center gap-1 hover:text-green-400">
                                                                            <Repeat2 className="w-3 h-3" />
                                                                            {tweet.retweets}
                                                                        </button>
                                                                        <button className="flex items-center gap-1 hover:text-red-400">
                                                                            <ThumbsUp className="w-3 h-3" />
                                                                            {tweet.likes}
                                                                        </button>
                                                                        <button className="flex items-center gap-1 hover:text-blue-400">
                                                                            <Share2 className="w-3 h-3" />
                                                                        </button>
                                                                    </div>
                                                                    <span>{tweet.timestamp}</span>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </motion.div>
                                                ))}
                                            </AnimatePresence>
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

export default ComedianShowcase;