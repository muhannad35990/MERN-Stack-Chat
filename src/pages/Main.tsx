import React, { useState } from "react";
import { Settings, Chat } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import SingleChat from "../components/SingleChat";
import ChatContent from "../components/ChatContent";
const Main = () => {
  const [selectedChat, setSelectedChat] = useState(-1);
  return (
    <div className="h-90% w-5/6 bg-white absolute top-12 shadow-lg flex rounded-xl ">
      <div className="w-1/3 h-full border-r flex flex-col">
        <div className=" bg-white p-2  flex  items-center flex-col   border-gray-300 bg-gray-100">
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
            className="w-90% border rounded-full  outline-none px-4 text-sm  text-gray-600 py-2 focus:outline-none  focus:ring-1 focus:border-purple-300  transition ease-in duration-100 mb-4"
          />
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <SingleChat
            id={1}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            Contact="Muhannad"
            last_message="hey, how you doing?"
            last_date="02:20 PM"
            numNotifications={2}
          />
          <SingleChat
            id={2}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            Contact="Ali agha"
            last_message="fine ..."
            last_date="05:20 AM"
            numNotifications={5}
          />
          <SingleChat
            id={3}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            Contact="Nada basha"
            last_message="when we'll meet"
            last_date="07:20 PM"
            numNotifications={5}
          />
        </div>
      </div>
      <div className="w-full h-full bg-gray-100">
        <ChatContent Contact="Muhannad" last_seen="11/10/2021 12:25 PM" />
      </div>
    </div>
  );
};

export default Main;
