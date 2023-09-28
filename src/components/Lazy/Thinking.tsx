const Thinking: React.FC = () => {
  
  return (
    <div className="flex my-2 gap-2">
      <div className="w-[40px] h-[40px] bg-black">
        <img
          src="GPT.svg"
          alt="profile pic"
          className="w-[40px] h-[40px] rounded-tl-lg rounded-tr-lg rounded-bl-lg"
        />
      </div>
      <div className="bg-[#1F1E1F] min-w-[100px] max-w-[60vw] p-4 rounded-md text-center h-[55px]  justify-center">
        <span className="loading loading-dots loading-md mx-auto"></span>
      </div>
    </div>
  );
};

export default Thinking;
