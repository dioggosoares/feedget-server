import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.json());;
app.use(routes);

app.listen(3333, () => {
  console.log("Server running");
})
