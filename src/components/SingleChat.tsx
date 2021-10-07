import { Avatar } from "@mui/material";
import React from "react";
interface Iprops {
  selectedChat: number;
  id: number;
  setSelectedChat: any;
}
const SingleChat: React.FC<Iprops> = ({
  selectedChat,
  id,
  setSelectedChat,
}) => {
  return (
    <div
      className={`h-16 flex items-center border-b-2 border-b-1  justify-between cursor-pointer ${
        id === selectedChat && "bg-gray-200"
      }`}
      onClick={() => setSelectedChat(id)}
    >
      <div className="flex items-center p-4  py-8 ">
        <Avatar />
        <div className="flex flex-col ml-4 ">
          <h1 className="font-bold text-gray-800">Muhannad</h1>
          <h3 className="text-xs text-gray-500">hello, how are you</h3>
        </div>
      </div>

      {id === selectedChat && (
        <div className="w-4 bg-purple-500 h-16 rounded-r-md"></div>
      )}
    </div>
  );
};

export default SingleChat;