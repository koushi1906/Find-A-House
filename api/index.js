import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log(err);
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
})