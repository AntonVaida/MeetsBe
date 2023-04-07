import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';

import { router as usersRouter } from './routes/users';

const API_SUBPATH = '/.netlify/functions/server';

const app = express();

app.use(cors());

// Deveolp
// app.use('/users', usersRouter);
// app.listen(6000, () => {
//   console.log('Server started at http://localhost:6000');
// });

// Product
app.use(`${API_SUBPATH}/users`, usersRouter);

export const handler = serverless(app);
