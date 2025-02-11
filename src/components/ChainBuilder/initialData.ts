// components/initialData.ts
import { ChatMessage, FeedPost, MarketData, ChainItem } from './types';

export const initialData = {
  previewTweets: [
    "🎵 Based on your recent likes, you might enjoy this playlist: 'Late Night Coding Sessions' #MusicAI",
    "Found this gem on Spotify! Check out 'Ambient Focus' - perfect for deep work sessions 🎧",
    "Your daily music recommendation: 'Tech House Beats' - trending in your network 🚀",
  ],
  chatMessages: [
    { role: 'user', content: 'Can you recommend some good focus music?', timestamp: new Date() },
    { role: 'assistant', content: 'Based on your listening history, I recommend the "Deep Focus" playlist. It features ambient electronic tracks perfect for coding sessions. Would you like me to play it?', timestamp: new Date() },
    { role: 'user', content: 'Yes, please!', timestamp: new Date() },
    { role: 'assistant', content: '🎵 Playing "Deep Focus" playlist. I\'ll adjust the volume based on your preferred work settings. Let me know if you\'d like to skip any tracks or adjust the mood.', timestamp: new Date() },
  ] as ChatMessage[],
  feedPosts: [
    {
      type: 'playlist',
      title: 'Morning Productivity Mix',
      description: 'Start your day with these energizing tracks',
      engagement: '2.4k listeners',
      thumbnail: '/m-1.png'
    },
    {
      type: 'track',
      title: 'Neural Beats',
      description: 'AI-generated focus music trending in your network',
      engagement: '1.2k plays',
      thumbnail: '/m-2.png'
    },
    {
      type: 'recommendation',
      title: 'Based on your current activity',
      description: 'Switching to lower BPM tracks for your coding session',
      engagement: 'Personalized',
      thumbnail: '/m-3.png'
    }
  ] as FeedPost[],
  marketData: [
    { time: '1D', value: 2.4 },
    { time: '2D', value: 2.8 },
    { time: '3D', value: 3.1 },
    { time: '4D', value: 2.9 },
    { time: '5D', value: 3.3 },
    { time: '6D', value: 3.6 },
    { time: '7D', value: 3.9 },
  ] as MarketData[],
  chainOptions: [
    { 
      type: 'foundationModels',
      label: 'Foundational Models',
      models: ['The Siren', 'Embed'],
      description: 'Secondary Models'
    },
    { 
      type: 'integration',
      label: 'Integrations',
      services: [
        { name: 'Spotify', scope: 'Playlists' },
        { name: 'Google', scope: 'Search' }
      ]
    },
    { 
      type: 'infrastructure',
      label: 'Infrastructure Service',
      value: 'Tenzro',
      description: 'Decentralized Network'
    },
    // New custom data option added here before Data Storage
    { 
      type: 'customData',
      label: 'Custom Data',
      value: 'favorite_music.json',
      description: 'Your custom music data'
    },
    { 
      type: 'storage',
      label: 'Data Storage',
      storageOptions: [
        { type: 'Remote', name: 'MongoDB', provider: 'Tenzro' },
        { type: 'Local', name: 'DuckDB', provider: 'Praecise' }
      ]
    },
    { 
      type: 'ui',
      label: 'Type',
      value: 'Bot',
      description: 'Interface Type'
    },
    { 
      type: 'credit',
      label: 'Credit',
      creditInfo: {
        symbol: 'MU$IC',
        supply: '100M',
        price: '$1.00'
      }
    },
    { 
      type: 'deployment',
      label: 'Deployment Platform',
      value: 'X',
      description: 'Platform'
    }
  ] as ChainItem[],
};
