import mongoose from "mongoose";
import User from "../models/user.model.js";

const messageSchema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    message: {
      type: String,
      required: true,
      maxLength: 1000,
      validate: [
        {
          validator: (value) => value.length > 0, 
          message: 'Message cannot be empty'
        }
      ]
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Message", messageSchema);
