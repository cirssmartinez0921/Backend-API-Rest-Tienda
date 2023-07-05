// la estructura que definamos aqui, se vera reflejada en  nuestra base de datos

import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { getProducts } from "../controllers/product.controller";

// define estructura de datos en la base de datos requerida por mongoose
const productsSchema = new Schema (
    // objeto principal definira atributos del modelo
    {
        categoria: {
            type: String,
            required: true
        },
        subcategoria :{
            type: String,
            required : false
        },
         nombre: {
            type: String,
            required : true
        },
         cantidad : {
            type: Number,
            required : false
        },
         precio: {
            type: Number,
            required : false
        },
        marca :{
            type : String,
            required : true
        },
        imagen : {
            type: String,
            required : false
        },
        inventario : {
            type: Number,
        required: true    
        },
        fechaDeVencimiento: {
            type : Date,
            default: undefined

        }


    },
    // definira configuracion  que se pueden aplicar en mogoose para ese objeto
    {
        timestamps: true
    }
  
  );
//   define el modelo a partir de la estructira requerida por mongoose
  const ProductModel = model ("Products", productsSchema);

  export default ProductModel;