import express from 'express';
import { APP_PROTOCOL, APP_HOST, APP_PORT } from '../../config.js';
import {
    create
} from './controller.js';

const router = express();

router.post(`/product`, create);

export default router;