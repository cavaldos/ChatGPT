import React from "react";
import { FaBeer } from "react-icons/fa";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import moment from "moment";
import person from "~/assets/person.png";
import UserChat from "~/components/chat/UserChat";
import AiChat from "~/components/chat/AiChat";

import { useSelector } from "react-redux";

export interface Message {
  id: number;
  createdAt: number;
  text: string;
  ai: boolean;
  
}
const ChatMessage : React.FC = () => {
  const messages:[Message] = useSelector((state:any) => state.message);

  return (
    <>
      {messages.map((message) =>
        message.ai ? (
          <AiChat message={message} key={message.id} /> // Add a unique key prop
        ) : (
          <UserChat message={message} key={message.id} /> // Add a unique key prop
        )
      )}
    </>
  );
};

export default ChatMessage;
