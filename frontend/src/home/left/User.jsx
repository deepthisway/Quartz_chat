import React from "react";
import useConversation from "../../zustand/useConversation.js";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConveration } = useConversation();
  const isSelected = selectedConversation?._id && user?._id 
                      ? selectedConversation._id === user._id 
                      : false;

  return (
    <div
      className={`hover:bg-slate-500 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => {
        console.log("User clicked: ", user);
        setSelectedConveration(user); // Ensure the user object is correctly passed
      }}
    >
      <div className="flex space-x-5 px-6 py-7 hover:bg-slate-600 duration-200 cursor-pointer">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">{user?.name || "Unknown User"}</h1>
          <span>{user?.email || "No Email"}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
