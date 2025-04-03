
import React from "react";
import { ExternalLink, Info, Lightbulb, Book } from "lucide-react";
import { MCPArchitectureDiagram } from "@/components/MCPArchitectureDiagram";
import { MCPFlowDiagrams } from "@/components/MCPFlowDiagrams";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
