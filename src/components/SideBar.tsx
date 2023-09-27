import React, { useState, useContext, useEffect } from "react";
import {
  MdClose,
  MdMenu,
  MdAdd,
  MdOutlineCoffee,
  MdOutlineVpnKey,
} from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { ChatContext } from "../context/chatContext";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  function handleResize() {
    window.innerWidth <= 720 ? setOpen(false) : setOpen(true);
  }

  useEffect(() => {
    handleResize();
  }, []);

  const clearChat = () => {
    const [, addMessage] = useContext(ChatContext);
    addMessage([]);
  };
  return (
    <section className={` ${open ? "w-64" : "w-16"} sidebar`}>
      <div className="sidebar__app-bar">
        <div className={`sidebar__app-logo ${!open && "scale-0 hidden"}`}>
          {/* <span className='w-8 h-8'>
            <img src={bot} alt='' />
          </span> */}
        </div>
        <h1 className={`sidebar__app-title ${!open && "scale-0 hidden"}`}>
          ChatGPT
        </h1>
        <div className={`sidebar__btn-close`} onClick={() => setOpen(!open)}>
          {open ? (
            <MdClose className="sidebar__btn-icon" />
          ) : (
            <MdMenu className="sidebar__btn-icon" />
          )}
        </div>
      </div>
      <div className="nav">
        <span
          className="border nav__item border-neutral-600"
          onClick={clearChat}
        >
          <div className="nav__icons">
            <MdAdd />
          </div>
          <h1 className={`${!open && "hidden"}`}>New chat</h1>
        </span>
      </div>

      <div className="nav__bottom">
        <div className="nav">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/cavaldos/ChatGPT"
            className="nav__item"
          >
            <div className="nav__icons">
              <AiOutlineGithub />
            </div>
            <h1 className={`${!open && "hidden"}`}>Clone on Github</h1>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
