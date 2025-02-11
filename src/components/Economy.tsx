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

const AgentTokenEconomySimulator = () => {
    const [isClient, setIsClient] = useState(false);

    // Memoize initial state to prevent hydration issues
    const initialEconomyState = useMemo(() => ({
        pin: {
            price: 8.06,
            marketCap: 93860000,
            circulatingSupply: 50000000,
            totalAgents: 4,
            priceHistory: generateChartData(8.06)
        },
        agents: [
            {
                id: 'data-analyst',
                name: 'DataMind AI',
                symbol: 'DMND',
                description: 'Advanced data analysis and insights generation',
                tokenPrice: 5.05,
                marketCap: 525000,
                interactions: 0,
                specialty: 'Data Processing',
                icon: Database,
                priceHistory: generateChartData(5.05)
            },
            {
                id: 'content-creator',
                name: 'CreativePen',
                symbol: 'PENS',
                description: 'AI-powered content creation and editing',
                tokenPrice: 3.73,
                marketCap: 281250,
                interactions: 0,
                specialty: 'Content Generation',
                icon: Cpu,
                priceHistory: generateChartData(3.73)
            },
            {
                id: 'research-assistant-1',
                name: 'ScholArch',
                symbol: 'ARCH',
                description: 'Academic and scientific research support',
                tokenPrice: 6.56,
                marketCap: 375000,
                interactions: 0,
                specialty: 'Research Synthesis',
                icon: Network,
                priceHistory: generateChartData(6.56)
            },
            {
                id: 'research-assistant-2',
                name: 'IntelliSync',
                symbol: 'ISYN',
                description: 'Intelligent system integration',
                tokenPrice: 5.95,
                marketCap: 322000,
                interactions: 0,
                specialty: 'System Coordination',
                icon: Network,
                priceHistory: generateChartData(5.95)
            }
        ]
    }), []);

    const [economyState, setEconomyState] = useState(initialEconomyState);
    const [transactions, setTransactions] = useState<Array<{
        from: string;
        to: string;
        amount: string;
        timestamp: string;
    }>>([]);

    // Ensure client-side rendering
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Simulate economic interactions
    useEffect(() => {
        if (!isClient) return;

        const simulateEconomicActivity = () => {
            const newEconomyState = { ...economyState };

            // Simulate token price and market cap changes
            const pinGrowthFactor = 1 + (Math.random() * 0.1 - 0.05);
            newEconomyState.pin.price = Number((newEconomyState.pin.price * pinGrowthFactor).toFixed(2));
            newEconomyState.pin.marketCap *= pinGrowthFactor;

            // Update price history
            newEconomyState.pin.priceHistory = [
                ...newEconomyState.pin.priceHistory.slice(1),
                {
                    name: '',
                    price: newEconomyState.pin.price
                }
            ];

            // Simulate agent token dynamics
            newEconomyState.agents = newEconomyState.agents.map(agent => {
                const agentGrowthFactor = 1 + (Math.random() * 0.1 - 0.05);
                const newTokenPrice = Number((agent.tokenPrice * agentGrowthFactor).toFixed(2));

                return {
                    ...agent,
                    tokenPrice: newTokenPrice,
                    marketCap: agent.marketCap * agentGrowthFactor,
                    interactions: Math.floor(Math.random() * 50),
                    priceHistory: [
                        ...agent.priceHistory.slice(1),
                        {
                            name: '',
                            price: newTokenPrice
                        }
                    ]
                };
            });

            // Generate a random transaction
            const sourceAgent = newEconomyState.agents[Math.floor(Math.random() * newEconomyState.agents.length)];
            const destinationAgent = newEconomyState.agents.find(a => a.id !== sourceAgent.id) || newEconomyState.agents[0];

            const newTransaction = {
                from: sourceAgent.symbol,
                to: destinationAgent.symbol,
                amount: (Math.random() * 100).toFixed(2),
                timestamp: new Date().toLocaleTimeString()
            };

            setTransactions(prev => [newTransaction, ...prev].slice(0, 5));
            setEconomyState(newEconomyState);
        };

        const interval = setInterval(simulateEconomicActivity, 3000);
        return () => clearInterval(interval);
    }, [isClient, economyState]);

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
                        <h2 className="text-3xl font-medium text-gray-100">SPIN Exchange</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Explore our secure marketplace for trading agent credits—fueling distributed intelligence with a fair, integrated economic system.
                        </p>
                    </div>

                    {/* Economy Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-2xl overflow-hidden">
                            <CardHeader>
                                <CardTitle className="text-gray-100">$PIN Economy Overview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-4 gap-4">
                                    {[
                                        { label: "Total Market Cap", value: `$${(economyState.pin.marketCap / 1000000).toFixed(2)}M` },
                                        { label: "Circulating Supply", value: `${(economyState.pin.circulatingSupply / 1000000).toFixed(2)}M` },
                                        { label: "Total Agents", value: economyState.agents.length },
                                        { label: "Avg Token Price", value: `$${economyState.pin.price.toFixed(2)}` }
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
                        {/* Left Agent Tokens Column */}
                        <div className="md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-6 h-full">
                            {economyState.agents.slice(0, 2).map((agent, index) => (
                                <motion.div
                                    key={agent.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className={`${index === 1 ? 'md:translate-y-12' : ''} ${index === 0 ? 'self-start' : 'self-end'}`}
                                >
                                    <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/5 transition-all duration-300 h-full">
                                        <CardHeader className="flex flex-row items-center justify-between">
                                            <CardTitle className="text-gray-100 hidden md:block">{agent.name}</CardTitle>
                                            <Badge variant="secondary">{agent.symbol}</Badge>
                                        </CardHeader>
                                        <CardContent className="flex flex-col justify-between h-full">
                                            <div className="text-2xl font-medium text-gray-100">${agent.tokenPrice.toFixed(2)}</div>
                                            <ResponsiveContainer width="100%" height={100}>
                                                <LineChart data={agent.priceHistory}>
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

                        {/* Central $PIN Token */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="md:col-span-1 h-full flex"
                        >
                            <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/5 transition-all duration-300 w-full">
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-gray-100">$PIN</CardTitle>
                                    <Badge variant="default">Core</Badge>
                                </CardHeader>
                                <CardContent className="flex flex-col justify-between h-full">
                                    <div className="text-3xl font-medium text-gray-100">${economyState.pin.price.toFixed(2)}</div>
                                    <ResponsiveContainer width="100%" height={200}>
                                        <LineChart data={economyState.pin.priceHistory}>
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

                        {/* Right Agent Tokens Column */}
                        <div className="md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-6 h-full">
                            {economyState.agents.slice(2).map((agent, index) => (
                                <motion.div
                                    key={agent.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + (index * 0.1) }}
                                    className={`${index === 0 ? 'md:translate-y-12' : ''} ${index === 0 ? 'self-start' : 'self-end'}`}
                                >
                                    <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/5 transition-all duration-300 h-full">
                                        <CardHeader className="flex flex-row items-center justify-between">
                                            <CardTitle className="text-gray-100 hidden md:block">{agent.name}</CardTitle>
                                            <Badge variant="secondary">{agent.symbol}</Badge>
                                        </CardHeader>
                                        <CardContent className="flex flex-col justify-between h-full">
                                            <div className="text-2xl font-medium text-gray-100">${agent.tokenPrice.toFixed(2)}</div>
                                            <ResponsiveContainer width="100%" height={100}>
                                                <LineChart data={agent.priceHistory}>
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

                    {/* Transactions Log */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Card className="bg-[#1a1a1a]/50 border-transparent backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/5 transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="text-gray-100">Recent Interactions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <AnimatePresence>
                                        {transactions.map((transaction, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                className="flex items-center justify-between bg-black/20 p-3 rounded-lg hover:bg-black/30 transition-all duration-300"
                                            >
                                                <div>
                                                    <span className="font-medium text-gray-100">{transaction.from}</span>
                                                    <ArrowRight className="inline w-4 h-4 mx-2 text-gray-400" />
                                                    <span className="font-medium text-gray-100">{transaction.to}</span>
                                                </div>
                                                <div className="text-sm text-gray-400">
                                                    {transaction.amount} $PIN
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

export default AgentTokenEconomySimulator;