
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Copy, Clipboard, ExternalLink, Check, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { MCPArchitectureDiagram } from "./MCPArchitectureDiagram";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MCPConnectionFormProps {
  onContinue: () => void;
}

export const MCPConnectionForm = ({ onContinue }: MCPConnectionFormProps) => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [spaceIDCopied, setSpaceIDCopied] = useState(false);
  const [apiKeyCopied, setAPIKeyCopied] = useState(false);
  const [commandCopied, setCommandCopied] = useState(false);
  
  // Masked values for display
  const maskedSpaceID = "XXXX-XXXX-XXXX-XXXX";
  const realSpaceID = "25144b91-de4c-478d-92f0-9d7fa2c3ebf3"; // Used only for copy operation
  
  const maskedAPIKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  const realAPIKey = "ddae0dcbe89f0a8289df61bea94ef3beb71c5e52"; // Used only for copy operation
  
  const handleCopy = (text: string, type: 'spaceID' | 'apiKey' | 'command') => {
    navigator.clipboard.writeText(text);
    
    if (type === 'spaceID') {
      setSpaceIDCopied(true);
      setTimeout(() => setSpaceIDCopied(false), 2000);
      toast.success("Space ID copied to clipboard!");
    } else if (type === 'apiKey') {
      setAPIKeyCopied(true);
      setTimeout(() => setAPIKeyCopied(false), 2000);
      toast.success("API Key copied to clipboard!");
    } else if (type === 'command') {
      setCommandCopied(true);
      setTimeout(() => setCommandCopied(false), 2000);
      toast.success("Command copied to clipboard!");
    }
  };
  
  const sampleCurlCommand = `curl --location 'https://live.fastn.ai/api/mcp/executeActionAgent' \\
--header 'x-fastn-api-key: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' \\
--header 'Content-Type: application/json' \\
--header 'x-fastn-space-id: XXXX-XXXX-XXXX-XXXX' \\
--header 'x-fastn-space-tenantid;' \\
--header 'stage: LIVE' \\
--header 'x-fastn-custom-auth: true' \\
--data '{
  "input": {
    "clientId": "XXXX-XXXX-XXXX-XXXX",
    "userId": "XXXX-XXXX-XXXX-XXXX",
    "prompt": "Send a Slack message",
    "env":"live.fastn.ai"
  }
}'`;

  return (
    <div className="space-y-6">
      <Card className="p-5 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          Connect your MCP clients
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 ml-2">
                  <Info className="h-4 w-4 text-blue-500" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">MCP is an open protocol that standardizes how applications provide context to LLMs, like a USB-C port for AI applications.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h3>
        
        <Tabs defaultValue="overview" className="w-full" onValueChange={setSelectedTab}>
          <TabsList className="mb-5 w-full justify-start bg-gray-100 p-1">
            <TabsTrigger 
              value="overview" 
              className={selectedTab === "overview" ? "bg-white text-blue-600 shadow-sm font-medium" : "text-gray-600"}
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="sse" 
              className={selectedTab === "sse" ? "bg-white text-blue-600 shadow-sm font-medium" : "text-gray-600"}
            >
              SSE
            </TabsTrigger>
            <TabsTrigger 
              value="command" 
              className={selectedTab === "command" ? "bg-white text-blue-600 shadow-sm font-medium" : "text-gray-600"}
            >
              Command
            </TabsTrigger>
            <TabsTrigger 
              value="agent" 
              className={selectedTab === "agent" ? "bg-white text-blue-600 shadow-sm font-medium" : "text-gray-600"}
            >
              AI actions agent API
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-5">
            <div className="rounded-lg bg-blue-50 p-4 border border-blue-100 mb-6">
              <h4 className="font-medium text-blue-800 mb-2">What is MCP?</h4>
              <p className="text-gray-700">
                MCP (Model Context Protocol) is an open protocol that standardizes how applications provide context to LLMs. 
                Think of MCP like a USB-C port for AI applications, providing a standardized way to connect AI models to 
                different data sources and tools.
              </p>
            </div>
            
            <MCPArchitectureDiagram />
            
            <div className="rounded-lg bg-indigo-50 p-4 border border-indigo-100">
              <h4 className="font-medium text-indigo-800 mb-2">Why use MCP?</h4>
              <ul className="space-y-2 ml-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-indigo-700" />
                  </div>
                  <span>Access to a growing list of pre-built integrations that your LLM can directly plug into</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-indigo-700" />
                  </div>
                  <span>Flexibility to switch between LLM providers and vendors</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-indigo-700" />
                  </div>
                  <span>Best practices for securing your data within your infrastructure</span>
                </li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="sse" className="space-y-5">
            <div className="rounded-lg bg-gray-50 p-4 border border-gray-100">
              <p className="text-gray-700">
                SSE can be used to stream real-time model updates, such as: Live logs and status updates from an AI agent
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Connect with Cursor by following the steps:</h4>
              
              <div className="pl-4 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 text-blue-700 h-7 w-7 rounded-full flex items-center justify-center font-medium flex-shrink-0">
                    1
                  </div>
                  <div className="flex flex-1 items-center">
                    <span className="mr-2">Setup to Cursor.ai</span>
                    <span className="text-gray-600">For Cursor version ≥ 0.46 (recommended)</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 text-blue-700 h-7 w-7 rounded-full flex items-center justify-center font-medium flex-shrink-0">
                    2
                  </div>
                  <div className="flex flex-1 items-center">
                    <span className="mr-2">Connect to Cursor.ai</span>
                    <span className="text-gray-600">with Fastn actions</span>
                  </div>
                </div>
                
                <div className="rounded-lg border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 p-3 border-b border-gray-200 flex items-center justify-between">
                    <img src="https://cursor.sh/brand/cursor-logo-dark.svg" alt="Cursor" className="h-8" />
                    <ChevronButton />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="agent" className="space-y-5">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-purple-100 p-2 rounded flex items-center justify-center">
                <div className="bg-purple-500 text-white p-1.5 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="2" y="2" rx="2"/><path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"/><path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"/><path d="M10 18H5c-1.7 0-3-1.3-3-3v-1"/><polyline points="7 21 10 18 7 15"/><rect width="8" height="8" x="14" y="14" rx="2"/></svg>
                </div>
              </div>
              <h4 className="font-medium">Fastn AI actions agent</h4>
              <div className="px-2 py-1 rounded bg-purple-100 text-purple-800 text-xs font-medium">
                AI Action
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
              Use it on your device by copying the cURL command.
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 text-blue-700 h-7 w-7 rounded-full flex items-center justify-center font-medium flex-shrink-0">
                  1
                </div>
                <div>Using Fastn AI actions agent</div>
              </div>
              
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between p-3 border-b border-gray-700">
                  <span className="text-gray-300 text-sm">Command</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0 text-gray-400 hover:text-white"
                    onClick={() => handleCopy(sampleCurlCommand, 'command')}
                  >
                    {commandCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap font-mono">
                    {sampleCurlCommand}
                  </pre>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="command" className="space-y-5">
            <div className="rounded-lg bg-gray-50 p-4 border border-gray-100">
              <p className="text-gray-700">
                Use command line interfaces to interact with MCP servers and connect your applications.
              </p>
            </div>
            
            <div className="mt-4 space-y-4">
              <h4 className="font-medium">Command Line Options:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 bg-white">
                  <h5 className="font-medium mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mr-2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                    CLI Tool
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Use our dedicated CLI tool for simplified MCP server management
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Install CLI
                  </Button>
                </div>
                
                <div className="border rounded-lg p-4 bg-white">
                  <h5 className="font-medium mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 mr-2"><path d="M5 7l5 5-5 5"/><path d="M13 17h6"/></svg>
                    Terminal Commands
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Use standard terminal commands for advanced configuration
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Commands
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
      
      <Card className="p-5 border border-gray-200">
        <h3 className="text-xl font-semibold mb-5">Assets:</h3>
        
        <div className="space-y-4">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-3 font-medium text-gray-700">Space ID</div>
            <div className="col-span-8">
              <div className="relative">
                <input 
                  type="text" 
                  value={maskedSpaceID} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 pr-10"
                  readOnly
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                  onClick={() => handleCopy(realSpaceID, 'spaceID')}
                >
                  {spaceIDCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
          
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-3 font-medium text-gray-700">API Key</div>
            <div className="col-span-8">
              <div className="relative">
                <input 
                  type="text" 
                  value={maskedAPIKey} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 pr-10"
                  readOnly
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                  onClick={() => handleCopy(realAPIKey, 'apiKey')}
                >
                  {apiKeyCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </Card>
      
      <div className="flex justify-end mt-6">
        <Button 
          onClick={onContinue}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

const ChevronButton = () => {
  return (
    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </Button>
  );
};
