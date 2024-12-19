import jwt from 'jsonwebtoken';
const JWT_TOKEN = "quartzchatapp"
const createTokenAndSaveCookie = (userId, res)   =>  {
    const token = jwt.sign({userId}, JWT_TOKEN, {
        expiresIn: '5d'
    })
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Secure only for HTTPS
        sameSite: "None",
      });
      
}

export default createTokenAndSaveCookie;
