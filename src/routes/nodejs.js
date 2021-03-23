import express from 'express';
import { join } from 'path';
import expose from '../expose.cjs';

const router = express.Router();
const {__dirname} = expose;

const path = join(__dirname, 'client', 'nodejs');

router.get('/what-is-nodejs', (req, res) => {
  res.sendFile(join(path, 'what-is-nodejs.html'));
});

router.get('/package-json', (req, res) => {
  res.sendFile(join(path, 'package-json.html'));
});

router.get('/autoreload', (req, res) => {
  res.sendFile(join(path, 'autoreload.html'))
})

router.get('/env-var', (req, res) => {
  res.sendFile(join(path, 'env-var.html'))
})

router.get('/rest-api', (req, res) => {
  res.sendFile(join(path, 'rest-api.html'))
})

export default router;
