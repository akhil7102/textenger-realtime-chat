import { useState } from "react";
import { 
  Home, 
  Users, 
  MessageCircle, 
  User, 
  Settings,
  Headphones
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    section: "Discover",
    items: [
      { id: "home", label: "Home", icon: Home },
      { id: "browse-friends", label: "Browse Friends", icon: Users },
      { id: "direct-messages", label: "Direct Messages", icon: MessageCircle }
    ]
  },
  {
    section: "Settings", 
    items: [
      { id: "profile", label: "Profile", icon: User },
      { id: "room-profile", label: "Room Profile", icon: Settings },
      { id: "audio-settings", label: "Audio Settings", icon: Headphones }
    ]
  }
];

export function MainNavigation() {
  const [activeItem, setActiveItem] = useState("direct-messages");

  return (
    <div className="w-60 bg-sidebar-background border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <h1 className="text-lg font-semibold text-sidebar-foreground">Textenger</h1>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-6">
        {navigationItems.map((section) => (
          <div key={section.section}>
            <h2 className="text-sm font-medium text-sidebar-foreground mb-3">
              {section.section}
            </h2>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                      isActive 
                        ? "bg-sidebar-accent text-sidebar-primary" 
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                    )}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}