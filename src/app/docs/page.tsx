"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AgentDocumentation() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-8">SPIN Agent Framework Documentation</h1>

      <Tabs defaultValue="framework" className="space-y-4">
        <TabsList>
          <TabsTrigger value="framework">Agent Framework</TabsTrigger>
          <TabsTrigger value="api">API Endpoints</TabsTrigger>
          <TabsTrigger value="ui">UI Components</TabsTrigger>
        </TabsList>

        <TabsContent value="framework">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Agent Framework Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Core Components</h3>
                <div className="pl-4 space-y-2">
                  <p><strong>BaseAgent</strong>: Abstract base class defining core agent functionality</p>
                  <p><strong>BaseDynamicAgent</strong>: Implementation supporting dynamic pipeline configuration</p>
                  <p><strong>BaseCustomAgent</strong>: Implementation for custom agent behavior</p>
                </div>

                <h3 className="text-xl font-semibold mt-6">Agent Types</h3>
                <div className="pl-4">
                  <ul className="list-disc space-y-2">
                    <li><strong>Dynamic Agents</strong>: Configurable through pipeline DSL</li>
                    <li><strong>Custom Agents</strong>: Implemented with custom logic</li>
                    <li><strong>Platform Agents</strong>: Standard deployment on SPIN platform</li>
                    <li><strong>Integration Agents</strong>: Connected to external services</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6">Interface Types</h3>
                <div className="pl-4">
                  <ul className="list-disc space-y-2">
                    <li><strong>PROMPT</strong>: Single input/output interactions</li>
                    <li><strong>CHAT</strong>: Conversational interfaces</li>
                    <li><strong>FEED</strong>: Continuous content generation</li>
                    <li><strong>BOT</strong>: Automated interaction patterns</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pipeline DSL</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">Chain Configuration</h3>
                <pre className="bg-muted p-4 rounded-lg">
{`// Example Chain Configuration
const chain = inputChainBuilder()
  .aiService("gcp", "llama-32")
  .prompt("Additional context prompt")
  .integrateService({
    service: "spotify",
    operation: "search",
    parameter: "query"
  })
  .output();`}
                </pre>

                <h3 className="text-xl font-semibold mt-6">Available Steps</h3>
                <div className="pl-4 space-y-4">
                  <div>
                    <h4 className="font-semibold">AI Service</h4>
                    <p>Secondary AI model processing</p>
                    <pre className="bg-muted p-2 rounded-lg mt-2">
                      {`.aiService(provider: string, model: string)`}
                    </pre>
                  </div>

                  <div>
                    <h4 className="font-semibold">Prompt</h4>
                    <p>Additional system prompts</p>
                    <pre className="bg-muted p-2 rounded-lg mt-2">
                      {`.prompt(text: string)`}
                    </pre>
                  </div>

                  <div>
                    <h4 className="font-semibold">Integration</h4>
                    <p>External service integration</p>
                    <pre className="bg-muted p-2 rounded-lg mt-2">
                      {`.integrateService({ 
  service: string, 
  operation: string,
  parameter?: string,
  enabled?: boolean,
  scopes?: string[]
})`}
                    </pre>
                  </div>

                  <div>
                    <h4 className="font-semibold">Data Service</h4>
                    <p>Data storage and retrieval</p>
                    <pre className="bg-muted p-2 rounded-lg mt-2">
                      {`.dataService(service: string, url: string)`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="api">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Endpoints</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Agent Management</h3>
                  <div className="pl-4 space-y-4 mt-2">
                    <div>
                      <h4 className="font-semibold">GET /api/agents</h4>
                      <p className="text-sm text-muted-foreground">List all available agents</p>
                      <pre className="bg-muted p-2 rounded-lg mt-2">
                        {`Query Parameters:
- page: number
- pageSize: number
- type: string
- deploymentType: string
- isActive: boolean`}
                      </pre>
                    </div>

                    <div>
                      <h4 className="font-semibold">POST /api/agents</h4>
                      <p className="text-sm text-muted-foreground">Create new agent</p>
                      <pre className="bg-muted p-2 rounded-lg mt-2">
                        {`Body:
{
  name: string
  type: string
  description?: string
  modelProvider: string
  modelId: string
  systemPrompt: string
  deploymentType: "PLATFORM" | "TWITTER" | "CUSTOM"
  credit?: {
    symbol: string
    totalSupply: string
    costPerUse: string
  }
}`}
                      </pre>
                    </div>

                    <div>
                      <h4 className="font-semibold">GET /api/agents/[id]</h4>
                      <p className="text-sm text-muted-foreground">Get agent details</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mt-6">Agent Interaction</h3>
                  <div className="pl-4 space-y-4 mt-2">
                    <div>
                      <h4 className="font-semibold">POST /api/agent/[id]/input</h4>
                      <p className="text-sm text-muted-foreground">Send input to agent</p>
                      <pre className="bg-muted p-2 rounded-lg mt-2">
                        {`Body:
{
  userId: string
  message: string
}`}
                      </pre>
                    </div>

                    <div>
                      <h4 className="font-semibold">GET /api/agent/[id]/output</h4>
                      <p className="text-sm text-muted-foreground">Get agent output configuration</p>
                    </div>

                    <div>
                      <h4 className="font-semibold">GET /api/agent/[id]/feed</h4>
                      <p className="text-sm text-muted-foreground">Subscribe to agent feed (SSE)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ui">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UI Component Framework</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Core Components</h3>
                  <div className="pl-4 space-y-4 mt-2">
                    <div>
                      <h4 className="font-semibold">AgentInterfaceRenderer</h4>
                      <p className="text-sm text-muted-foreground">Main component for rendering agent interfaces</p>
                      <pre className="bg-muted p-2 rounded-lg mt-2">
                        {`<AgentInterfaceRenderer
  agentId={string}
  uiType={string}
  systemPrompt={string}
/>`}
                      </pre>
                    </div>

                    <div>
                      <h4 className="font-semibold">Interface Types</h4>
                      <div className="pl-4 mt-2">
                        <ul className="list-disc space-y-2">
                          <li><strong>PromptAgentInterface</strong>: Simple input/output interface</li>
                          <li><strong>ChatAgentInterface</strong>: Chat-style interaction</li>
                          <li><strong>FeedAgentInterface</strong>: Content feed display</li>
                          <li><strong>BotAgentInterface</strong>: Automated interaction UI</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mt-6">Control Components</h3>
                  <div className="pl-4 space-y-4 mt-2">
                    <div>
                      <h4 className="font-semibold">GeminiFeatures</h4>
                      <p className="text-sm text-muted-foreground">Configuration controls for Gemini models</p>
                      <pre className="bg-muted p-2 rounded-lg mt-2">
                        {`<GeminiFeatures
  config={{
    useSearch: boolean
    useLiveApi: boolean
  }}
  onChange={(config) => void}
  disabled?: boolean
/>`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mt-6">Example Usage</h3>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
                    {`// Agent page component
export default function AgentPage({ agentId }) {
  return (
    <div className="container mx-auto p-6">
      <AgentInterfaceRenderer
        agentId={agentId}
        uiType="chat"
        systemPrompt="You are a helpful assistant..."
      />
    </div>
  );
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}