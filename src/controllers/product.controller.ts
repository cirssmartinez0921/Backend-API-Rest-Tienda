import { Request, Response } from "express";


async function getProducts (req: Request, res: Response)  {
    console.log("obtiene todos los productos");
    
}
async function getProduct  (req: Request, res: Response)  {
    console.log("obtiene un producto por ID");
    
}
async function createproduct  (req: Request, res: Response)  {
    console.log("crea un producto");
    
}
async function updateproduct  (req: Request, res: Response)  {
    console.log(" actualiza un producto por ID");
    
}
async function deleteproduct  (req: Request, res: Response)  {
    console.log("Elimina un producto por ID");
    
}

export {
    getProducts,
    getProduct,
    createproduct,
    updateproduct,
    deleteproduct,
};