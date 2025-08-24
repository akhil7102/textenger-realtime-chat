import { useState } from "react";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ChatUser {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
  isOnline: boolean;
}

const mockChats: ChatUser[] = [
  {
    id: "1",
    name: "Helena Hills",
    avatar: "",
    lastMessage: "Will head to the Help Center...",
    timestamp: "20m ago",
    isOnline: true
  },
  {
    id: "2", 
    name: "Carlo Emilio",
    avatar: "",
    lastMessage: "Let's go",
    timestamp: "1h ago",
    isOnline: false
  },
  {
    id: "3",
    name: "Oscar Davis", 
    avatar: "",
    lastMessage: "Trueeeeee",
    timestamp: "2h ago",
    isOnline: true
  },
  {
    id: "4",
    name: "Daniel Jay Park",
    avatar: "",
    lastMessage: "lol yeah, are you coming to the lunc...",
    timestamp: "3h ago",
    isOnline: false
  },
  {
    id: "5",
    name: "Mark Rojas",
    avatar: "",
    lastMessage: "great catching up over dinner!!",
    timestamp: "1d ago", 
    isOnline: true
  },
  {
    id: "6",
    name: "Giannis Constantinou",
    avatar: "",
    lastMessage: "yep 👍👍",
    timestamp: "2d ago",
    isOnline: false
  }
];

export function ChatList() {
  const [selectedChat, setSelectedChat] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = mockChats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 bg-background border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold gradient-text mb-3">Direct Messages</h2>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
          <Input
            placeholder="Search chats"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-muted border-0 hover-glow focus:glow-ring"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {filteredChats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => setSelectedChat(chat.id)}
            className={cn(
              "w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-all duration-300 text-left hover-glow",
              selectedChat === chat.id && "bg-muted gradient-border"
            )}
          >
            <div className="relative">
              <Avatar className={cn("h-10 w-10", chat.isOnline && "glow-ring")}>
                <AvatarImage src={chat.avatar} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {chat.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {chat.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background glow-ring" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-foreground truncate">{chat.name}</span>
                <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}