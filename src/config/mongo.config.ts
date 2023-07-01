import { connect } from "mongoose";


//**configuracion para la conexion to mongoDB */
async function dbconnet () : Promise <void>  {
   const DB_URI = `${ process.env.DB_URI }`;   
   await connect (DB_URI);
}

export default dbconnet;