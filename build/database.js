import { connect } from 'mongoose';
import chalk from 'chalk';
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PORT } from './config.js';
export const connectionUrl = `mongodb://${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;
(async () => {
    try {
        const connection = await connect(connectionUrl);
        console.log(chalk.black.bold.bgGreen.bold('Connected to Data Base Successfully!'));
    }
    catch (err) {
        console.log(chalk.red.bold('Error connecting to Data Base'));
    }
})(); //
