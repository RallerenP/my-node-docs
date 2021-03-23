import express from 'express';
import { join } from 'path';
import expose from '../expose.cjs';

const router = express.Router();
const {__dirname} = expose;

const path = join(__dirname, 'client', 'general-javascript');

router.use('/data-types', (req, res) => {
  res.sendFile(join(path, 'data-types.html'));
});

export default router;
