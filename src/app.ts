import "dotenv/config";
import  express, {Request, Response}  from "express";
import routeMain from "./routes/index.route";
import db from "./config/mongo.config";


const app = express();
const PORT = process.env.PORT || 3001;

/**routing: enrutamiento */
//http://localhost:3000/  (EndPoint)

app.get("/", ( req: Request, res: Response ) => {
    const messeage: string = "bienbenido a la API  de tienda";
    console.log( messeage );
    
   res.send( `<h1>${messeage}<h1>`);
});
//http://localhost:3000/home    (EndPoint)
app.get ("/home", (req, res) => {
    const namepage : string = "home";

    console.log(namepage);
    res.send (`<h1>${namepage}<h1>`);
    
})
/**Middleware */
app.use(express.json());
//http:localhost:3000/api
app.use("/api", routeMain);

db()
  .then(()=> console.log("mongoDB se conecto correctamente"))
  .catch(()=> console.error("mongoDB sufre un problema de conexion"));

app.listen(PORT, () =>{
    console.log(`servidor en http://localhost:${PORT}`);
    
})
