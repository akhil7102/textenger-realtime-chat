import { MainNavigation } from "./MainNavigation";
import { ChatList } from "./ChatList";
import { ChatWindow } from "./ChatWindow";
import { ProfilePanel } from "./ProfilePanel";

export function Dashboard() {
  return (
    <div className="h-screen flex bg-background">
      <MainNavigation />
      <ChatList />
      <ChatWindow />
      <ProfilePanel />
    </div>
  );
}