import React from "react";
import { ChatContextProvider } from "~/context/chatContext";
import ChatView from "~/components/chat/ChatView";
import Headers from "~/components/Headers";
const Home: React.FC = () => {
  const MemorizedHeaders = React.memo(Headers);
  const MemorizedChatView = React.memo(ChatView);
  return (
    <ChatContextProvider>
      <MemorizedHeaders />
      <MemorizedChatView />
    </ChatContextProvider>
  );
};

export default Home;
