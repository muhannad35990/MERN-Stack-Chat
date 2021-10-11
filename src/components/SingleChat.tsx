import { Avatar } from "@mui/material";
import React from "react";
interface Iprops {
  selectedChat: number;
  id: number;
  setSelectedChat: any;
  Contact: string;
  last_message: string;
  last_date: string;
  numNotifications: number;
}
const SingleChat: React.FC<Iprops> = ({
  selectedChat,
  id,
  setSelectedChat,
  Contact,
  last_message,
  last_date,
  numNotifications,
}) => {
  return (
    <div
      className={`h-16 flex items-center border-b border-b-1  justify-between cursor-pointer ${
        id === selectedChat && "bg-gray-200 "
      }`}
      onClick={() => setSelectedChat(id)}
    >
      <div className="flex items-center p-4  py-8 w-full ">
        <Avatar />
        <div className="flex justify-between items-ceter flex-1">
          <div className="flex flex-col ml-4 ">
            <h1 className="font-bold text-gray-800">{Contact}</h1>
            <h3 className="text-xs text-gray-500">{last_message}</h3>
          </div>
          <div className="flex flex-col items-end justify-between mt-1">
            <p className="text-xs">{last_date}</p>
            <div className="w-4 h-4 rounded-full bg-purple-900 text-xs text-white flex justify-center items-center shadow">
              {numNotifications}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-2 ${
          id === selectedChat ? "bg-purple-900" : "bg-white"
        } h-16 `}
      ></div>
    </div>
  );
};

export default SingleChat;
