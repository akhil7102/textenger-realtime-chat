import { useState, useEffect } from "react";
import { Search, UserPlus, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface Profile {
  id: string;
  username: string;
  display_name: string;
  avatar_url?: string;
  bio?: string;
  favorite_game?: string;
  current_rank?: string;
}

export function BrowseFriendsPage() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Profile[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchUsers = async (query: string) => {
    if (!query.trim() || !user) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, username, display_name, avatar_url, bio, favorite_game, current_rank')
        .or(`username.ilike.%${query}%,display_name.ilike.%${query}%`)
        .neq('id', user.id)
        .limit(20);

      if (error) throw error;
      setSearchResults(data || []);
    } catch (error) {
      console.error('Error searching users:', error);
      toast.error("Failed to search users");
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchUsers(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, user]);

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
                placeholder="Search by username or display name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted border-0 hover-glow focus:glow-ring"
              />
            </div>
          </div>
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold gradient-text">
              Search Results {isSearching && "(Searching...)"}
            </h2>
            
            {searchResults.length === 0 && !isSearching && searchQuery && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No users found matching "{searchQuery}"</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((profile) => (
                <Card key={profile.id} className="gradient-border hover-glow">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center">
                      <Avatar className="h-16 w-16 glow-ring">
                        <AvatarImage src={profile.avatar_url} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg gradient-button">
                          {(profile.display_name || profile.username || 'U')[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-lg gradient-text">
                      {profile.display_name || profile.username}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">@{profile.username}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {profile.favorite_game && (
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Playing: {profile.favorite_game}</p>
                        {profile.current_rank && (
                          <p className="text-xs text-green-400">Rank: {profile.current_rank}</p>
                        )}
                      </div>
                    )}
                    {profile.bio && (
                      <p className="text-xs text-muted-foreground text-center truncate">{profile.bio}</p>
                    )}
                    <Button variant="outline" className="w-full gradient-border hover-glow">
                      <MessageCircle size={16} className="mr-2" />
                      Message
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Instructions when no search */}
        {!searchQuery && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-xl font-semibold gradient-text mb-2">Find Your Friends</h3>
            <p className="text-muted-foreground">
              Start typing in the search box above to find other users by their username or display name.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}