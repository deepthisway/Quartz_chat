import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConveration } = useConversation();
  // console.log("slected convo is : " + selectedConveration._id);
  // const id = selectedConveration._id;
  // console.log("id is:"+ id);
  
  useEffect(() => {
    const getMessages = async () => {
      if (selectedConveration && selectedConveration._id) {
        setLoading(true);
        try {
          // console.log("entered fetching user");
          
          const response = await axios.get(
            `http://localhost:5003/message/get/${selectedConveration._id}`,{ withCredentials: true }
          );
          setMessages(response.data.messages); 

        } catch (error) {
          console.error("Error fetching all messages:", error);
        } finally {
          setLoading(false); 
        }
      }
    };

    getMessages();
  }, [selectedConveration, setMessages]);

  return {
    messages,
    loading,
  };
};

export default useGetMessage;
