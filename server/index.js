import express from 'express';
import mongoose from 'mongoose';
import route from './routes/index';
import dotenv from 'dotenv';
import cors from 'cors';
import { handleError } from './middlewares/error';
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connect to dabase'))
  .catch((error) => console.log(error));

const app = express();
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', route);

app.use((err, req, res, next) => {
  handleError(err, res);
});
const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`App listen on port ${port}`));
