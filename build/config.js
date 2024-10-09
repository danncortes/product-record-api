import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
dotenv.config();
let envPath;
switch (process.env.NODE_ENV) {
    case 'test':
        envPath = `${__dirname}/../.env.test`;
        break;
    case 'production':
        envPath = `${__dirname}/../.env.production`;
        break;
    default:
        envPath = `${__dirname}/../.env.development`;
}
dotenv.config({ path: envPath });
export const { APP_PORT, APP_HOST, APP_PROTOCOL, DATABASE_PORT, DATABASE_HOST, DATABASE_NAME, CIPHER_PASS, CIPHER_ALGORITHM } = process.env;
