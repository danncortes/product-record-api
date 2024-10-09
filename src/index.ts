import './database.js'
import app from './app.js'

import { APP_PORT, APP_HOST, APP_PROTOCOL } from './config.js';

app.listen(APP_PORT, () => {
    console.log(`Example app listening at ${APP_PROTOCOL}${APP_HOST}:${APP_PORT}`);
});

console.log('Hi TS Node!!!')

