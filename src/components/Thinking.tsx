
// import { MdComputer } from "react-icons/md";
import { FaBeer } from "react-icons/fa";

const Thinking = (): JSX.Element => {
  return (
    <div className="message">
      <div className="message__wrapper flex">
        <div className="message__pic">
          <FaBeer />
        </div>
        <div className="text-left message__createdAt">
          <div className="message__thinking">thinking...</div>
        </div>
      </div>
    </div>
  );
};

export default Thinking;
