//**archivo central de enrutamiento */

import { Router, Request, Response} from "express";
import routerUsers from "./users";
import routerProducts from "./products";

const router = Router();
/**middleware */
router.use ("/users", routerUsers);       //http:localhost:3000/api/users
router.use ("/products",routerProducts);  //http:localhost:3000/api/products
    

export default router;