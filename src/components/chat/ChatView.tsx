import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import ChatMessage from "~/components/chat/ChatMessage";
import Filter from "bad-words";
import { davinci } from "~/utils/davinci";
import { useDispatch } from "react-redux";
import { addMessage } from "~/redux/features/message";
import { LazyThinkingMemo } from "~/components/Lazy";
import InputLoading from "~/components/Lazy/InputLoading";
const ChatView: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [checkThinking, setCheckThinking] = useState(false); // 👈 Thêm state [checkThinking
  const [formValue, setFormValue] = useState("");
  const dispatch = useDispatch();

  const sendMessage = async (e: any) => {
    e.preventDefault();
    const key = import.meta.env.VITE_OPENAI_KEY;
    if (!key) {
      return;
    }

    const filter = new Filter();
    const cleanPrompt = filter.isProfane(formValue)
      ? filter.clean(formValue)
      : formValue;
    const newMsg = cleanPrompt;
    await setCheckThinking(true);
    try {
      const response = await davinci(newMsg, import.meta.env.VITE_OPENAI_KEY);
      const data = response.data.choices[0].message?.content;
      data !== undefined && setCheckThinking(false);
      await dispatch(
        addMessage({ text: data, createdAt: Date.now(), ai: true })
      );
    } catch (error) {
      dispatch(
        addMessage({
          text: "hello con cac, loading",
          createdAt: Date.now(),
          ai: true,
        })
      );
      console.log("error", error);
    }
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (textareaRef.current) {
        textareaRef.current.value = "";
        setFormValue("");
      }
      dispatch(
        addMessage({ text: formValue, createdAt: Date.now(), ai: false })
      );
      sendMessage(e);
    }
  };
  const handleSend = (e: any) => {
    e.preventDefault();
    if (textareaRef.current) {
      textareaRef.current.value = "";
      setFormValue("");
    }
    dispatch(addMessage({ text: formValue, createdAt: Date.now(), ai: false }));
    sendMessage(e);
  };

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);
  return (
    <>
      <div className=" min-h-[80vh] w-screen mx-auto px-[15vw]  rounded-md content-center pb-40	">
        <ChatMessage />
        {checkThinking === true ? <LazyThinkingMemo /> : <></>}
        {formValue !== "" ? <InputLoading /> : <></>}
      </div>
      <div className="flex items-center inset-0  w-[70vw] mx-auto bg-[#1F1E1F] rounded-md  justify-center fixed h-[52px] top-[88vh] font-nunito	 ">
        <textarea
          ref={textareaRef} // 👈 Thêm ref
          className=" mx-5 font-nunito flex-grow justify-center resize-none outline-0 bg-transparent py-[11px] leading-normal	 h-[52px]  rounded-md  p-2 text-xl"
          placeholder="Ask me anything"
          value={formValue}
          onKeyDown={handleKeyDown}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button
          type="submit"
          className="chatview__btn-send"
          onClick={handleSend}
        >
          <FaPaperPlane className="mx-5 hover:text-[#eee]" size={30} />
        </button>
      </div>
    </>
  );
};

export default ChatView;
