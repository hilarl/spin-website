"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, Bot, Code, Coins, Network, Zap, Lock, Share2 } from "lucide-react";

export default function SpinComputerDocumentation() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">SPIN Computer</h1>
        <p className="text-xl text-muted-foreground">
          The Distributed Operating System for Intelligent Agents
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Platform</TabsTrigger>
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
          <TabsTrigger value="economics">Economics</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="deployment">Deployment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What is SPIN Computer?</CardTitle>
                <CardDescription>
                  SPIN Computer is a distributed operating system designed for building, deploying, and monetizing intelligent agents. It provides a complete ecosystem for agent development, distribution, and economic incentivization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold">Agent-Native</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Built from the ground up for intelligent agent operations
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Network className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold">Distributed</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Decentralized architecture for resilient agent networks
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Coins className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold">Tokenized</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Built-in economic layer for agent monetization
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Zap className="h-4 w-4" /> Agent Runtime
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Secure execution environment</li>
                      <li>Resource management</li>
                      <li>Cross-agent communication</li>
                      <li>Automatic scaling</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Lock className="h-4 w-4" /> Security
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Hardware-backed execution</li>
                      <li>Agent isolation</li>
                      <li>Encrypted communication</li>
                      <li>Access control</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Share2 className="h-4 w-4" /> Distribution
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Global agent registry</li>
                      <li>Versioning and updates</li>
                      <li>Load balancing</li>
                      <li>Geography-aware routing</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Share2 className="h-4 w-4" /> Development
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>SPIN Language support</li>
                      <li>Local development tools</li>
                      <li>Testing framework</li>
                      <li>Monitoring and analytics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="architecture">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Core Components</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold">1. Runtime Environment</h4>
                      <pre className="bg-muted p-4 rounded-lg mt-2 text-sm">
{`runtime {
  isolation: "hardware"
  scaling: "auto"
  resources: {
    compute: "dynamic"
    memory: "configurable"
  }
}`}</pre>
                    </div>

                    <div>
                      <h4 className="font-semibold">2. Network Layer</h4>
                      <pre className="bg-muted p-4 rounded-lg mt-2 text-sm">
{`network {
  protocol: "SPIN"
  discovery: "distributed"
  routing: {
    type: "dynamic"
    geography: true
  }
}`}</pre>
                    </div>

                    <div>
                      <h4 className="font-semibold">3. Storage System</h4>
                      <pre className="bg-muted p-4 rounded-lg mt-2 text-sm">
{`storage {
  type: "distributed"
  replication: 3
  encryption: "end-to-end"
  consistency: "eventual"
}`}</pre>
                    </div>

                    <div>
                      <h4 className="font-semibold">4. Economic Layer</h4>
                      <pre className="bg-muted p-4 rounded-lg mt-2 text-sm">
{`economics {
  credits: {
    type: "native"
    supply: "dynamic"
  }
  market: {
    type: "automated"
    pricing: "dynamic"
  }
}`}</pre>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Interaction Flow</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2 text-sm">
{`// Example agent interaction flow
1. User Request → Gateway
2. Gateway → Load Balancer
3. Load Balancer → Agent Runtime
4. Agent Runtime → {
   - Resource Allocation
   - Credit Verification
   - Execution Security
   }
5. Response → User`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="economics">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Economic Model</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Credit System</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
{`credit_system {
  types: {
    SPIN: "platform_credit"
    AGENT: "agent_specific_credit"
  }
  
  allocation: {
    initial_supply: "1,000,000,000"
    distribution: {
      developers: "40%"
      users: "30%"
      platform: "20%"
      ecosystem: "10%"
    }
  }
  
  mechanics: {
    minting: "algorithmic"
    burning: "usage_based"
    staking: "required_for_deployment"
  }
}`}</pre>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Agent Economics</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
{`agent_economics {
  revenue_model: {
    usage_fees: true
    subscription: optional
    marketplace_fees: "2%"
  }
  
  incentives: {
    development: "grant_program"
    quality: "reputation_system"
    utilization: "dynamic_rewards"
  }
  
  governance: {
    proposals: "token_weighted"
    execution: "automated"
    treasury: "community_managed"
  }
}`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="development">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Development Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Agent Development</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
{`// Example SPIN Agent Development
import { SpinSDK } from '@spin/sdk';

// Initialize development environment
const spin = new SpinSDK({
  environment: 'development',
  credentials: {
    apiKey: process.env.SPIN_API_KEY
  }
});

// Create new agent
const agent = spin.createAgent({
  name: 'ExampleAgent',
  type: 'CUSTOM',
  capabilities: ['webSearch', 'dataProcessing'],
  runtime: {
    memory: '1GB',
    timeout: '30s'
  }
});

// Define agent behavior
agent.onMessage(async (message) => {
  const result = await agent.process(message);
  return result;
});

// Deploy agent
await agent.deploy();`}</pre>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Testing and Debugging</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
{`// Example test suite
import { SpinTest } from '@spin/testing';

describe('ExampleAgent', () => {
  const test = new SpinTest({
    agent: ExampleAgent,
    mock: {
      services: true,
      credits: true
    }
  });

  it('should process messages correctly', async () => {
    const result = await test.sendMessage({
      content: 'test message',
      context: { test: true }
    });

    expect(result).toMatchSnapshot();
  });

  it('should handle errors gracefully', async () => {
    // Error testing
  });
});`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="deployment">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Deployment Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Deployment Configuration</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
{`// deployment.spin.json
{
  "agent": {
    "id": "example-agent",
    "version": "1.0.0",
    "runtime": {
      "type": "PLATFORM",
      "resources": {
        "compute": "auto",
        "memory": "1GB"
      }
    },
    "scaling": {
      "min": 1,
      "max": 10,
      "target_cpu": 0.7
    },
    "availability": {
      "regions": ["us-east", "eu-west"],
      "replicas": 3
    },
    "monitoring": {
      "metrics": ["latency", "usage", "errors"],
      "alerts": {
        "error_rate": "> 1%",
        "p95_latency": "> 500ms"
      }
    }
  },
  
  "credit": {
    "symbol": "EXMP",
    "initial_supply": "1000000",
    "usage": {
      "cost_per_call": "0.1",
      "min_balance": "10"
    }
  }
}`}</pre>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Deployment Process</h3>
                  <div className="pl-4 space-y-2">
                    <ol className="list-decimal space-y-2">
                      <li>
                        <strong>Validation</strong>
                        <p className="text-sm text-muted-foreground">Configuration and code validation</p>
                      </li>
                      <li>
                        <strong>Credit Initialization</strong>
                        <p className="text-sm text-muted-foreground">Agent credit system setup and initial allocation</p>
                      </li>
                      <li>
                        <strong>Runtime Provisioning</strong>
                        <p className="text-sm text-muted-foreground">Resource allocation and runtime setup</p>
                      </li>
                      <li>
                        <strong>Network Registration</strong>
                        <p className="text-sm text-muted-foreground">Registration in the global agent registry</p>
                      </li>
                      <li>
                        <strong>Security Verification</strong>
                        <p className="text-sm text-muted-foreground">Security checks and access control setup</p>
                      </li>
                      <li>
                        <strong>Distribution</strong>
                        <p className="text-sm text-muted-foreground">Geographic deployment and replication</p>
                      </li>
                      <li>
                        <strong>Monitoring Setup</strong>
                        <p className="text-sm text-muted-foreground">Metrics, logging, and alert configuration</p>
                      </li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Deployment Commands</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
{`# Initialize deployment
spin deploy init

# Validate configuration
spin deploy validate

# Deploy agent
spin deploy agent --config deployment.spin.json

# Monitor deployment
spin deploy status

# Scale deployment
spin deploy scale --replicas 5

# Update deployment
spin deploy update --version 1.0.1

# Rollback deployment
spin deploy rollback --to 1.0.0`}</pre>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Post-Deployment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold">Monitoring</h4>
                        <pre className="bg-muted p-2 rounded-lg mt-2 text-sm">
{`spin monitor metrics
spin monitor logs
spin monitor alerts`}</pre>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold">Maintenance</h4>
                        <pre className="bg-muted p-2 rounded-lg mt-2 text-sm">
{`spin maintain backup
spin maintain update
spin maintain health`}</pre>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold">Analytics</h4>
                        <pre className="bg-muted p-2 rounded-lg mt-2 text-sm">
{`spin analytics usage
spin analytics performance
spin analytics credits`}</pre>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold">Security</h4>
                        <pre className="bg-muted p-2 rounded-lg mt-2 text-sm">
{`spin security audit
spin security scan
spin security access`}</pre>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                For detailed deployment guides and best practices, visit the SPIN Computer documentation portal.
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}