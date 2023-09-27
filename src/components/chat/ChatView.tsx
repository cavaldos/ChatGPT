import React, { useState, useRef, useEffect, useContext } from "react";

import { FaPaperPlane } from "react-icons/fa";
import { ChatContext } from "~/context/chatContext";
import ChatMessage from "~/components/chat/ChatMessage";
import Filter from "bad-words";
import { davinci } from "~/utils/davinci";
import { dalle } from "~/utils/dalle";

const ChatView: React.FC = () => {
  return (
    <>
      <div className=" min-h-[80vh] w-screen mx-auto px-[15vw]  rounded-md content-center pb-40	">
        <ChatMessage />
      </div>
      <div className="flex items-center inset-0  w-[70vw] mx-auto bg-[#1F1E1F] rounded-md  justify-center fixed h-[52px] top-[88vh] font-nunito	 ">
        <textarea
          className=" mx-5 font-nunito flex-grow justify-center resize-none outline-0 bg-transparent py-[11px] leading-normal	 h-[52px]  rounded-md  p-2 text-xl"
          placeholder="Ask CHATGPT"
        />
        <button type="submit" className="chatview__btn-send">
          <FaPaperPlane className="mx-5 hover:text-[#eee]" size={30} />
        </button>
      </div>
    </>
  );
};

export default ChatView;
