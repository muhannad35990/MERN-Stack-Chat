import React, { FC } from "react";
interface Iprops {
  sender: string;
  message: string;
  date: string;
  isReceived: boolean;
}
const SingleMessage: FC<Iprops> = ({ sender, message, date, isReceived }) => {
  return (
    <div
      className={` text-xs flex ${
        isReceived ? "items-start" : "items-end"
      } justify-center flex-col max-w-60% mx-4 my-1`}
    >
      <h4
        className={`${isReceived ? "ml-2" : "mr-2"}  p-0 m-0 text-purple-900 `}
      >
        {sender}
      </h4>
      <h1 className="rounded-full bg-purple-900 text-white py-2 px-4 text-sm">
        {message}
      </h1>
      <p
        className={`${
          isReceived ? "ml-2" : "mr-2"
        } p-0   text-gray-400 text-xs `}
      >
        {date}
      </p>
    </div>
  );
};

export default SingleMessage;
