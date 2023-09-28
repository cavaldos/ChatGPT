import React from "react";
import { useSelector } from "react-redux";
import { LazyAiChatMemo, LazyUserChatMemo } from "~/components/Lazy/index";
export interface Message {
  id: number;
  createdAt: number;
  text: string;
  ai: boolean;
}

const ChatMessage: React.FC = () => {
  const messages = useSelector((state: any) => state.message.chat);
  return (
    <>

      {messages.map((message: Message) => {
        return message.ai ? (
          <LazyAiChatMemo key={message.id} message={message} />
        ) : (
          <LazyUserChatMemo key={message.id} message={message} />
        );
      })}
    </>
  );
};

export default ChatMessage;
