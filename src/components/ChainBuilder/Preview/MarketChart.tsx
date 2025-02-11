// components/Preview/MarketChart.tsx
"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MarketData } from '../types';

interface MarketChartProps {
  marketData: MarketData[];
}

const MarketChart: React.FC<MarketChartProps> = ({ marketData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={marketData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="time" stroke="#666" tick={{ fill: '#666' }} />
        <YAxis stroke="#666" tick={{ fill: '#666' }} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#141414',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px'
          }}
          labelStyle={{ color: '#666' }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#22c55e"
          strokeWidth={2}
          dot={{ fill: '#22c55e', strokeWidth: 2 }}
          activeDot={{ r: 6, fill: '#22c55e' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MarketChart;
