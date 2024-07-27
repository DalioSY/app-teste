import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "./controllers/productController.js";
import multer from "multer";
import multerConfig from "./config/multer.js";

const upload = multer(multerConfig);

const routes = Router();
routes.get("/product/list", getProduct);
routes.post("/product/create", upload.single("file"), createProduct);
routes.delete("/product/:id", deleteProduct);
routes.put("/product/:id", upload.single("file"), updateProduct);

export default routes;
