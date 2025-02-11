"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function SpinLanguageDocumentation() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">The SPIN Language</h1>
        <p className="text-xl text-muted-foreground">
          A Declarative Language for Intelligent Agent Orchestration
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="concepts">Core Concepts</TabsTrigger>
          <TabsTrigger value="syntax">Syntax Guide</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What is SPIN?</CardTitle>
                <CardDescription>
                  SPIN (Structured Protocol for Intelligent Networks) is a declarative language designed for defining, orchestrating, and managing intelligent agents in a distributed system.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold">Declarative Syntax</h4>
                      <p className="text-sm text-muted-foreground">
                        Define what you want your agents to do, not how to do it
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold">Type Safety</h4>
                      <p className="text-sm text-muted-foreground">
                        Built-in type system for safe agent interactions
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold">Composability</h4>
                      <p className="text-sm text-muted-foreground">
                        Build complex behaviors from simple components
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold">Integration-First</h4>
                      <p className="text-sm text-muted-foreground">
                        Native support for external service integration
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Core Design Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">1. Agent-First Design</h4>
                    <p>Everything in SPIN is an agent or an interaction between agents.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">2. Type-Safe Communication</h4>
                    <p>All agent interactions are typed and validated at compile time.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">3. Declarative Orchestration</h4>
                    <p>Define agent behaviors and interactions using high-level declarations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">4. Composable Pipelines</h4>
                    <p>Build complex workflows by combining simple, reusable components.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="concepts">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Core Concepts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">1. Agents</h3>
                  <div className="pl-4 mt-2 space-y-2">
                    <p>Agents are the fundamental building blocks of SPIN. Each agent has:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>A unique identifier</li>
                      <li>A type definition</li>
                      <li>A set of capabilities</li>
                      <li>Input/output specifications</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">2. Pipelines</h3>
                  <div className="pl-4 mt-2 space-y-2">
                    <p>Pipelines define the flow of data and control between agents:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Sequential processing</li>
                      <li>Parallel execution</li>
                      <li>Conditional branching</li>
                      <li>Error handling</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">3. Services</h3>
                  <div className="pl-4 mt-2 space-y-2">
                    <p>Services represent external integrations:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>API endpoints</li>
                      <li>Database connections</li>
                      <li>Model providers</li>
                      <li>External tools</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">4. Credits</h3>
                  <div className="pl-4 mt-2 space-y-2">
                    <p>Credits manage agent resources and access:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Usage tracking</li>
                      <li>Access control</li>
                      <li>Resource allocation</li>
                      <li>Billing integration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="syntax">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Syntax Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Agent Definition</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
{`agent ExampleAgent {
  type: "CUSTOM"
  model: "gpt-4"
  interface: CHAT
  
  inputs {
    message: string
    context?: object
  }
  
  outputs {
    response: string
    metadata: object
  }
  
  capabilities {
    webSearch: true
    codeExecution: false
  }
}`}</pre>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Pipeline Definition</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
{`pipeline ExamplePipeline {
  input -> ProcessingAgent {
    maxTokens: 1000
    temperature: 0.7
  }
  
  ProcessingAgent -> EnhancementAgent {
    condition: "length > 100"
  }
  
  EnhancementAgent -> output {
    format: "json"
  }
}`}</pre>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Service Integration</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
{`service SpotifyIntegration {
  type: "SPOTIFY"
  auth: OAUTH2
  
  operations {
    search(query: string): Track[]
    play(trackId: string): void
  }
  
  error handling {
    retry: 3
    backoff: exponential
  }
}`}</pre>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Credit Definition</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
{`credit AgentCredit {
  symbol: "AGT"
  decimals: 18
  
  allocation {
    total: "1000000"
    initial: "100"
  }
  
  usage {
    costPerCall: "0.1"
    minBalance: "1.0"
  }
}`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="examples">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Practical Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">1. Music Recommendation Agent</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
{`agent MusicRecommender {
  type: "CUSTOM"
  model: "gemini-pro"
  interface: CHAT

  inputs {
    preferences: string
    history: Track[]
  }

  services {
    spotify: SpotifyIntegration
  }

  pipeline {
    input -> analyze -> recommend -> output

    analyze {
      model: "gemini-pro"
      temperature: 0.7
    }

    recommend {
      service: spotify
      operation: "search"
      filter: "popularity > 50"
    }
  }
}`}</pre>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">2. Content Creation Pipeline</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
{`pipeline ContentCreation {
  steps {
    research -> draft -> enhance -> review

    research {
      agent: WebResearcher
      outputs: ["summary", "sources"]
    }

    draft {
      agent: ContentWriter
      inputs: ["summary"]
      config: {
        style: "informative"
        length: "medium"
      }
    }

    enhance {
      agent: ContentEnhancer
      condition: "quality_score < 0.8"
    }

    review {
      agent: QualityChecker
      outputs: ["final_content", "metadata"]
    }
  }
}`}</pre>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">3. Data Analysis Agent</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
{`agent DataAnalyst {
  type: "DYNAMIC"
  model: "llama-32"
  interface: PROMPT

  capabilities {
    dataProcessing: true
    visualization: true
    statistical: true
  }

  services {
    database: PostgresService
    charts: PlotlyService
  }

  credit {
    symbol: "DATA"
    costPerAnalysis: "5.0"
  }

  error {
    handling: "graceful"
    retry: {
      attempts: 3
      backoff: "exponential"
    }
  }
}`}</pre>
                </div>
              </CardContent>
            </Card>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                All examples can be found in the SPIN documentation repository with full implementations and explanations.
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}