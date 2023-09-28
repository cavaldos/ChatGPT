import { Message } from "~/components/chat/ChatMessage"; // Import Message type from ChatMessage

const UserChat: React.FC<{ message: Message }> = ({ message }) => {

  return (
    <>
      <div className="flex my-2  gap-2 justify-end">
        <div className=" bg-[#1F1E1F] min-w-[100px] max-w-[60vw] h-[55px] p-4 rounded-md">
          {message.text} {/* Display the message text */}
        </div>
        <div className="w-[40px] h-[40px] bg-black ">
          <img
            src="	https://anonchatgpt.com/static/media/avatar-user.a7a6e3a314cffa68267a7e6fbefff562.svg"
            alt="profile pic"
            className="w-[40px] h-[40px] rounded-tl-lg rounded-tr-lg rounded-br-lg "
          />
        </div>
      </div>
    </>
  );
};
export default UserChat;
