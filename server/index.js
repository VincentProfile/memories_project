import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

// starting path for all the routes (localhost:5001/posts)
app.use('/posts', postRoutes);
// limiting the image to be < 30mb
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

// https://www.mongodb.com/cloud vxEVdpibZVKJKnJB

const CONNECTION_URL = 'mongodb+srv://eggsandbread:vxEVdpibZVKJKnJB@cluster.rqdadit.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5001;

// connect to mongoose db
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));