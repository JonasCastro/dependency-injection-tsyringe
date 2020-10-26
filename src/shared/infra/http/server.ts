import 'reflect-metadata';

import express from 'express';

import cors from 'cors';
import routes from './routes';

import '@shared/container';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('\u{1F6F0} Server started on port 3333');
});
