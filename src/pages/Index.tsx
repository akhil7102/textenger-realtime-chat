import { Navigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { MessageCircle, LogOut, Users, Hash, Settings } from 'lucide-react';

const Index = () => {
  const { user, signOut, loading } = useAuth();

  // Redirect to auth if not logged in
  if (!loading && !user) {
    return <Navigate to="/auth" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse">
          <MessageCircle className="h-8 w-8 text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border p-4 bg-card">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">Textenger</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Welcome back, {user?.email}
            </span>
            <Button onClick={signOut} variant="ghost" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome to Textenger</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your Discord-style real-time communication platform. Create rooms, join channels, and chat with your community.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="p-6 border border-border rounded-lg bg-card">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Rooms & Communities</h3>
              <p className="text-sm text-muted-foreground">
                Create or join rooms with your friends and communities. Organize conversations by topics.
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-card">
              <Hash className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Text & Voice Channels</h3>
              <p className="text-sm text-muted-foreground">
                Multiple channels per room for different topics. Real-time messaging with reactions and file sharing.
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-card">
              <Settings className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Roles & Permissions</h3>
              <p className="text-sm text-muted-foreground">
                Manage your rooms with owner, admin, moderator, and member roles. Control who can do what.
              </p>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border max-w-2xl mx-auto">
            <h3 className="font-semibold mb-2">🚀 Full Chat Experience Coming Soon</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We're building the complete Textenger experience with rooms, channels, real-time messaging, 
              file sharing, user presence, and much more.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <div>✅ Database & Authentication Ready</div>
              <div>✅ Dark Theme & Design System</div>
              <div>🚧 Real-time Chat Interface</div>
              <div>🚧 Room & Channel Management</div>
              <div>🚧 File Uploads & Reactions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
