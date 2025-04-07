import React from "react";
import { ExternalLink, Info, Lightbulb, Book, MessageSquare, Check, Slack, FileText, BarChart } from "lucide-react";
import { MCPArchitectureDiagram } from "@/components/MCPArchitectureDiagram";
import { MCPFlowDiagrams } from "@/components/MCPFlowDiagrams";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell } from "@/components/ui/table";

export const MCPBeginnersGuide: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Info className="h-6 w-6 text-blue-500" />
            What is MCP?
          </CardTitle>
          <CardDescription>
            The Model Context Protocol (MCP) is an open standard that lets AI assistants interact with tools and data securely.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            MCP bridges the gap between AI models and external systems, enabling AIs to access real-world data and perform actions while maintaining security and privacy.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-medium flex items-center gap-2 mb-2">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              Key Benefits of MCP:
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Gives AI tools secure, privacy-preserving access to your data</li>
              <li>Standardizes how AI tools connect to apps and services</li>
              <li>Works with any AI model that implements the protocol</li>
              <li>Runs locally on your machine - no data sent to third parties</li>
              <li>Open protocol with permissive licensing</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table: Fastn.ai vs Others */}
      <Card className="border-2 border-blue-200">
        <CardHeader className="bg-blue-50">
          <CardTitle className="text-2xl flex items-center gap-2">
            <BarChart className="h-6 w-6 text-blue-600" />
            Fastn.ai vs Traditional iPaaS Solutions
          </CardTitle>
          <CardDescription className="text-blue-700 font-medium">
            How Fastn.ai (with embedded iPaaS) compares to traditional solutions like Zapier
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-50">
                  <TableHead className="font-semibold text-blue-800">Feature</TableHead>
                  <TableHead className="font-semibold text-blue-800">Fastn.ai (Embedded iPaaS)</TableHead>
                  <TableHead className="font-semibold text-blue-800">Others (Zapier)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Multitenancy</TableCell>
                  <TableCell className="text-green-600">✓ Built-in, true multitenancy</TableCell>
                  <TableCell className="text-red-600">✗ Each user manages own</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">White-labeling</TableCell>
                  <TableCell className="text-green-600">✓ Full brand control</TableCell>
                  <TableCell className="text-red-600">✗ Zapier branding visible</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Scalability</TableCell>
                  <TableCell className="text-green-600">✓ Enterprise-ready</TableCell>
                  <TableCell className="text-red-600">✗ Scales poorly across tenants</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">SDK / Developer Tools</TableCell>
                  <TableCell className="text-green-600">✓ SDKs & APIs available</TableCell>
                  <TableCell className="text-green-600">✓ Dev platform, but limited embedding</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Pricing Model</TableCell>
                  <TableCell className="text-green-600">✓ SaaS-facing, usage-based</TableCell>
                  <TableCell className="text-red-600">✗ End-user pricing, can get expensive</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">API Access</TableCell>
                  <TableCell className="text-green-600">✓ Full integration control</TableCell>
                  <TableCell className="text-green-600">✓ Partial API access</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Ease of Integration</TableCell>
                  <TableCell className="text-green-600">✓ Drop-in embeddable UI</TableCell>
                  <TableCell className="text-red-600">✗ Separate Zapier account/UI</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Data Residency & Compliance</TableCell>
                  <TableCell className="text-green-600">✓ Flexible & compliant</TableCell>
                  <TableCell className="text-red-600">✗ No regional control</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Analytics & Monitoring</TableCell>
                  <TableCell className="text-green-600">✓ Centralized observability</TableCell>
                  <TableCell className="text-red-600">✗ Minimal usage insights</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell className="font-medium">Support</TableCell>
                  <TableCell className="text-green-600">✓ Dedicated onboarding & support</TableCell>
                  <TableCell className="text-red-600">✗ Self-service only</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-medium flex items-center gap-2 mb-2 text-blue-800">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              Why Choose Fastn.ai for Your SaaS:
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Built for Multi-tenant SaaS:</span> Unlike traditional iPaaS solutions that require each end user to manage their own instance, Fastn.ai is designed specifically for SaaS companies needing to manage integrations across all their customers.
              </li>
              <li>
                <span className="font-medium">White-labeled Experience:</span> Present a seamless, branded integration experience to your customers without third-party branding interference.
              </li>
              <li>
                <span className="font-medium">Enterprise-grade Scalability:</span> As your customer base grows, Fastn.ai scales efficiently without the overhead of managing individual integration accounts.
              </li>
              <li>
                <span className="font-medium">Cost-effective:</span> Pricing aligned with SaaS business models prevents integration costs from eating into your margins as you scale.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Use Case: Messaging Workflow */}
      <Card className="border-2 border-purple-200">
        <CardHeader className="bg-purple-50">
          <CardTitle className="text-2xl flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-purple-600" />
            Use Case: "Send a Message" Workflow
          </CardTitle>
          <CardDescription className="text-purple-700 font-medium">
            How MCP simplifies messaging across different platforms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
            <h4 className="font-medium text-lg text-purple-800 mb-3">💼 Business Scenario:</h4>
            <p className="text-gray-700 mb-4">
              You've built a simple messaging workflow in Fastn. Every tenant (customer) just wants to send a notification like:
            </p>
            <div className="bg-white p-3 mb-4 rounded-md border border-gray-200 font-medium text-center">
              "Hey, your task is overdue!"
            </div>
            <p className="text-gray-700 mb-2">
              But different customers use different messaging tools:
            </p>
            
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-purple-800">Customer</th>
                    <th className="px-4 py-2 text-left text-purple-800">Preferred Tool</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2">Customer A</td>
                    <td className="px-4 py-2 flex items-center">
                      <Slack className="h-4 w-4 mr-2 text-blue-600" />
                      Slack
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2">Customer B</td>
                    <td className="px-4 py-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-600" viewBox="0 0 2228.833 2073.333">
                        <path fill="#5059c9" d="M1554.637 777.5h575.713c54.391 0 98.483 44.092 98.483 98.483v524.398c0 199.901-162.051 361.952-361.952 361.952h-1.711c-199.901.028-361.975-162.023-361.975-361.923V828.971c-.001-28.427 23.044-51.471 51.442-51.471z"/>
                        <circle cx="1943.75" cy="440.583" r="233.25" fill="#7b83eb"/>
                        <g fill="#5059c9"><circle cx="1218.083" cy="336.917" r="336.917"/></g>
                        <path fill="#7b83eb" d="M1667.323 777.5H717.01c-53.743 1.33-96.257 45.931-95.01 99.676v598.105c-7.505 322.519 247.657 590.16 570.167 598.053 322.51-7.893 577.672-275.534 570.167-598.053V877.176c1.245-53.745-41.268-98.346-95.011-99.676z"/>
                      </svg>
                      Microsoft Teams
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2">Customer C</td>
                    <td className="px-4 py-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                      </svg>
                      WhatsApp
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Without MCP - Now called "Multitenancy" */}
            <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
              <h4 className="font-medium text-lg text-red-700 mb-3 flex items-center">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Multitenancy Challenges:
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 inline-block mt-1">🔹</span>
                  <span>Hardcode logic: <code className="bg-white px-1 py-0.5 rounded border">if customer == A → send_slack()</code></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 inline-block mt-1">🔹</span>
                  <span>Maintain multiple workflows or agents</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 inline-block mt-1">🔹</span>
                  <span>Manually manage which customer uses which tool</span>
                </li>
              </ul>
              <p className="mt-4 text-red-700 italic">It gets messy fast, especially as you scale.</p>
            </div>
            
            {/* With Fastn + MCP */}
            <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
              <h4 className="font-medium text-lg text-green-700 mb-3 flex items-center">
                <Check className="h-5 w-5 mr-2" />
                With Fastn + MCP + Multitenancy:
              </h4>
              <p className="text-gray-700 mb-3 font-medium">
                You build one single "Send Message" workflow.
              </p>
              <p className="text-gray-700 mb-3">
                Then Fastn does the rest:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 inline-block mt-1">✅</span>
                  <span>MCP automatically loads the right context</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 inline-block mt-1">✅</span>
                  <span>Workflow picks the correct integration based on tenant</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 inline-block mt-1">✅</span>
                  <span>Message gets delivered to the right channel — no extra logic needed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-purple-800 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Behind the Scenes:
            </h4>
            <p className="text-gray-700">
              Each tenant has their own context:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 text-gray-200 p-4 rounded-lg font-mono text-sm overflow-auto">
                {`{
  "tenant": "Customer A",
  "messaging_tool": "slack",
  "slack_webhook": "https://hooks.slack.com/..."
}`}
              </div>
              
              <div className="bg-gray-900 text-gray-200 p-4 rounded-lg font-mono text-sm overflow-auto">
                {`{
  "tenant": "Customer B",
  "messaging_tool": "teams",
  "teams_channel_id": "abc-123"
}`}
              </div>
            </div>
            
            <p className="text-gray-700">
              Your Fastn workflow uses:
            </p>
            
            <div className="bg-gray-900 text-gray-200 p-4 rounded-lg font-mono text-sm overflow-auto">
              {`SendMessage(tool=MCP.messaging_tool, content="Task is overdue")`}
            </div>
            
            <p className="text-gray-700">
              Fastn figures out whether it's Slack or Teams using MCP context — you don't change a thing.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-purple-800">🧪 Output Example:</h4>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium mr-3">
                  Customer A
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Sent to <span className="font-medium">Slack</span>: "Task is overdue!"</span>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium mr-3">
                  Customer B
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Sent to <span className="font-medium">Teams</span>: "Task is overdue!"</span>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium mr-3">
                  Customer C
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Sent via <span className="font-medium">WhatsApp</span>: "Task is overdue!"</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-100 p-4 rounded-lg">
            <h4 className="font-medium text-lg text-purple-800 mb-3">✨ Why It's Beautiful:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center bg-white p-3 rounded-md shadow-sm">
                <div className="h-8 w-8 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                  <span className="text-purple-700 font-medium">1</span>
                </div>
                <span className="text-gray-800">One workflow</span>
              </li>
              <li className="flex items-center bg-white p-3 rounded-md shadow-sm">
                <div className="h-8 w-8 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                  <span className="text-purple-700 font-medium">2</span>
                </div>
                <span className="text-gray-800">Zero hardcoding</span>
              </li>
              <li className="flex items-center bg-white p-3 rounded-md shadow-sm">
                <div className="h-8 w-8 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                  <span className="text-purple-700 font-medium">3</span>
                </div>
                <span className="text-gray-800">Context-aware</span>
              </li>
              <li className="flex items-center bg-white p-3 rounded-md shadow-sm">
                <div className="h-8 w-8 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                  <span className="text-purple-700 font-medium">4</span>
                </div>
                <span className="text-gray-800">Fully multitenant out of the box</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Architecture Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">MCP Architecture</CardTitle>
          <CardDescription>Visual overview of how MCP components interact</CardDescription>
        </CardHeader>
        <CardContent>
          <MCPArchitectureDiagram />
        </CardContent>
      </Card>

      {/* Flow Diagrams */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">How MCP Works</CardTitle>
          <CardDescription>Step-by-step processes and example scenarios</CardDescription>
        </CardHeader>
        <CardContent>
          <MCPFlowDiagrams />
        </CardContent>
      </Card>

      {/* Fastn MCP Server Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Book className="h-6 w-6 text-purple-500" />
            Fastn MCP Server
          </CardTitle>
          <CardDescription>
            A dedicated MCP Server implementation that connects AI tools to your applications and data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Fastn MCP Server is a robust implementation of the MCP standard that acts as a bridge between AI assistants and your data sources. It provides secure, controlled access to your applications while keeping your data private.
          </p>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <h4 className="font-medium mb-2">Key Features of Fastn MCP Server:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Pre-built connectors for popular services like Google Docs, Slack, Notion, and more</li>
              <li>Custom connector support for connecting to any API or service</li>
              <li>Secure authentication and access control</li>
              <li>Runs locally, ensuring your data remains private</li>
              <li>Easy setup and configuration</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Resources Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Learn More</CardTitle>
          <CardDescription>Explore these resources to deepen your understanding of MCP</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://modelcontextprotocol.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="mr-4 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <ExternalLink className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium">MCP Official Website</h4>
                <p className="text-sm text-gray-600">The official MCP documentation and resources</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/modelcontextprotocol/mcp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="mr-4 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.166 8.839 21.489C9.339 21.579 9.5 21.279 9.5 21.019C9.5 20.759 9.5 20.179 9.5 19.299C6.839 19.909 6.18 17.999 6.18 17.999C5.66 16.939 5 16.639 5 16.639C4.16 16.039 5.07 16.059 5.07 16.059C6 16.139 6.61 17.079 6.61 17.079C7.5 18.669 9.12 18.039 9.56 17.799C9.66 17.159 9.91 16.729 10.17 16.489C8.02 16.239 5.78 15.399 5.78 11.599C5.78 10.499 6.22 9.599 6.85 8.899C6.75 8.659 6.35 7.599 7 6.199C7 6.199 7.9 5.929 9.5 7.039C10.3 6.809 11.15 6.699 12 6.699C12.85 6.699 13.7 6.809 14.5 7.039C16.1 5.939 17 6.199 17 6.199C17.65 7.599 17.25 8.659 17.15 8.899C17.78 9.599 18.22 10.499 18.22 11.599C18.22 15.409 15.98 16.229 13.82 16.479C14.17 16.790 14.5 17.420 14.5 18.350C14.5 19.650 14.48 20.710 14.48 21.020C14.48 21.290 14.64 21.600 15.15 21.490C19.125 20.165 22 16.415 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">MCP GitHub Repository</h4>
                <p className="text-sm text-gray-600">Source code and implementation details</p>
              </div>
            </a>
            
            <a 
              href="https://fastn.ai/mcp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="mr-4 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <ExternalLink className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium">Fastn MCP Documentation</h4>
                <p className="text-sm text-gray-600">Learn how to use Fastn MCP Server</p>
              </div>
            </a>
            
            <a 
              href="https://discord.gg/modelcontextprotocol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="mr-4 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg className="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37C18.7873 3.67028 17.147 3.16857 15.4319 2.89333C15.4007 2.88643 15.3695 2.90087 15.3534 2.9284C15.1424 3.2902 14.9087 3.7621 14.7451 4.1427C12.9004 3.88997 11.0652 3.88997 9.25832 4.1427C9.09465 3.75287 8.85248 3.2902 8.64047 2.9284C8.62438 2.90087 8.59321 2.88643 8.56195 2.89333C6.84789 3.16857 5.20756 3.67028 3.67694 4.37C3.66368 4.37633 3.65233 4.3863 3.64479 4.3989C0.533392 9.0677 -0.31895 13.6298 0.0991801 18.1232C0.101072 18.1521 0.11337 18.1795 0.130398 18.1969C2.18321 19.7222 4.17171 20.6293 6.12516 21.2383C6.15642 21.2485 6.19051 21.2364 6.20991 21.2109C6.66942 20.5728 7.08014 19.902 7.43348 19.1994C7.4543 19.1583 7.43679 19.1104 7.39367 19.0939C6.73156 18.8401 6.10028 18.5337 5.49439 18.1872C5.44697 18.1591 5.44274 18.0905 5.4858 18.0574C5.60666 17.9675 5.72756 17.8741 5.84418 17.7801C5.86499 17.7628 5.89392 17.7596 5.91994 17.7703C9.76081 19.5446 13.8605 19.5446 17.6476 17.7703C17.6736 17.7581 17.7028 17.7613 17.7247 17.7786C17.8413 17.8726 17.9622 17.9675 18.0842 18.0574C18.1273 18.0905 18.1246 18.1591 18.0769 18.1872C17.471 18.5407 16.8397 18.8401 16.1763 19.0925C16.1332 19.1089 16.1175 19.1583 16.1381 19.1994C16.5005 19.9005 16.9112 20.5712 17.3601 21.2094C17.3782 21.2364 17.4136 21.2485 17.4449 21.2383C19.4123 20.6293 21.4008 19.7222 23.4536 18.1969C23.4721 18.1795 23.4829 18.1536 23.4848 18.1247C23.9885 12.9258 22.6569 8.40365 20.3414 4.3989C20.3351 4.3863 20.3237 4.37633 20.3105 4.37L20.317 4.37ZM7.87348 15.3249C6.70302 15.3249 5.73818 14.263 5.73818 12.9657C5.73818 11.6684 6.68405 10.6065 7.87348 10.6065C9.07453 10.6065 10.0304 11.6786 10.0088 12.9657C10.0088 14.263 9.06402 15.3249 7.87348 15.3249ZM16.1495 15.3249C14.979 15.3249 14.0142 14.263 14.0142 12.9657C14.0142 11.6684 14.9601 10.6065 16.1495 10.6065C17.3505 10.6065 18.3064 11.6786 18.2848 12.9657C18.2848 14.263 17.3505 15.3249 16.1495 15.3249Z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Join the MCP Community</h4>
                <p className="text-sm text-gray-600">Connect with other developers on Discord</p>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      {/* Footer Note */}
      <div className="text-center text-gray-500 text-sm">
        <p>The Model Context Protocol is an open standard maintained by the MCP community.</p>
        <p className="mt-1">Learn more at <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">modelcontextprotocol.io</a></p>
      </div>
    </div>
  );
};
