// components/Footer.tsx
"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
          <div className="text-sm text-gray-400">© 2025 SPIN Platform. All rights reserved.</div>
          <div className="space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors"></a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors"></a>
          </div>
      </div>
    </footer>
  );
};

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-4 gap-12">
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Platform</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Security</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
        </ul>
      </div>
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Development</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Documentation</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">API Reference</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">GitHub</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Status</a></li>
        </ul>
      </div>
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Community</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Discord</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Twitter</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Forum</a></li>
        </ul>
      </div>
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Company</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Press</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
