import express from 'express';
import { sendMessage, getMessage } from '../controllers/message.controller.js';
import secureRoute from '../middlewares/secureRoute.js';

const router = express.Router();

router.post('/message/send/:id',secureRoute, sendMessage);
router.get('/message/get/:id',secureRoute, getMessage);

export default router;
