//**archivo central de enrutamiento */

import { Router, Request, Response} from "express";
import {createproduct, deleteproduct, getProduct, getProducts, updateproduct} from "../controllers/product.controller"

const router = Router();
// http://localhost:3000/api/products
router.get( "/", getProducts );
router.get ( "/", getProduct );
router.post( "/", createproduct );
router.put ( "/", updateproduct );
router.delete ( "/", deleteproduct );

export default router; 