import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMessage = async ( req, res )   =>  {
    console.log("Message sent by chat app ");

    try {
        const { message } = req.body;
        //other way =>  const message = req.body.message;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        })
        if(!conversation)   {
            conversation = await Conversation.create({
                members: [senderId, receiverId],
        });
        const newMessage = new Message({
            message,
            senderId,
            receiverId
        })
        if(newMessage)  {
            // await newMessage.save();
            conversation.messages.push(newMessage._id);
            // await conversation.save();
        }
        // console.log("came till promise");
        
        await Promise.all([newMessage.save(), conversation.save()]);
        res.status(201).json({
            message: "Message sent successfully",
            newMessage
        })
    }
    } catch (error) {
        console.log("error in sending msg" + error);
        res.status(500).json({
            msg: "error sending msg"
        })
    }

}