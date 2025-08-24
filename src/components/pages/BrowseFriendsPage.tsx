import { useState } from "react";
import { Search, UserPlus, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Friend {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  isOnline: boolean;
  gameStatus?: string;
}

const mockFriends: Friend[] = [
  {
    id: "1",
    name: "Alex Chen",
    username: "@alexgamer",
    isOnline: true,
    gameStatus: "Playing Valorant"
  },
  {
    id: "2",
    name: "Sarah Johnson", 
    username: "@sarahj",
    isOnline: true,
    gameStatus: "In lobby"
  },
  {
    id: "3",
    name: "Mike Torres",
    username: "@miket",
    isOnline: false
  },
  {
    id: "4",
    name: "Emma Wilson",
    username: "@emmaw",
    isOnline: true,
    gameStatus: "Playing CS2"
  }
];

export function BrowseFriendsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFriends = mockFriends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    friend.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 p-6 bg-background">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold gradient-text">Browse Friends</h1>
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                placeholder="Search friends..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted border-0 hover-glow focus:glow-ring"
              />
            </div>
            <Button className="gradient-button hover-glow">
              <UserPlus size={16} className="mr-2" />
              Add Friend
            </Button>
          </div>
        </div>

        {/* Friends Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFriends.map((friend) => (
            <Card key={friend.id} className="gradient-border hover-glow">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center">
                  <Avatar className={`h-16 w-16 ${friend.isOnline ? 'glow-ring' : ''}`}>
                    <AvatarImage src={friend.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {friend.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-lg gradient-text">{friend.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{friend.username}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  {friend.isOnline ? (
                    <div className="space-y-1">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-400">Online</span>
                      </div>
                      {friend.gameStatus && (
                        <p className="text-xs text-muted-foreground">{friend.gameStatus}</p>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Offline</span>
                    </div>
                  )}
                </div>
                <Button variant="outline" className="w-full gradient-border hover-glow">
                  <MessageCircle size={16} className="mr-2" />
                  Message
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}