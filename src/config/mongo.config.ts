import { connect } from "mongoose";


//**configuracion para la conexion to mongoDB */
async function dbconnet () : Promise <void>  {
   const DB_URI = "mongodb://127.0.0.1:27017";   
   await connect (DB_URI);
}

export default dbconnet;