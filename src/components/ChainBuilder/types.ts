// components/types.ts
export interface Service {
    name: string;
    scope: string;
  }
  
  export interface StorageOption {
    type: string;
    name: string;
    provider: string;
  }
  
  export interface CreditInfo {
    symbol: string;
    supply: string;
    price: string;
  }
  
  export interface ChainItem {
    type: string;
    value?: string;
    label: string;
    description?: string;
    services?: Service[];
    storageOptions?: StorageOption[];
    models?: string[];
    creditInfo?: CreditInfo;
  }
  
  export interface FeedPost {
    type: string;
    title: string;
    description: string;
    engagement: string;
    thumbnail: string;
  }
  
  export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }
  
  export interface MarketData {
    time: string;
    value: number;
  }
  