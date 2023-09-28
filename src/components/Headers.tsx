const Headers: React.FC = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center h-[30vh]">
        <div className="flex items-center gap-3">
          <img
            src="https://anonchatgpt.com/static/media/logo.512cabf5b8cd0e30a40877696b6c3ce7.svg"
            alt="profile pic"
            className="rounded-[40px] h-[150px] w-[150px]"
          />
          <header className="text-8xl text-[#fff] ">ChatGPT</header>
        </div>

        <div className="text-xl text-[#fff] font-nunito">
          <a
            href="https://github.com/cavaldos/ChatGPT"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-slate-400 font-nunito"
          >
            Git Clone
          </a>
        </div>
      </div>
    </>
  );
};

export default Headers;
