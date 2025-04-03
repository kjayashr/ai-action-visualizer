
import React from "react";
import { ArrowDown, ArrowUp, Database, Globe, Laptop, Server, Network, Plug } from "lucide-react";
import { cn } from "@/lib/utils";

export const MCPArchitectureDiagram = () => {
  return (
    <div className="w-full py-6">
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Host Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="px-6 py-3 border-2 border-blue-500 rounded-lg bg-blue-50 text-center mb-2 w-72">
            <div className="flex items-center justify-center">
              <Laptop className="mr-2 text-blue-600" size={20} />
              <span className="font-semibold text-lg">Host with MCP Client</span>
            </div>
            <div className="text-sm text-gray-600">(Claude, Cursor, VS Code)</div>
          </div>
          
          {/* Protocol Arrow */}
          <div className="flex justify-center items-center h-16">
            <div className="flex flex-col items-center">
              <ArrowDown className="text-blue-600" size={20} />
              <div className="text-blue-700 font-medium text-sm">MCP Protocol</div>
              <ArrowUp className="text-blue-600 mt-1" size={20} />
            </div>
          </div>
        </div>
        
        {/* Fastn with MCP Server */}
        <div className="flex flex-col items-center mb-8">
          <div className="px-6 py-3 border-2 border-purple-500 rounded-lg bg-purple-50 text-center mb-2 w-64">
            <div className="flex items-center justify-center">
              <Server className="mr-2 text-purple-600" size={20} />
              <span className="font-semibold text-lg">Fastn with MCP Server</span>
            </div>
          </div>
          
          {/* Fastn to Connectors */}
          <div className="flex justify-center items-center h-16">
            <div className="flex flex-col items-center">
              <ArrowDown className="text-purple-600" size={20} />
              <div className="text-purple-700 font-medium text-sm">Fastn Connects</div>
              <ArrowUp className="text-purple-600 mt-1" size={20} />
            </div>
          </div>
        </div>
        
        {/* Connectors */}
        <div className="flex flex-col items-center mb-8">
          <div className="px-6 py-3 border-2 border-green-500 rounded-lg bg-green-50 text-center mb-2 w-64">
            <div className="flex items-center justify-center">
              <Plug className="mr-2 text-green-600" size={20} />
              <span className="font-semibold text-lg">Connectors</span>
            </div>
          </div>
          
          {/* Connector Line */}
          <div className="w-4/5 h-8 flex items-center justify-center">
            <div className="w-4/5 h-0.5 bg-gray-300 relative">
              <div className="absolute left-0 top-0 h-4 w-0.5 bg-gray-300"></div>
              <div className="absolute left-1/3 top-0 h-4 w-0.5 bg-gray-300"></div>
              <div className="absolute left-2/3 top-0 h-4 w-0.5 bg-gray-300"></div>
              <div className="absolute right-0 top-0 h-4 w-0.5 bg-gray-300"></div>
            </div>
          </div>
        </div>
        
        {/* Services */}
        <div className="grid grid-cols-4 gap-4">
          <ServiceBox name="Google Docs" icon="doc" />
          <ServiceBox name="Slack" icon="chat" />
          <ServiceBox name="Zoho" icon="crm" />
          <ServiceBox name="NetSuite" icon="finance" />
        </div>
        
        {/* Internet Indicator */}
        <div className="absolute top-0 right-4 flex flex-col items-center">
          <Globe className="text-blue-500" size={24} />
          <div className="text-sm font-medium text-blue-600">Internet</div>
        </div>
        
        {/* Local Indicator */}
        <div className="absolute top-1/3 right-4 flex flex-col items-center">
          <Laptop className="text-gray-600" size={24} />
          <div className="text-sm font-medium text-gray-700">Your Computer</div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">How MCP Works:</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
              <span className="text-xs font-medium">1</span>
            </div>
            <span><span className="font-medium">Host with MCP Client:</span> Programs like Claude Desktop, IDEs, or AI tools that want to access data through MCP</span>
          </li>
          <li className="flex items-start">
            <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
              <span className="text-xs font-medium">2</span>
            </div>
            <span><span className="font-medium">Fastn with MCP Server:</span> Fastn provides the MCP Server which exposes specific capabilities through the standardized Model Context Protocol</span>
          </li>
          <li className="flex items-start">
            <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
              <span className="text-xs font-medium">3</span>
            </div>
            <span><span className="font-medium">Connectors:</span> Integration points that Fastn connects to for accessing data sources and services</span>
          </li>
          <li className="flex items-start">
            <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
              <span className="text-xs font-medium">4</span>
            </div>
            <span><span className="font-medium">Services:</span> External systems available over the internet or local data sources that Fastn can securely access through connectors</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

interface ServiceBoxProps {
  name: string;
  icon: "doc" | "chat" | "crm" | "finance";
}

const ServiceBox = ({ name, icon }: ServiceBoxProps) => {
  const getIconComponent = () => {
    switch (icon) {
      case "doc":
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>;
      case "chat":
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>;
      case "crm":
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
      case "finance":
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="2" x2="22" y1="9" y2="9"/><path d="M7 15h.01"/><path d="M11 15h2"/></svg>;
      default:
        return null;
    }
  };

  return (
    <div className="px-4 py-3 border-2 border-gray-300 rounded-lg bg-white shadow-sm flex flex-col items-center justify-center">
      <div className="mb-1">{getIconComponent()}</div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};
