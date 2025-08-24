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
      { id: "home", label: "Home", icon: Home, component: "HomePage" },
      { id: "browse-friends", label: "Browse Friends", icon: Users, component: "BrowseFriendsPage" },
      { id: "direct-messages", label: "Direct Messages", icon: MessageCircle, component: "ChatWindow" }
    ]
  },
  {
    section: "Settings", 
    items: [
      { id: "profile", label: "Profile", icon: User, component: "ProfilePage" },
      { id: "room-profile", label: "Room Profile", icon: Settings, component: "RoomProfilePage" },
      { id: "audio-settings", label: "Audio Settings", icon: Headphones, component: "AudioSettingsPage" }
    ]
  }
];

interface MainNavigationProps {
  onPageChange: (pageId: string) => void;
  activePage: string;
}

export function MainNavigation({ onPageChange, activePage }: MainNavigationProps) {
  return (
    <div className="w-60 bg-sidebar-background border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <h1 className="text-lg font-semibold gradient-text">Textenger</h1>
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
                const isActive = activePage === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-300",
                      isActive 
                        ? "sidebar-active text-primary-foreground" 
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover-glow"
                    )}
                  >
                    <Icon size={18} className={isActive ? "text-white" : ""} />
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