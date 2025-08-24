import { Edit, Camera, Shield, Bell, Gamepad2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ProfilePage() {
  return (
    <div className="flex-1 p-6 bg-background">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <h1 className="text-3xl font-bold gradient-text">Profile Settings</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Avatar Section */}
          <Card className="gradient-border hover-glow">
            <CardHeader className="text-center">
              <CardTitle className="gradient-text">Profile Picture</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="relative inline-block">
                <Avatar className="h-24 w-24 avatar-glow">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl gradient-button">
                    JD
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="icon" 
                  className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full gradient-button hover-glow"
                >
                  <Camera size={14} />
                </Button>
              </div>
              <Button variant="outline" className="gradient-border hover-glow">
                <Camera size={16} className="mr-2" />
                Change Avatar
              </Button>
            </CardContent>
          </Card>

          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="gradient-border hover-glow">
              <CardHeader>
                <CardTitle className="gradient-text">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input 
                      id="displayName" 
                      defaultValue="John Doe" 
                      className="bg-muted border-0 hover-glow focus:glow-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input 
                      id="username" 
                      defaultValue="@johndoe" 
                      className="bg-muted border-0 hover-glow focus:glow-ring"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="john.doe@example.com" 
                    className="bg-muted border-0 hover-glow focus:glow-ring"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Tell us about yourself..." 
                    className="bg-muted border-0 hover-glow focus:glow-ring"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-border hover-glow">
              <CardHeader>
                <CardTitle className="gradient-text">Gaming Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="favoriteGame">Favorite Game</Label>
                    <Input 
                      id="favoriteGame" 
                      placeholder="Valorant, CS2, etc." 
                      className="bg-muted border-0 hover-glow focus:glow-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rank">Current Rank</Label>
                    <Input 
                      id="rank" 
                      placeholder="Diamond, Global Elite, etc." 
                      className="bg-muted border-0 hover-glow focus:glow-ring"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="steamId">Steam ID</Label>
                  <Input 
                    id="steamId" 
                    placeholder="Your Steam profile URL" 
                    className="bg-muted border-0 hover-glow focus:glow-ring"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Settings */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="gradient-border hover-glow">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold gradient-text mb-2">Privacy</h3>
              <p className="text-sm text-muted-foreground mb-3">Manage your privacy settings</p>
              <Button variant="outline" size="sm" className="gradient-border hover-glow">
                Configure
              </Button>
            </CardContent>
          </Card>

          <Card className="gradient-border hover-glow">
            <CardContent className="p-6 text-center">
              <Bell className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold gradient-text mb-2">Notifications</h3>
              <p className="text-sm text-muted-foreground mb-3">Customize your alerts</p>
              <Button variant="outline" size="sm" className="gradient-border hover-glow">
                Manage
              </Button>
            </CardContent>
          </Card>

          <Card className="gradient-border hover-glow">
            <CardContent className="p-6 text-center">
              <Gamepad2 className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold gradient-text mb-2">Gaming</h3>
              <p className="text-sm text-muted-foreground mb-3">Game integrations & status</p>
              <Button variant="outline" size="sm" className="gradient-border hover-glow">
                Setup
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button className="gradient-button hover-glow">
            <Edit size={16} className="mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}