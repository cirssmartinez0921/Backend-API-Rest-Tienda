import { product } from "../interfaces/product.interface";
import ProductModel from "../models/products.model";

const insertProduct = async (producto: product) =>{
    const response = await ProductModel.create (producto);
    
    return response;
}
const getAllProducts = async () => {
    return await ProductModel.find({});
}

    export {
        insertProduct,
        getAllProducts,
    }