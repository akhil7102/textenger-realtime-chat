import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { MessageCircle, LogOut } from 'lucide-react';

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
      <header className="border-b border-border p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-6 w-6 text-primary" />
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
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Welcome to Textenger</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your real-time communication platform for connecting with friends and communities. 
            Chat rooms, channels, and direct messaging - all in one place.
          </p>
          <div className="inline-block px-4 py-2 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              🚧 Coming next: Chat rooms, channels, and real-time messaging!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
