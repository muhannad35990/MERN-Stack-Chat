import React, { useState } from "react";
import { Settings, Chat } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import SingleChat from "../components/SingleChat";
const Main = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  return (
    <div className="h-90% w-5/6 bg-white absolute top-12 shadow-lg flex rounded-xl">
      <div className="w-1/3 h-full bg-white">
        <div className=" bg-white p-2  flex  items-center flex-col border-b-2">
          <div className="flex  self-end  mb-2 ">
            <IconButton>
              <Chat />
            </IconButton>
            <IconButton>
              <Settings />
            </IconButton>
          </div>
          <input
            type="text"
            placeholder="Search ..."
            className="w-90% border-2 rounded-xl  outline-none px-4 text-sm  text-gray-600 py-2 focus:outline-none  focus:ring-1 focus:border-purple-300  transition ease-in duration-100 mb-4"
          />
        </div>
        <div className="flex flex-col h-full">
          <SingleChat
            id={1}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
          <SingleChat
            id={2}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
          <SingleChat
            id={3}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
          <SingleChat
            id={4}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
          <SingleChat
            id={5}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
        </div>
      </div>
      <div className="w-full h-full bg-gray-100"></div>
    </div>
  );
};

export default Main;
