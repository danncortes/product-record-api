import express from 'express';
import { APP_PROTOCOL, APP_HOST, APP_PORT } from '../../config.js';
import { create, getProduct, } from './controller.js';
const router = express();
const BASE_API = `${APP_PROTOCOL}${APP_HOST}:${APP_PORT}`;
router.post(`${BASE_API}/product`, create);
router.get(`${BASE_API}/product`, getProduct);
export default router;
