
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ConnectorCardProps {
  name: string;
  icon: string;
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
  return (
    <div className={cn(
      "border rounded-lg overflow-hidden transition-all duration-200",
      isSelected ? "border-blue-300 shadow-md shadow-blue-100" : "border-gray-200"
    )}>
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 mr-3 flex-shrink-0">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
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
