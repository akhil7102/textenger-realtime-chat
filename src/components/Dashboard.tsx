import { useState } from "react";
import { MainNavigation } from "./MainNavigation";
import { ChatList } from "./ChatList";
import { ChatWindow } from "./ChatWindow";
import { ProfilePanel } from "./ProfilePanel";
import { HomePage } from "./pages/HomePage";
import { BrowseFriendsPage } from "./pages/BrowseFriendsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { RoomProfilePage } from "./pages/RoomProfilePage";
import { AudioSettingsPage } from "./pages/AudioSettingsPage";

export function Dashboard() {
  const [activePage, setActivePage] = useState("direct-messages");

  const renderMainContent = () => {
    switch (activePage) {
      case "home":
        return <HomePage />;
      case "browse-friends":
        return <BrowseFriendsPage />;
      case "profile":
        return <ProfilePage />;
      case "room-profile":
        return <RoomProfilePage />;
      case "audio-settings":
        return <AudioSettingsPage />;
      case "direct-messages":
      default:
        return (
          <>
            <ChatList />
            <ChatWindow />
            <ProfilePanel />
          </>
        );
    }
  };

  return (
    <div className="h-screen flex bg-background">
      <MainNavigation onPageChange={setActivePage} activePage={activePage} />
      {renderMainContent()}
    </div>
  );
}