import jwt from 'jsonwebtoken';

const createTokenAndSaveCookie = (userId, res)   =>  {
    const token = jwt.sign({userId}, process.env.JWT_TOKEN, {
        expiresIn: '5d'
    })
    res.cookie("jwt", token, {
        httpOnly: true, // xxs attack safety
        secure: true,
        sameSite: "strict" // csrf attack safety
    })
    ;
}

export default createTokenAndSaveCookie;
