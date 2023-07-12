/** Archivo central de enrutamiento */
import { Router, Request, Response } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct, partialUpdateProduct } from "../controllers/product.controller";
import { autheticationUser } from "../middleware/authentication.middleware";

const router = Router();
// http://localhost:3000/api/products/
router.get( '/', getProducts );                 // Obtiene lista de TODOS los productos
router.get( '/:id', getProduct );               // Obtiene producto por ID
router.post( '/', autheticationUser, createProduct );              // Crea producto
router.put( '/:id', autheticationUser, updateProduct );            // Actualiza TODOS los campos del producto
router.patch( '/:id', autheticationUser, partialUpdateProduct );   // Actualiza algunos campos del producto
router.delete( '/:id', autheticationUser, deleteProduct );   
router. get( '/user/:id', (req: Request, res: Response) => {
    res.json({
        msg: "TODO: obtener todos los productos por usuario",
    });
});  


export default router;