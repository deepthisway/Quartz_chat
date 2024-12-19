import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  console.log("Message sent by chat app");

  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    if (!message) {
      return res.status(400).json({ msg: "Message cannot be empty" });
    }

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      message,
      senderId,
      receiverId,
    });

    await newMessage.save();  // Save the message first
    conversation.messages.push(newMessage._id);
    await conversation.save();  // Save the conversation after adding the message

    res.status(201).json({
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.log("Error in sending message:", error);
    res.status(500).json({
      msg: "Error sending message",
    });
  }
};



export const getMessage = async (req, res) => {
  try {
    const { id: chatuserId } = req.params;
    const senderId = req.user?._id;

    if (!chatuserId) {
      return res.status(400).json({ msg: "Chat user ID is missing in the request" });
    }

    if (!senderId) {
      return res.status(401).json({ msg: "Sender not authenticated" });
    }

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, chatuserId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(404).json({ msg: "No conversation found" });
    }

    res.status(200).json({ messages: conversation.messages });
  } catch (error) {
    console.error("Failed to get messages:", error.message || error);
    res.status(500).json({ msg: "Cannot get messages" });
  }
};

