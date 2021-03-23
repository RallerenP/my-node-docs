import express from 'express';
import cors from 'cors';
import { join } from 'path';
import Collection from './db/db';

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());
app.use(express.static(join(__dirname, '..', 'public')));

async function main() {


  app.listen(PORT, () => {
    console.clear();
    console.log(`Listening on ${PORT}...`);
  });
}

main();
