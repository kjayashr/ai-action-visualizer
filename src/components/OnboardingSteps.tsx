
import { Check, ChevronDown, ChevronUp, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { ConnectorCard } from "./ConnectorCard";
import { MCPConnectionForm } from "./MCPConnectionForm";

export const OnboardingSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isStep1Expanded, setIsStep1Expanded] = useState(true);
  const [isStep2Expanded, setIsStep2Expanded] = useState(false);
  const [isStep3Expanded, setIsStep3Expanded] = useState(false);
  const [selectedConnectors, setSelectedConnectors] = useState<string[]>([]);
  const [progress, setProgress] = useState(33);
  
  const handleStepClick = (step: number) => {
    if (step === 1) {
      setIsStep1Expanded(!isStep1Expanded);
    } else if (step === 2) {
      setIsStep2Expanded(!isStep2Expanded);
    } else if (step === 3 && currentStep === 3) {
      setIsStep3Expanded(!isStep3Expanded);
    }
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
      setIsStep1Expanded(false);
      setIsStep2Expanded(true);
      setProgress(66);
    } else if (currentStep === 2) {
      setCurrentStep(3);
      setIsStep2Expanded(false);
      setIsStep3Expanded(true);
      setProgress(100);
    }
  };

  const toggleConnector = (connector: string) => {
    if (selectedConnectors.includes(connector)) {
      setSelectedConnectors(selectedConnectors.filter(c => c !== connector));
    } else {
      setSelectedConnectors([...selectedConnectors, connector]);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Hi, <span className="text-blue-600">Krishnakantha Jayashree Chandrashekhar</span>
        </h1>
        <h2 className="text-2xl font-semibold">Get Started with Fastn Actions</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Step 1 */}
          <div className="mb-6">
            <StepHeader 
              step={1} 
              title="Configure which actions you want your AI to access"
              isCompleted={currentStep > 1}
              isActive={currentStep === 1}
              isExpanded={isStep1Expanded}
              onClick={() => handleStepClick(1)}
            />
            
            {isStep1Expanded && (
              <div className="mt-4 space-y-6 animate-in fade-in duration-300">
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Find your connector"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    />
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                    </div>
                    
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <div className="flex items-center h-full border-l px-3">
                        <span className="pr-2 text-sm text-gray-600">All</span>
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-blue-100 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-700 font-medium">{selectedConnectors.length}</span>
                    </div>
                    <span className="text-gray-800">
                      Connectors selected, and <span className="font-medium">2</span> Actions
                    </span>
                  </div>
                  <Button variant="outline" className="bg-white hover:bg-gray-50">
                    Show Selected
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <ConnectorCard
                    name="Google Docs"
                    icon="/lovable-uploads/822e8a9a-9765-4da6-9e0b-cb09e516e423.png"
                    description="Allows users to create, edit, and share documents through Google Docs integration."
                    isSelected={selectedConnectors.includes("google-docs")}
                    onToggle={() => toggleConnector("google-docs")}
                    actionCount={2}
                  />
                  <ConnectorCard
                    name="Google Sheets"
                    icon="/lovable-uploads/f29ff4ec-5fd2-49c5-9369-cc08f800f769.png"
                    description="Allows dynamic spreadsheet data management and collaboration by integrating external applications with Google Sheets."
                    isSelected={selectedConnectors.includes("google-sheets")}
                    onToggle={() => toggleConnector("google-sheets")}
                  />
                  <ConnectorCard
                    name="HubSpot"
                    icon="/lovable-uploads/e6d81133-581b-4e13-96e4-1a8b9356fcc2.png"
                    description="Integrates HubSpot CRM data for marketing automation, sales tracking, and customer management."
                    isSelected={selectedConnectors.includes("hubspot")}
                    onToggle={() => toggleConnector("hubspot")}
                  />
                  <ConnectorCard
                    name="Notion"
                    icon="https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg"
                    description="Provides tools for collaboration, note-taking, and project management within Notion."
                    isSelected={selectedConnectors.includes("notion")}
                    onToggle={() => toggleConnector("notion")}
                  />
                  <ConnectorCard
                    name="Salesforce"
                    icon="https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg"
                    description="Provides access to Salesforce CRM data for sales automation, customer insights, and workflow management."
                    isSelected={selectedConnectors.includes("salesforce")}
                    onToggle={() => toggleConnector("salesforce")}
                  />
                  <ConnectorCard
                    name="Zoho"
                    icon="https://www.zohowebstatic.com/sites/zweb/images/productlogos/crm-logo.svg"
                    description="Connects to Zoho for managing business operations, including CRM and productivity tools."
                    isSelected={selectedConnectors.includes("zoho")}
                    onToggle={() => toggleConnector("zoho")}
                  />
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button 
                    onClick={handleContinue}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Step 2 */}
          <div className="mb-6">
            <StepHeader 
              step={2} 
              title="Connect your MCP"
              isCompleted={currentStep > 2}
              isActive={currentStep === 2}
              isExpanded={isStep2Expanded}
              onClick={() => handleStepClick(2)}
            />
            
            {isStep2Expanded && (
              <div className="mt-4 space-y-6 animate-in fade-in duration-300">
                <MCPConnectionForm onContinue={handleContinue} />
              </div>
            )}
          </div>
          
          {/* Step 3 */}
          <div className="mb-6">
            <StepHeader 
              step={3} 
              title="Done, What next?"
              isCompleted={false}
              isActive={currentStep === 3}
              isExpanded={isStep3Expanded}
              onClick={() => handleStepClick(3)}
            />
            
            {isStep3Expanded && (
              <div className="mt-4 space-y-6 animate-in fade-in duration-300">
                <Card className="p-5 border border-green-200 bg-green-50">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold ml-3 text-green-800">Congratulations!</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    You've successfully set up your AI actions environment. Your AI can now access the 
                    connectors you've chosen through your MCP client.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Documentation
                    </Button>
                    <Button variant="outline">
                      Try an Example
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
        
        {/* Right sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden sticky top-4">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium">Your progress</h3>
            </div>
            <div className="p-4">
              <Progress value={progress} className="h-2 mb-4" />
              
              <div className="space-y-4">
                <StepIndicator 
                  step={1} 
                  title="Configure which actions you want your AI to access"
                  isCompleted={currentStep > 1}
                  isActive={currentStep === 1}
                />
                
                <div className="pl-8 space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                    Choose your connectors - Pick the apps you want to integrate.
                  </p>
                  <p className="flex items-center">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                    Connect and authorize - Securely connect your selected apps.
                  </p>
                  <p className="flex items-center">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                    Pick your actions - Define what you want your AI to do
                  </p>
                </div>
                
                <StepIndicator 
                  step={2} 
                  title="Connect your MCP"
                  isCompleted={currentStep > 2}
                  isActive={currentStep === 2}
                />
                
                {currentStep >= 2 && (
                  <div className="pl-8 space-y-2 text-sm text-gray-600">
                    <p className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                      Set up your MCP with SSE directly in Cursor.
                    </p>
                    <p className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                      Run it locally on your device or with Claude.
                    </p>
                    <p className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                      Use Fastn AI Action to connect it to your devices.
                    </p>
                  </div>
                )}
                
                <StepIndicator 
                  step={3} 
                  title="Done, What next?"
                  isCompleted={false}
                  isActive={currentStep === 3}
                />
                
                {currentStep >= 3 && (
                  <div className="pl-8 space-y-2 text-sm text-gray-600">
                    <p className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                      Explore documentation for advanced usage.
                    </p>
                    <p className="flex items-center">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                      Try example commands to test your setup.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StepHeaderProps {
  step: number;
  title: string;
  isCompleted: boolean;
  isActive: boolean;
  isExpanded: boolean;
  onClick: () => void;
}

const StepHeader = ({ step, title, isCompleted, isActive, isExpanded, onClick }: StepHeaderProps) => {
  return (
    <div 
      className={cn(
        "flex items-center p-4 rounded-lg cursor-pointer transition-all",
        isActive ? "bg-blue-50 border border-blue-100" : "bg-white border border-gray-200",
        isCompleted ? "bg-green-50 border border-green-100" : ""
      )}
      onClick={onClick}
    >
      <div className={cn(
        "h-8 w-8 rounded-full flex items-center justify-center mr-3",
        isCompleted ? "bg-green-100 text-green-700" : isActive ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
      )}>
        {isCompleted ? (
          <Check className="h-4 w-4" />
        ) : (
          <span className="font-medium">{step}</span>
        )}
      </div>
      <span className={cn(
        "font-medium flex-1",
        isCompleted ? "text-green-700" : isActive ? "text-blue-700" : "text-gray-700"
      )}>
        {title}
      </span>
      {isExpanded ? (
        <ChevronUp className="h-5 w-5 text-gray-500" />
      ) : (
        <ChevronDown className="h-5 w-5 text-gray-500" />
      )}
    </div>
  );
};

interface StepIndicatorProps {
  step: number;
  title: string;
  isCompleted: boolean;
  isActive: boolean;
}

const StepIndicator = ({ step, title, isCompleted, isActive }: StepIndicatorProps) => {
  return (
    <div className="flex items-start">
      <div className={cn(
        "h-6 w-6 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-0.5",
        isCompleted ? "bg-blue-600 text-white" : isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
      )}>
        {isCompleted ? (
          <Check className="h-3 w-3" />
        ) : (
          <span className="text-xs font-medium">{step}</span>
        )}
      </div>
      <div className="flex-1">
        <span className={cn(
          "font-medium",
          isActive ? "text-blue-600" : "text-gray-800"
        )}>
          {title}
        </span>
      </div>
    </div>
  );
};
