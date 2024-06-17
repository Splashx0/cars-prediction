import express from 'express';
import morgan from 'morgan';
import prisma from './prisma/prisma.js';
import CarsRouter from './src/routes/cars.routes.js'
import QuestionsRouter from './src/routes/questions.routes.js'
import authRouter from './src/routes/auth.routes.js'
import quizzRouter from './src/routes/quizz.routes.js'
import dotenv from "dotenv";
import cors from 'cors';

const app = express();

dotenv.config();

app.use(morgan('dev'))
app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('working fine !')
})

app.use('/api/cars', CarsRouter)
app.use('/api/questions', QuestionsRouter)
app.use('/api/auth', authRouter)
app.use('/api/quizz', quizzRouter)

app.listen(3001, () => {
    console.log("server running on port 3001")
})
