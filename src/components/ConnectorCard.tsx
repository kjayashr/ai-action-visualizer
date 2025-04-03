
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText, Table, Users, Database, Layers, MessageSquare } from "lucide-react";

interface ConnectorCardProps {
  name: string;
  icon: string | "google-docs" | "google-sheets" | "hubspot" | "notion" | "salesforce" | "zoho";
  description: string;
  isSelected: boolean;
  onToggle: () => void;
  actionCount?: number;
}

export const ConnectorCard = ({
  name,
  icon,
  description,
  isSelected,
  onToggle,
  actionCount
}: ConnectorCardProps) => {
  const getIcon = () => {
    if (typeof icon === "string") {
      switch (icon) {
        case "google-docs":
          return <FileText className="w-full h-full text-blue-600" />;
        case "google-sheets":
          return <Table className="w-full h-full text-green-600" />;
        case "hubspot":
          return <Users className="w-full h-full text-orange-600" />;
        case "notion":
          return <Layers className="w-full h-full text-gray-800" />;
        case "salesforce":
          return <Database className="w-full h-full text-blue-700" />;
        case "zoho":
          return <MessageSquare className="w-full h-full text-purple-600" />;
        default:
          // If it's an image URL, try to use it
          if (icon.startsWith("/") || icon.startsWith("http")) {
            return <img src={icon} alt={name} className="w-full h-full object-contain" />;
          }
          // Fallback icon
          return <Layers className="w-full h-full text-gray-600" />;
      }
    }
    return <Layers className="w-full h-full text-gray-600" />;
  };

  return (
    <div className={cn(
      "border rounded-lg overflow-hidden transition-all duration-200",
      isSelected ? "border-blue-300 shadow-md shadow-blue-100" : "border-gray-200"
    )}>
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 mr-3 flex-shrink-0 flex items-center justify-center">
            {getIcon()}
          </div>
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="mt-auto">
          {actionCount ? (
            <div className={cn(
              "text-center w-full py-2 font-medium rounded",
              isSelected ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
            )}>
              {actionCount} Actions Enabled
            </div>
          ) : (
            <Button 
              variant={isSelected ? "default" : "outline"}
              className={cn(
                "w-full",
                isSelected ? "bg-blue-600 hover:bg-blue-700" : ""
              )}
              onClick={onToggle}
            >
              {isSelected ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Enabled
                </>
              ) : (
                "Enable"
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
