
import React from "react";
import { Terminal, BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OnboardingSteps } from "@/components/OnboardingSteps";
import { LogsView } from "@/components/LogsView";
import { MCPBeginnersGuide } from "@/components/MCPBeginnersGuide";

export const MainTabs: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <Tabs defaultValue="onboarding" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="onboarding">Setup & Examples</TabsTrigger>
          <TabsTrigger value="logs" className="flex items-center gap-2">
            <Terminal className="h-4 w-4" />
            <span>Runtime Logs</span>
          </TabsTrigger>
          <TabsTrigger value="beginners" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>For Beginners</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="onboarding" className="mt-4">
          <OnboardingSteps />
        </TabsContent>
        <TabsContent value="logs" className="mt-4">
          <LogsView />
        </TabsContent>
        <TabsContent value="beginners" className="mt-4">
          <MCPBeginnersGuide />
        </TabsContent>
      </Tabs>
    </div>
  );
};
