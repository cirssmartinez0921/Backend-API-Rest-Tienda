import { Response, Request, NextFunction } from "express"
import { verify } from "jsonwebtoken";
import { RequestExtends } from "../interfaces/requestExtends.interface";


const autheticationUser = ( req: RequestExtends, res: Response, next: NextFunction ) => {

    try {
         //1. procesando la cadena  de autorizacion para extraer el token
    const bearerToken = req.headers.authorization || " "; //bearerToken = bearer 9999999999999999999
    const arrBearerToken = bearerToken.split( " " );    // arrBearerToken ["bearer". "9999999999999999999"]
    const token = arrBearerToken.pop();                 // token = 99999999999999, arrBearerToken ["Bearer"]

  //2. verificar la autenticacion del token
  const paylaod =verify (`${token}`, `${process.env.JWT_SECRET_KEY}`);

  //3. verifiar  si NO hay carga util

  if (!paylaod) {
      return res.json ({
          msg:"INVALID_TOKEN"
      });
  }
 
   //4. extraer la carga util

  //  {
  //     userId: userFound._id,
  //     rol: userFound.rol,
  //     name: userFound.nombre
  //  }

   const { userId, rol, name } = paylaod as {userId: string; rol: string; name: string};
                 
   console.log(userId, rol, name);
  // agregamos los valores del token al objeto request de express usando una nueva inteface (heremcia)
   req.authUser = { userUid: userId, rol, name };

   //TODO: PAPASR LOS VALORES AL RESPONSE Y EXTRAERLOS AL CONTROLADOR
   next ();
        
    } 
    catch ( error ) {
        res.json({ 
            msg : "INVALID_AUTHENTICATION",  });
    }

   
}

export {
    autheticationUser
}