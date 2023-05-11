import express from 'express';
import productosRoutes from './routes/productos.routes.js'
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());
app.use(productosRoutes);

export default app;