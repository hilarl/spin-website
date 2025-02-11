// components/Preview/FeedPreview.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FeedPost } from '../types';

interface FeedPreviewProps {
  feedPosts: FeedPost[];
  visiblePosts: number;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const postVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const FeedPreview: React.FC<FeedPreviewProps> = ({ feedPosts, visiblePosts }) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-4">
      {feedPosts.slice(0, visiblePosts).map((post, index) => (
        <motion.div
          key={index}
          variants={postVariants}
          className="flex gap-4 p-4 bg-[#1a1a1a] rounded-xl border border-white/5"
        >
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-black/20">
            <img 
              src={post.thumbnail} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-medium text-gray-300">{post.title}</span>
            </div>
            <p className="text-sm text-gray-400 mb-2">{post.description}</p>
            <div className="text-xs text-gray-500">{post.engagement}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeedPreview;
