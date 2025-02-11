// components/ChainBuilder/ChainList.tsx
"use client";

import React from 'react';
import ChainItemComponent from './ChainItem';
import { ChainItem } from '../types';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface ChainListProps {
  chain: ChainItem[];
  isConfiguring: boolean;
  onAddToChain: () => void;
  onDeployAgent: () => void;
  chainOptionsLength: number;
}

const ChainList: React.FC<ChainListProps> = ({ chain, isConfiguring, onAddToChain, onDeployAgent, chainOptionsLength }) => {
  // Get the type of the last item in the chain.
  const lastItemType = chain[chain.length - 1]?.type;

  return (
    <div>
      {chain.map((item) => (
        <div key={item.type} className="space-y-2 mb-4">
          <div className="text-xs text-gray-500">{item.label}</div>
          <ChainItemComponent item={item} />
        </div>
      ))}
      {isConfiguring && (
        <>
          {lastItemType === 'deployment' ? (
            <Button
              onClick={onDeployAgent}
              className="w-full p-3 bg-green-900/20 hover:bg-green-900/30 text-green-400 rounded-full border border-green-500/20 flex items-center justify-center gap-2 transition-colors"
            >
              Deploy Agent
            </Button>
          ) : (
            <Button
              onClick={onAddToChain}
              variant="outline"
              className="w-full p-3 bg-[#1a1a1a] hover:bg-[#222] text-gray-300 rounded-full border-white/5 flex items-center justify-center gap-2 transition-colors"
            >
              <Plus size={16} className="text-gray-300" />
              <span className="text-sm">Add Next Option</span>
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default ChainList;
