
import React from "react";
import { ExternalLink, ArrowRight, FileText, Table, Users, Code, Server } from "lucide-react";
import { cn } from "@/lib/utils";

export const MCPFlowDiagrams = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-2">How MCP works with your actions</h3>
      
      {/* Flow Diagram 1: Basic Flow */}
      <div className="rounded-lg border border-gray-200 p-4">
        <h4 className="font-medium mb-3 text-gray-800">Basic MCP Flow</h4>
        <div className="flex flex-col space-y-4">
          <FlowStep 
            number={1} 
            title="User Request" 
            description="User sends a request to their AI assistant (Claude, Cursor, etc.)"
          />
          <FlowArrow />
          <FlowStep 
            number={2} 
            title="MCP Client" 
            description="The AI assistant uses MCP to fetch context and data securely"
            highlight={true}
          />
          <FlowArrow />
          <FlowStep 
            number={3} 
            title="MCP Server (Fastn)" 
            description="Fastn MCP Host processes the request and calls the appropriate connector"
          />
          <FlowArrow />
          <FlowStep 
            number={4} 
            title="Actions Executed" 
            description="Connectors perform the requested actions with your services"
          />
          <FlowArrow />
          <FlowStep 
            number={5} 
            title="Response" 
            description="Results flow back to the AI assistant who can provide a relevant response"
          />
        </div>
      </div>

      {/* Flow Diagram 2: Example Scenarios */}
      <div className="rounded-lg border border-gray-200 p-4">
        <h4 className="font-medium mb-3 text-gray-800">Example Scenarios</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ExampleCard
            title="Document Management"
            icon="document"
            description="Ask your AI to update a Google Doc with meeting notes"
            example="Update our quarterly goals document with the summary from today's meeting"
          />
          
          <ExampleCard
            title="Data Analysis"
            icon="spreadsheet"
            description="Request your AI to analyze data from Google Sheets"
            example="Create a chart from our sales data in the Q2 spreadsheet"
          />
          
          <ExampleCard
            title="CRM Management"
            icon="crm"
            description="Ask your AI to update HubSpot records"
            example="Add a note to John Smith's contact in HubSpot about our call today"
          />
          
          <ExampleCard
            title="Custom Actions"
            icon="code"
            description="Build your own custom actions with Fastn Flow MCP"
            example="Create a custom workflow that processes data through multiple systems"
          />
        </div>
      </div>

      {/* Documentation Links */}
      <div className="rounded-lg border border-gray-200 p-4">
        <h4 className="font-medium mb-3 text-gray-800">Resources</h4>
        <div className="space-y-3">
          <a 
            href="https://modelcontextprotocol.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            MCP Documentation
          </a>
          <a 
            href="https://fastn.ai/docs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Fastn Actions Documentation
          </a>
          <a 
            href="https://github.com/modelcontextprotocol/mcp-js" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            MCP JavaScript SDK
          </a>
        </div>
      </div>
    </div>
  );
};

interface FlowStepProps {
  number: number;
  title: string;
  description: string;
  highlight?: boolean;
}

const FlowStep = ({ number, title, description, highlight = false }: FlowStepProps) => {
  return (
    <div className={cn(
      "p-3 rounded-lg border flex items-start",
      highlight 
        ? "border-blue-200 bg-blue-50" 
        : "border-gray-200 bg-white"
    )}>
      <div className={cn(
        "h-7 w-7 rounded-full flex items-center justify-center mr-3 flex-shrink-0",
        highlight 
          ? "bg-blue-100 text-blue-700" 
          : "bg-gray-100 text-gray-700"
      )}>
        <span className="text-xs font-medium">{number}</span>
      </div>
      <div>
        <h5 className={cn(
          "font-medium",
          highlight ? "text-blue-700" : "text-gray-800"
        )}>
          {title}
        </h5>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

const FlowArrow = () => {
  return (
    <div className="flex justify-center py-1">
      <ArrowRight className="text-gray-400 h-5 w-5" />
    </div>
  );
};

interface ExampleCardProps {
  title: string;
  icon: "document" | "spreadsheet" | "crm" | "code";
  description: string;
  example: string;
}

const ExampleCard = ({ title, icon, description, example }: ExampleCardProps) => {
  const getIconComponent = () => {
    switch (icon) {
      case "document":
        return <FileText className="h-6 w-6 text-blue-600" />;
      case "spreadsheet":
        return <Table className="h-6 w-6 text-green-600" />;
      case "crm":
        return <Users className="h-6 w-6 text-orange-600" />;
      case "code":
        return <Code className="h-6 w-6 text-purple-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex items-center mb-2">
        <div className="h-10 w-10 rounded bg-gray-100 flex items-center justify-center mr-3">
          {getIconComponent()}
        </div>
        <h5 className="font-medium">{title}</h5>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="bg-gray-100 p-2 rounded-md text-sm italic text-gray-700">
        "{example}"
      </div>
    </div>
  );
};
