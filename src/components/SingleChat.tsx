import { Avatar } from "@mui/material";
import React from "react";
interface Iprops {
  isSelected: boolean;
}
const SingleChat: React.FC<Iprops> = ({ isSelected }) => {
  return (
    <div
      className={`h-16 flex items-center border-b-2 border-b-1  justify-between cursor-pointer ${
        isSelected && "bg-gray-200"
      }`}
    >
      <div className="flex items-center p-4  py-8 ">
        <Avatar />
        <div className="flex flex-col ml-4 ">
          <h1 className="font-bold">Muhannad</h1>
          <h3 className="text-xs">hello, how are you</h3>
        </div>
      </div>

      {isSelected && (
        <div className="w-4 bg-purple-500 h-16 rounded-r-md"></div>
      )}
    </div>
  );
};

export default SingleChat;
