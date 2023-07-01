import { Request, Response } from "express";
import ProductModel from "../models/products.model";


async function getProducts (req: Request, res: Response)  {
    console.log("obtiene todos los productos");
    res.send ("obtiene todos los productos")
    
}
async function getProduct  (req: Request, res: Response)  {
    console.log("obtiene un producto por ID");
    res.send ("obtiene un producto por ID")
}  
async function createproduct  (req: Request, res: Response)  {
   const data = req.body
   const response = await ProductModel.create( data );
   res.json (response);
   
    
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