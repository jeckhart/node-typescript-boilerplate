'use strict';

// Include dependencies
import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as favicon from 'serve-favicon';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

// Modular Route definitions
import exampleRoute from './routes/example';

// Error handler service
import { registerErrorHandlers } from './services/errorHandler';

// Main app
const app = express();

app.use(favicon(path.join(__dirname, './public/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public'))); //serve public files

// Register routes (as middleware layer through express.Router())
app.use(exampleRoute);

registerErrorHandlers(app);

export default app;