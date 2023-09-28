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
const ChatMessage: React.FC = () => {
  const messages = useSelector((state: any) => state.message.chat);
  // console.log("messages", messages[0].id);
  return (
    <>
      {messages.map((message: Message) => {
        return message.ai ? (
          <AiChat key={message.id} message={message} />
        ) : (
          <UserChat key={message.id} message={message} />
        );
      })}
    </>
  );
};

export default ChatMessage;
