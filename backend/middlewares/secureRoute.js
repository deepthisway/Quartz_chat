import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';


const secureRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        message: 'No token provided, NOT AUTHORIZED!'
      });
    }

    const verified = jwt.verify(token, process.env.JWT_TOKEN);
    const user = await User.findById(verified.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    // Attach the user to the request object
    req.user = user;
    next();

  } catch (error) {
    console.error("Error in authentication:", error);
    res.status(500).json({
      message: "Internal server error"
    });
  }
};

export default secureRoute;
