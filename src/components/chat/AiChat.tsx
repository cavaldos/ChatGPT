import { Message } from "~/components/chat/ChatMessage"; // Import Message type from ChatMessage

const AiChat: React.FC<{ message: Message }> = ({ message }) => {
  // Specify the type of the props
  console.log("saf", message);
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
        {message.text} {/* Display the message text */}
      </div>
    </div>
  );
};

export default AiChat;
