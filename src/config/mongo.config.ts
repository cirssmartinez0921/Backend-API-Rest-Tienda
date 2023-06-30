import { connect } from "mongoose";

//**TODO: resolver conexion de mongodb con mongoose */
//**configuracion para la conexion to mongoDB */
async function dbconnet () : Promise <void>  {
   const DB_URI = <string> "mongodb://localhost:27017";   
   await connect (DB_URI);
}

export default dbconnet;