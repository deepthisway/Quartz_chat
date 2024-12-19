import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const JWT_TOKEN = 'quartzchatapp';

const secureRoute = async (req, res, next) => {
  try {
    if (!req.cookies || !req.cookies.jwt) {
      return res.status(401).json({
        message: "No token provided, NOT AUTHORIZED!",
      });
    }
    
    const token = req.cookies.jwt;

    // Verify JWT
    const verified = jwt.verify(token, JWT_TOKEN);
    if (!verified || !verified.userId) {
      return res.status(401).json({
        message: "Invalid token, NOT AUTHORIZED!",
      });
    }

    // Find user in database
    const user = await User.findById(verified.userId).select("-password");
    if (!user) {
      console.log("user not found!!");
      
      return res.status(404).json({
        message: "User not found",
      });
    }
    
    console.log("user found")

    // Attach user to the request object for downstream handlers
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in authentication middleware:", error);

    if (error.name === "JsonWebTokenError") {
      // Invalid JWT
      return res.status(401).json({
        message: "Invalid token, NOT AUTHORIZED!",
      });
    } else if (error.name === "TokenExpiredError") {
      // Expired JWT
      return res.status(401).json({
        message: "Token expired, please log in again.",
      });
    }   
    // Other unexpected errors
    res.status(500).json({
      message: "Error in authentication process.",
    });
  }
};

export default secureRoute;
