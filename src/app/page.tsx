// app/page.tsx
import React from 'react';
import HeroSection from '@/components/HeroSection';
import SpinStudioSection from '@/components/SpinStudioSection';
import AgentDetailsSection from '@/components/AgentDetailsSection';
import IntegrationToolsSection from '@/components/IntegrationToolsSection';
import FeaturesTabsSection from '@/components/FeaturesTabsSection';
import Footer from '@/components/Footer';
import AgentStepsSection from '@/components/AgentStepsSection';
import AgentTokenEconomySimulator from '@/components/Economy';
import AgentShowcase from '@/components/agents/selector';
import DataFlow from '@/components/DataFlow';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#141414] text-gray-100 antialiased">
      <HeroSection />
      <AgentStepsSection />
      <AgentDetailsSection />
      <DataFlow />
      <AgentShowcase />
      <AgentTokenEconomySimulator />
      <SpinStudioSection />
      <IntegrationToolsSection />
      <FeaturesTabsSection />
      <Footer />
    </div>
  );
}
