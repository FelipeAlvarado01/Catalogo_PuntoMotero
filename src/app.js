import express from 'express';
import productosRoutes from './routes/productos.routes.js'
import bodyParser from 'body-parser';

import {PORT} from './config.js'

const app = express();
app.use(bodyParser.json());
app.use(productosRoutes);

export default app;