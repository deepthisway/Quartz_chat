import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import secureRoute from '../middlewares/secureRoute.js';

const router = express.Router();

router.post('/message/send/:id',secureRoute, sendMessage);

export default router;
