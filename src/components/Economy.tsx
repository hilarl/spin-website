// Economy.tsx - Revised for Creative Asset Marketplace
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Network,
    Database,
    Cpu,
    ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Utility function to generate chart data
const generateChartData = (initialPrice: number) => {
    return Array.from({ length: 11 }, (_, i) => ({
        name: '',
        price: Number((initialPrice * (1 + ((Math.random() * 0.2) - 0.1))).toFixed(2))
    }));
};

const Economy = () => {
    const [isClient, setIsClient] = useState(false);

    // Memoize initial state to prevent hydration issues
    const initialMarketState = useMemo(() => ({
        creative: {
            price: 8.06,
            marketCap: 93860000,
            circulatingSupply: 50000000,
            totalAssets: 4,
            priceHistory: generateChartData(8.06)
        },
        assets: [
            {
                id: 'creative-profile',
                name: 'StyleMatrix',
                symbol: 'STMX',
                description: 'Creative DNA and transferable style signature',
                tokenPrice: 5.05,
                marketCap: 525000,
                collaborations: 0,
                specialty: 'Style Analysis',
                icon: Database,
                priceHistory: generateChartData(5.05)
            },
            {
                id: 'workflow-template',
                name: 'ProcessFlow',
                symbol: 'FLOW',
                description: 'Modular creative production systems',
                tokenPrice: 3.73,
                marketCap: 281250,
                collaborations: 0,
                specialty: 'Process Optimization',
                icon: Cpu,
                priceHistory: generateChartData(3.73)
            },
            {
                id: 'ai-module-1',
                name: 'EmotionLens',
                symbol: 'EMLN',
                description: 'Emotional intelligence creative enhancement',
                tokenPrice: 6.56,
                marketCap: 375000,
                collaborations: 0,
                specialty: 'Emotional Analysis',
                icon: Network,
                priceHistory: generateChartData(6.56)
            },
            {
                id: 'ai-module-2',
                name: 'CultureMap',
                symbol: 'CMAP',
                description: 'Cultural context mapping system',
                tokenPrice: 5.95,
                marketCap: 322000,
                collaborations: 0,
                specialty: 'Cultural Analysis',
                icon: Network,
                priceHistory: generateChartData(5.95)
            }
        ]
    }), []);

    const [marketState, setMarketState] = useState(initialMarketState);
    const [collaborations, setCollaborations] = useState<Array<{
        from: string;
        to: string;
        amount: string;
        timestamp: string;
    }>>([]);

    // Ensure client-side rendering
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Simulate creative asset marketplace activity
    useEffect(() => {
        if (!isClient) return;

        const simulateMarketActivity = () => {
            const newMarketState = { ...marketState };

            // Simulate token price and market cap changes
            const creativeGrowthFactor = 1 + (Math.random() * 0.1 - 0.05);
            newMarketState.creative.price = Number((newMarketState.creative.price * creativeGrowthFactor).toFixed(2));
            newMarketState.creative.marketCap *= creativeGrowthFactor;

            // Update price history
            newMarketState.creative.priceHistory = [
                ...newMarketState.creative.priceHistory.slice(1),
                {
                    name: '',
                    price: newMarketState.creative.price
                }
            ];

            // Simulate asset token dynamics
            newMarketState.assets = newMarketState.assets.map(asset => {
                const assetGrowthFactor = 1 + (Math.random() * 0.1 - 0.05);
                const newTokenPrice = Number((asset.tokenPrice * assetGrowthFactor).toFixed(2));

                return {
                    ...asset,
                    tokenPrice: newTokenPrice,
                    marketCap: asset.marketCap * assetGrowthFactor,
                    collaborations: Math.floor(Math.random() * 50),
                    priceHistory: [
                        ...asset.priceHistory.slice(1),
                        {
                            name: '',
                            price: newTokenPrice
                        }
                    ]
                };
            });

            // Generate a random collaboration
            const sourceAsset = newMarketState.assets[Math.floor(Math.random() * newMarketState.assets.length)];
            const destinationAsset = newMarketState.assets.find(a => a.id !== sourceAsset.id) || newMarketState.assets[0];

            const newCollaboration = {
                from: sourceAsset.symbol,
                to: destinationAsset.symbol,
                amount: (Math.random() * 100).toFixed(2),
                timestamp: new Date().toLocaleTimeString()
            };

            setCollaborations(prev => [newCollaboration, ...prev].slice(0, 5));
            setMarketState(newMarketState);
        };

        const interval = setInterval(simulateMarketActivity, 3000);
        return () => clearInterval(interval);
    }, [isClient, marketState]);

    if (!isClient) {
        return null;
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-24"
        >
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-1/4 top-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[160px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-1/4 bottom-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[160px]"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="space-y-8 max-w-7xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-24">
                        <h2 className="text-3xl font-medium text-gray-100">Creative Asset Marketplace</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Explore our revolutionary marketplace for creative digital assets—enabling transparent collaboration, fair attribution, and monetization of creative processes.
                        </p>
                    </div>

                    {/* Marketplace Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-2xl overflow-hidden">
                            <CardHeader>
                                <CardTitle className="text-gray-100">Creative Economy Overview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-4 gap-4">
                                    {[
                                        { label: "Total Market Cap", value: `$${(marketState.creative.marketCap / 1000000).toFixed(2)}M` },
                                        { label: "Asset Types", value: `${(marketState.creative.circulatingSupply / 1000000).toFixed(2)}M` },
                                        { label: "Creative Assets", value: marketState.assets.length },
                                        { label: "Avg Asset Value", value: `$${marketState.creative.price.toFixed(2)}` }
                                    ].map((item, index) => (
                                        <div key={index}>
                                            <div className="text-sm text-gray-400">{item.label}</div>
                                            <div className="text-2xl font-medium text-gray-100">{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Main Grid */}
                    <div className="grid md:grid-cols-3 gap-6 md:h-[476px]">
                        {/* Left Asset Column */}
                        <div className="md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-6 h-full">
                            {marketState.assets.slice(0, 2).map((asset, index) => (
                                <motion.div
                                    key={asset.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className={`${index === 1 ? 'md:translate-y-12' : ''} ${index === 0 ? 'self-start' : 'self-end'}`}
                                >
                                    <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/5 transition-all duration-300 h-full">
                                        <CardHeader className="flex flex-row items-center justify-between">
                                            <CardTitle className="text-gray-100 hidden md:block">{asset.name}</CardTitle>
                                            <Badge variant="secondary">{asset.symbol}</Badge>
                                        </CardHeader>
                                        <CardContent className="flex flex-col justify-between h-full">
                                            <div className="text-2xl font-medium text-gray-100">${asset.tokenPrice.toFixed(2)}</div>
                                            <ResponsiveContainer width="100%" height={100}>
                                                <LineChart data={asset.priceHistory}>
                                                    <Line
                                                        type="monotone"
                                                        dataKey="price"
                                                        stroke="#3b82f6"
                                                        strokeWidth={1}
                                                        dot={false}
                                                    />
                                                    <XAxis hide />
                                                    <YAxis
                                                        hide
                                                        domain={['dataMin - 1', 'dataMax + 1']}
                                                    />
                                                    <Tooltip
                                                        contentStyle={{
                                                            backgroundColor: '#1a1a1a',
                                                            border: 'none',
                                                            color: 'white'
                                                        }}
                                                        labelStyle={{ color: 'white' }}
                                                        itemStyle={{ color: 'white' }}
                                                    />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Central Creative Token */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="md:col-span-1 h-full flex"
                        >
                            <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/5 transition-all duration-300 w-full">
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-gray-100">Creative DNA</CardTitle>
                                    <Badge variant="default">Core</Badge>
                                </CardHeader>
                                <CardContent className="flex flex-col justify-between h-full">
                                    <div className="text-3xl font-medium text-gray-100">${marketState.creative.price.toFixed(2)}</div>
                                    <ResponsiveContainer width="100%" height={200}>
                                        <LineChart data={marketState.creative.priceHistory}>
                                            <Line
                                                type="monotone"
                                                dataKey="price"
                                                stroke="#3b82f6"
                                                strokeWidth={2}
                                                dot={false}
                                            />
                                            <XAxis hide />
                                            <YAxis
                                                hide
                                                domain={['dataMin - 1', 'dataMax + 1']}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: '#1a1a1a',
                                                    border: 'none',
                                                    color: 'white'
                                                }}
                                                labelStyle={{ color: 'white' }}
                                                itemStyle={{ color: 'white' }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Right Asset Column */}
                        <div className="md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-6 h-full">
                            {marketState.assets.slice(2).map((asset, index) => (
                                <motion.div
                                    key={asset.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + (index * 0.1) }}
                                    className={`${index === 0 ? 'md:translate-y-12' : ''} ${index === 0 ? 'self-start' : 'self-end'}`}
                                >
                                    <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/5 transition-all duration-300 h-full">
                                        <CardHeader className="flex flex-row items-center justify-between">
                                            <CardTitle className="text-gray-100 hidden md:block">{asset.name}</CardTitle>
                                            <Badge variant="secondary">{asset.symbol}</Badge>
                                        </CardHeader>
                                        <CardContent className="flex flex-col justify-between h-full">
                                            <div className="text-2xl font-medium text-gray-100">${asset.tokenPrice.toFixed(2)}</div>
                                            <ResponsiveContainer width="100%" height={100}>
                                                <LineChart data={asset.priceHistory}>
                                                    <Line
                                                        type="monotone"
                                                        dataKey="price"
                                                        stroke="#3b82f6"
                                                        strokeWidth={1}
                                                        dot={false}
                                                    />
                                                    <XAxis hide />
                                                    <YAxis
                                                        hide
                                                        domain={['dataMin - 1', 'dataMax + 1']}
                                                    />
                                                    <Tooltip
                                                        contentStyle={{
                                                            backgroundColor: '#1a1a1a',
                                                            border: 'none',
                                                            color: 'white'
                                                        }}
                                                        labelStyle={{ color: 'white' }}
                                                        itemStyle={{ color: 'white' }}
                                                    />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Collaboration Log */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/5 transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="text-gray-100">Recent Collaborations</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <AnimatePresence>
                                        {collaborations.map((collaboration, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                className="flex items-center justify-between bg-black/20 p-3 rounded-lg hover:bg-black/30 transition-all duration-300"
                                            >
                                                <div>
                                                    <span className="font-medium text-gray-100">{collaboration.from}</span>
                                                    <ArrowRight className="inline w-4 h-4 mx-2 text-gray-400" />
                                                    <span className="font-medium text-gray-100">{collaboration.to}</span>
                                                </div>
                                                <div className="text-sm text-gray-400">
                                                    {collaboration.amount} Credits
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Economy;