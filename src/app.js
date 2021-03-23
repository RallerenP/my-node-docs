import express from 'express';
import cors from 'cors';
import { join } from 'path';
import expose from './expose.cjs';
import generalJavaScriptRouter from './routes/general-javascript.js'
import nodejsRouter from './routes/nodejs.js';
import npmRouter from './routes/npm.js'
const { __dirname } = expose;

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());
app.use(express.static(join(__dirname, '..', 'public')));

app.use('/general-javascript', generalJavaScriptRouter);

app.use('/nodejs', nodejsRouter)

app.use('/npm', npmRouter)

app.use('/', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'index.html'));
})


app.listen(PORT, () => {
  console.clear();
  console.log(`Listening on ${PORT}...`);
});
