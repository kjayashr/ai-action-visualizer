
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Copy, Clipboard, ExternalLink, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

interface MCPConnectionFormProps {
  onContinue: () => void;
}

export const MCPConnectionForm = ({ onContinue }: MCPConnectionFormProps) => {
  const [selectedTab, setSelectedTab] = useState("sse");
  const [spaceIDCopied, setSpaceIDCopied] = useState(false);
  const [apiKeyCopied, setAPIKeyCopied] = useState(false);
  const [commandCopied, setCommandCopied] = useState(false);
  
  const handleCopy = (text: string, type: 'spaceID' | 'apiKey' | 'command') => {
    navigator.clipboard.writeText(text);
    
    if (type === 'spaceID') {
      setSpaceIDCopied(true);
      setTimeout(() => setSpaceIDCopied(false), 2000);
    } else if (type === 'apiKey') {
      setAPIKeyCopied(true);
      setTimeout(() => setAPIKeyCopied(false), 2000);
    } else if (type === 'command') {
      setCommandCopied(true);
      setTimeout(() => setCommandCopied(false), 2000);
      toast.success("Command copied to clipboard!");
    }
  };
  
  const sampleCurlCommand = `curl --location 'https://live.fastn.ai/api/mcp/executeActionAgent' \\
--header 'x-fastn-api-key: ddae0dcbe89f0a8289df61bea94ef3beb71c5e52' \\
--header 'Content-Type: application/json' \\
--header 'x-fastn-space-id: 25144b91-de4c-478d-92f0-9d7fa2c3ebf3' \\
--header 'x-fastn-space-tenantid;' \\
--header 'stage: LIVE' \\
--header 'x-fastn-custom-auth: true' \\
--data '{
  "input": {
    "clientId": "25144b91-de4c-478d-92f0-9d7fa2c3ebf3",
    "userId": "e56d6d23-2992-45cc-924b-d50431b32026",
    "prompt": "Send a Slack message",
    "env":"live.fastn.ai"
  }
}'`;

  return (
    <div className="space-y-6">
      <Card className="p-5 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">Connect your MCP clients: Cursor.ai | Claude.ai | Fastn AI action agent</h3>
        
        <Tabs defaultValue="sse" className="w-full" onValueChange={setSelectedTab}>
          <TabsList className="mb-5 w-full justify-start bg-gray-100 p-1">
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
                  value="25144b91-de4c-478d-92f0-9d7fa2c3ebf3" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 pr-10"
                  readOnly
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                  onClick={() => handleCopy("25144b91-de4c-478d-92f0-9d7fa2c3ebf3", 'spaceID')}
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
                  value="ddae0dcbe89f0a8289df61bea94ef3beb71c5e52" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 pr-10"
                  readOnly
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                  onClick={() => handleCopy("ddae0dcbe89f0a8289df61bea94ef3beb71c5e52", 'apiKey')}
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
