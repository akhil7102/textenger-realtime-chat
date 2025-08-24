import { Search, Image, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function ProfilePanel() {
  return (
    <div className="w-80 bg-background border-l border-border flex flex-col">
      {/* Profile Header */}
      <div className="p-6 text-center border-b border-border">
        <Avatar className="h-20 w-20 mx-auto mb-4">
          <AvatarFallback className="bg-primary text-primary-foreground text-xl">HH</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-semibold text-foreground mb-1">Helena</h3>
        <p className="text-sm text-muted-foreground">Active 20m ago</p>
      </div>

      {/* Actions */}
      <div className="p-4 space-y-3">
        <Button 
          variant="outline" 
          className="w-full justify-start gap-3"
        >
          View profile
        </Button>
        
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3"
        >
          <Search size={16} />
          Search chat
        </Button>
        
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3"
        >
          <Image size={16} />
          Sent images
        </Button>
        
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3"
        >
          <MoreHorizontal size={16} />
          More options
        </Button>
      </div>
    </div>
  );
}