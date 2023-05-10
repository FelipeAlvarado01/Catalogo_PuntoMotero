import { Router} from "express";
import { ping, createProducto, obtenerProductos,obtenerProductosId } from "../controller/productos.controller.js";
import bodyParser from 'body-parser';

const router = Router();

router.use(bodyParser.urlencoded({extended: true}));
router.post('/createProducto',createProducto);
router.get('/obtenerProductos',obtenerProductos);
router.get('/obtenerProductosId/:id',obtenerProductosId);
router.get('/ping', ping);

export default router