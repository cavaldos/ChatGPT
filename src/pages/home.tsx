import { ChatContextProvider } from "~/context/chatContext";
import SideBar from "~/components/SideBar";
import ChatView from "~/components/ChatView";
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
      <div className="flex transition duration-500 ease-in-out">
        <SideBar />
        <ChatView />
      </div>
    </ChatContextProvider>
  );
};

export default Home;
