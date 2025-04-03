
import React from "react";
import { Copy, TerminalSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const LogsView: React.FC = () => {
  const { toast } = useToast();

  const handleCopyClick = () => {
    navigator.clipboard.writeText("Waiting for your request...\n\nPlease send a command (e.g., 'send message to Slack') from your client (Cursor, Claude, or Terminal). Once your request is received, it will show up here.");
    toast({
      title: "Copied to clipboard",
      description: "The logs have been copied to your clipboard.",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <TerminalSquare className="h-6 w-6 text-gray-700 mr-2" />
        <h3 className="text-xl font-semibold text-gray-800">MCP Runtime Logs</h3>
      </div>
      
      <div className="relative">
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap min-h-[200px]">
          Waiting for your request...

          Please send a command (e.g., 'send message to Slack') from your client (Cursor, Claude, or Terminal). Once your request is received, it will show up here.
        </div>
        <button
          onClick={handleCopyClick}
          className="absolute top-2 right-2 p-1.5 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors"
          aria-label="Copy logs"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
      
      <p className="text-sm text-gray-600 mt-2">
        These logs show the real-time communication between your AI client and the MCP host. Send a command from your AI to see the logs update.
      </p>
      
      <div className="rounded-lg border border-gray-200 p-4 mt-4 bg-amber-50">
        <h4 className="font-medium mb-2 text-amber-800">Tips for using MCP</h4>
        <ul className="list-disc pl-5 space-y-2 text-sm text-amber-700">
          <li>Try asking your AI to "Send a message to Slack"</li>
          <li>Request "Pull the latest data from Google Sheets"</li>
          <li>Ask to "Check my calendar for upcoming meetings"</li>
          <li>Commands work best when they're specific and action-oriented</li>
        </ul>
      </div>
    </div>
  );
};
