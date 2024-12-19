import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConveration: null,
  setSelectedConveration: (selectedConveration) => {
    // console.log("Setting selected conversation:", selectedConveration);
    set({ selectedConveration });
  },
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
