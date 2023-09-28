import { Message } from "~/components/chat/ChatMessage"; // Import Message type from ChatMessage

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiCopy } from "react-icons/fi";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


const AiChat: React.FC<{ message: Message }> = ({ message }) => {
  console.log("message", message);
  return (
    <div className="flex my-2 gap-2">
      <div className="w-[40px] h-[40px] bg-black">
        <img
          src="GPT.svg"
          alt="profile pic"
          className="w-[40px] h-[40px] rounded-tl-lg rounded-tr-lg rounded-bl-lg"
        />
      </div>
      <div className="bg-[#1F1E1F] min-w-[40vw] max-w-[60vw] p-4 rounded-md">
        <ReactMarkdown
          className="message__markdown text-left"
          children={message.text}
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "language-js");
              return !inline && match ? (
                <div className="relative">
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={oneDark as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                  <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
                    onClick={() => {
                      navigator.clipboard.writeText(children as string);
          
                    }}
                  >
                    <FiCopy />
                  </button>
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}{" "}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
};

export default AiChat;
