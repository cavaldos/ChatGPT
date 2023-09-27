import { Message } from "~/components/chat/ChatMessage"; // Import Message type from ChatMessage

const UserChat: React.FC<{ message: Message }> = ({ message }) => {
  console.log("usaer", message);
  return (
    <>
      <div className="flex my-2  gap-2 justify-end">
        <div className=" bg-[#1F1E1F] min-w-[40vw] max-w-[60vw] p-4 rounded-md">
          {message.text} {/* Display the message text */}
        </div>
        <div className="w-[40px] h-[40px] bg-black ">
          <img
            src="https://avatars.githubusercontent.com/u/73420136?v=4"
            alt="profile pic"
            className="w-[40px] h-[40px] rounded-tl-lg rounded-tr-lg rounded-br-lg "
          />
        </div>
      </div>
    </>
  );
};
export default UserChat;
