import { ChatContextProvider } from "~/context/chatContext";
// import SideBar from "~/components/SideBar";
import ChatView from "~/components/chat/ChatView";

import Headers from "~/components/Headers";

const Home: React.FC = () => {
  return (
    <ChatContextProvider>
      <Headers />
      <ChatView />
    </ChatContextProvider>
  );
};

export default Home;
