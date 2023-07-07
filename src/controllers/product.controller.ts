import { Request, Response } from "express";
import { insertProduct } from "../services/product.services";


async function getProducts (req: Request, res: Response)  {
    console.log("obtiene todos los productos");
    res.send ("obtiene todos los productos")
    
}
async function getProduct  (req: Request, res: Response)  {
    console.log("obtiene un producto por ID");
    res.send ("obtiene un producto por ID")
}  
async function createproduct  (req: Request, res: Response)  {
    try {
        const data = await insertProduct (req.body);

        console.log(data);
        res.json (data);
    } catch (error) {
        console.log( 'Error en la insercion del producto' );
        res.json ({
            msg: "ERROR_INSERT_PRODUCT"
        })
    }

    console.log(req.body);
    
   
   
    
}
async function updateproduct  (req: Request, res: Response)  {
    console.log(" actualiza un producto por ID");
    res.send (" actualiza un producto por ID")
}
async function deleteproduct  (req: Request, res: Response)  {
    console.log("Elimina un producto por ID");
    res.send ("Elimina un producto por ID")
}

export {
    getProducts,
    getProduct,
    createproduct,
    updateproduct,
    deleteproduct,
};