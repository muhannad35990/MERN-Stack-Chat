import { AttachFile, Mood, MoreVert, Send } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useState, FC } from "react";
import SingleMessage from "./SingleMessage";
import Picker from "emoji-picker-react";
interface Iprops {
  Contact: string;
  last_seen: string;
}
const ChatContent: FC<Iprops> = ({ Contact, last_seen }) => {
  const [showSmilePad, setShowSmilePad] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const onEmojiClick = (event: any, emojiObject: any) => {
    setCurrentText(currentText + emojiObject.emoji);
  };
  return (
    <div className="h-full flex flex-col justify-between items-center">
      {/* toolbar */}
      <div className="h-16 w-full border-b-2 flex items-center justify-between bg-gray-200">
        <div className="flex items-center p-4  py-8 ">
          <Avatar />
          <div className="flex flex-col ml-4 ">
            <h1 className="font-bold text-gray-800">{Contact}</h1>
            <h3 className="text-xs text-gray-500">{last_seen}</h3>
          </div>
        </div>
        <div className="flex items-center mr-4">
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      {/* chat messages */}
      <div className="flex-1 w-full  bg-white flex flex-col  ">
        <SingleMessage
          sender="muhannad"
          message="Hi, how are you?"
          date="07.10.2021 16:19 PM"
          isReceived={false}
        />
        <SingleMessage
          sender="Ali"
          message="fine How about you? what's going with you?"
          date="07.10.2021 16:20 PM"
          isReceived={true}
        />
        <SingleMessage
          sender="Ali"
          message="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
          date="07.10.2021 16:19 PM"
          isReceived={true}
        />
        <SingleMessage
          sender="muhannad"
          message={currentText}
          date="07.10.2021 16:19 PM"
          isReceived={false}
        />
      </div>
      {/* typing box */}
      <div className="w-full h-12   flex justify-between items-center">
        <IconButton onClick={() => setShowSmilePad(!showSmilePad)}>
          <Mood className="text-purple-900 relative" />
          {showSmilePad && (
            <div className="absolute bottom-12 left-0">
              <Picker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </IconButton>

        <input
          type="text"
          className="w-full rounded-full p-2 outline-none focus:ring-1 focus:border-purple-300  transition ease-in duration-100 px-4 "
          onChange={(e) => setCurrentText(e.target.value)}
          value={currentText}
        />
        <IconButton>
          <Send className="text-purple-900" />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatContent;
