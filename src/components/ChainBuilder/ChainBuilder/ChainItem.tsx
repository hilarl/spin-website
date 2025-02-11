// components/ChainBuilder/ChainItem.tsx
"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ChainItem } from '../types';

interface ChainItemProps {
  item: ChainItem;
}

const ChainItemComponent: React.FC<ChainItemProps> = ({ item }) => {
  switch (item.type) {
    case 'foundationModels':
      return (
        <div className="flex flex-wrap gap-2">
          {item.models?.map((model, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="py-2 px-4 bg-[#1a1a1a] hover:bg-[#222] text-gray-300 border-white/5"
            >
              {model}
            </Badge>
          ))}
        </div>
      );
    case 'integration':
      return (
        <div className="flex flex-wrap gap-2">
          {item.services?.map((service, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="py-2 px-4 bg-[#1a1a1a] hover:bg-[#222] text-gray-300 border-white/5"
            >
              {service.name}
              <span className="ml-2 text-xs text-gray-500">{service.scope}</span>
            </Badge>
          ))}
        </div>
      );
    case 'storage':
      return (
        <div className="flex flex-wrap gap-2">
          {item.storageOptions?.map((option, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="py-2 px-4 bg-[#1a1a1a] hover:bg-[#222] text-gray-300 border-white/5"
            >
              {option.name}
              <span className="ml-2 text-xs text-gray-500">
                {option.type} ({option.provider})
              </span>
            </Badge>
          ))}
        </div>
      );
    case 'customData':
      return (
        <Badge
          variant="outline"
          className="py-2 px-4 bg-[#1a1a1a] hover:bg-[#222] text-gray-300 border-white/5"
        >
          {item.value}
          {item.description && (
            <span className="ml-2 text-xs text-gray-500">{item.description}</span>
          )}
        </Badge>
      );
    case 'credit':
      return (
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="py-2 px-4 bg-[#1a1a1a] hover:bg-[#222] text-gray-300 border-white/5"
          >
            {item.creditInfo?.symbol}
            <span className="ml-2 text-xs text-gray-500">
              Supply: {item.creditInfo?.supply}
            </span>
          </Badge>
          <Badge
            variant="outline"
            className="py-2 px-4 bg-[#1a1a1a] hover:bg-[#222] text-gray-300 border-white/5"
          >
            Price: {item.creditInfo?.price}
          </Badge>
        </div>
      );
    default:
      return (
        <Badge
          variant="outline"
          className="py-2 px-4 bg-[#1a1a1a] hover:bg-[#222] text-gray-300 border-white/5"
        >
          {item.value}
          {item.description && (
            <span className="ml-2 text-xs text-gray-500">{item.description}</span>
          )}
        </Badge>
      );
  }
};

export default ChainItemComponent;
