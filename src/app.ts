
import  express, {Request, Response}  from "express";
import routeMain from "./routes";




const app = express();

/**routing: enrutamiento */
//http://localhost:3000/  (EndPoint)

app.get("/", ( req: Request, res: Response ) => {
    const messeage: string = "bienbenido a la API  de tienda"
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
app.use("/", routeMain);

app.listen(3000, () =>{
    console.log("servidor lanzado en el puerto 3000 ");
    
})
