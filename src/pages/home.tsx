import { ChatContextProvider } from "~/context/chatContext";
// import SideBar from "~/components/SideBar";
import ChatView from "~/components/chat/ChatView";

import Headers from "~/components/Headers";
import { useEffect, useState } from "react";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const apiKey = window.localStorage.getItem("api-key");
    if (!apiKey) {
      setModalOpen(true);
    }
  }, []);
  return (
    <ChatContextProvider>
      <Headers />
      <ChatView />
    </ChatContextProvider>
  );
};

export default Home;
