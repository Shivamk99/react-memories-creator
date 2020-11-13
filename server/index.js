import express from 'express';
import BodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js';

const app = express();

dotenv.config();

app.use(BodyParser.json({ limit: '30mb', extended: true }))
app.use(BodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req,res) => {
  res.send('hello');
});

const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server runing on port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
 
mongoose.set('useFindAndModify', false);