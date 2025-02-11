// app/page.tsx
import React from 'react';
import HeroSection from '@/components/HeroSection';
import LargeMediaSection from '@/components/LargeMediaSection';
import SpinStudioSection from '@/components/SpinStudioSection';
import AgentDetailsSection from '@/components/AgentDetailsSection';
import IntegrationToolsSection from '@/components/IntegrationToolsSection';
import CustomInterfacesSection from '@/components/CustomInterfacesSection';
import SpinAiExchangeSection from '@/components/SpinAiExchangeSection';
import FeaturesTabsSection from '@/components/FeaturesTabsSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import AgentStepsSection from '@/components/AgentStepsSection';
import LoveAdvisorShowcase from '@/components/agents/LoveAdvisorShowcase';
import ComedyShowcase from '@/components/agents/ComedianShowcase';
import AgentTokenEconomySimulator from '@/components/Economy';
import AgentShowcase from '@/components/agents/selector';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#141414] text-gray-100 antialiased">
      <HeroSection />
      <AgentDetailsSection />
      <AgentShowcase />
      <AgentStepsSection />
      <AgentTokenEconomySimulator />
      <SpinStudioSection />
      <IntegrationToolsSection />
      <FeaturesTabsSection />
      <Footer />
    </div>
  );
}
