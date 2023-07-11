/** Archivo central de enrutamiento */
import { Router } from "express";
import { login, register } from "../controllers/autg.controlllers";


const router = Router();
// http://localhost:3000/api/auth/register
router.post( '/register', register );

// http://localhost:3000/api/auth/login
router.post( '/login', login );


export default router;