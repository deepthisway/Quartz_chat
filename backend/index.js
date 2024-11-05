import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js'
dotenv.config();

const app = express();
const PORT = 5002;
const URI = process.env.MONGODB_URI; 

app.use(express.json());

// Connect to MongoDB
try {
    mongoose.connect(URI)
        .then(() => console.log("DB connected!!"))
        .catch((error) => console.error("DB connection error: ", error));
} catch (error) {
    console.error("Error while connecting to DB: ", error);
}

app.use('/user', userRoute)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
