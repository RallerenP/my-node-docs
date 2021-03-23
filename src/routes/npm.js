import express from 'express';
import { join } from 'path';
import expose from '../expose.cjs';

const router = express.Router();
const {__dirname} = expose;

const path = join(__dirname, 'client', 'npm');

router.use('/npm', (req, res) => {
  res.sendFile(join(path, 'npm.html'))
})

router.use('/express', (req, res) => {
  res.sendFile(join(path, 'express.html'))
})

export default router;
