import React from "react";

const ChatUser = () => {
  return (
    <div className="flex space-x-4 p-3 h-[8vh] hover:bg-gray-600 border-b" >
      <div className="avatar online">
        <div className="w-14 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
         <h1 className="text-xl">Sunny</h1>
        <span className="text-sm">Online</span>
      </div>
    </div>
  );
};

export default ChatUser;
