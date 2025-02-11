// components/Preview/BotPreview.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Twitter } from 'lucide-react';

interface BotPreviewProps {
  tweet: string;
}

const BotPreview: React.FC<BotPreviewProps> = ({ tweet }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex items-start gap-3"
    >
      <Twitter className="text-blue-400 mt-1" size={20} />
      <p className="text-sm text-gray-300">{tweet}</p>
    </motion.div>
  );
};

export default BotPreview;
