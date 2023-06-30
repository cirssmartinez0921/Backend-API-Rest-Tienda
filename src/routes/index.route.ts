//**archivo central de enrutamiento */

import { Router, Request, Response} from "express";
import routerUsers from "./users.route";
import routerProducts from "./products.route";

const router = Router();
/**middleware */
router.use ("/users", routerUsers);       //http:localhost:3000/api/users
router.use ("/products",routerProducts);  //http:localhost:3000/api/products
    

export default router;