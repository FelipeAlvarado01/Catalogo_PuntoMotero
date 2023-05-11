import { Router } from "express";
import {
  ping,
  createProducto,
  getProductos,
  getProductoPorId,
  deleteProducto,
  updateProducto
} from "../controller/productos.controller.js";
import bodyParser from 'body-parser';

const router = Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.post("/createProducto", createProducto);
router.get("/getProductos", getProductos);
router.get("/getProductoPorId/:id", getProductoPorId);
router.delete("/deleteProducto/:id", deleteProducto);
router.put("/updateProducto/:id", updateProducto);
router.get('/ping', ping);

export default router