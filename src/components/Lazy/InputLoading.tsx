
const InputLoanding: React.FC = () => {
  return (
    <>
      <div className="flex my-2  gap-2 justify-end">
        <div className=" bg-[#1F1E1F] min-w-[100px]  h-[55px] max-w-[60vw] p-4 rounded-md">
          <span className="loading loading-dots loading-md mx-auto"></span>
        </div>
        <div className="w-[40px] h-[40px] bg-black ">
          <img
            src="user.svg"
            alt="profile pic"
            className="w-[40px] h-[40px] rounded-tl-lg rounded-tr-lg rounded-br-lg "
          />
        </div>
      </div>
    </>
  );
};
export default InputLoanding;
