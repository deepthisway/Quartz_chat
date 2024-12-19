import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signup = async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;
  if (password != confirmpassword) {
    return res.status(400).json({
      msg: "Passwords do not match!! Check Again.",
    });
  }
  const user = await User.findOne({ email });
  if (user) {
    return res.json({
      msg: "User already exists!!",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
      confirmpassword,
    });
    await newUser.save();
    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);
      res.status(201).json({
        msg: "User created successfully!!",
        newUser:{
          _id: newUser._id,
          name:newUser.name,
          email:newUser.email
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const founduser = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, founduser.password);
    if (!founduser || !isMatch) {
      return res.status(400).json({
        msg: "Invalid Credentials!!",
      });
    }
    createTokenAndSaveCookie(founduser._id, res);
    res.status(200).json({
      msg: "User logged in successfully!!",
      founduser:{
        _id: founduser._id,
        name:founduser.name,
        email:founduser.email
      }
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error Occured!!",
    });
  }
};

export const logout = async (req, res)  =>  {
  try {
    res.clearCookie('jwt');   // the name 'jwt' has come from file generatejwt where the token was set into the cookie
    res.status(200).json({
      msg: "User logged out successfully!!",
    })

  } catch (error) {
      res.status(500).json({
        msg: "Error Occured!!",
      });
  }
}

// to get the users

export const getUserProfile = async (req, res) => {
  try {
    // const loggedInUser = req.User._id;
    const allUsers = await User.find().select("-password");
    // console.log(allUsers)
    res.status(200).json({
      allUsers
    })
  } catch (error) {
      console.log("Error in all users:" + error)
      res.status(500).json({
        msg: "Error Occured in fetching users!!",
      })
  }
}

