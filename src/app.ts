
import  express, {Request, Response}  from "express";



const app = express();

/**routing: enrutamiento */
//http://localhost:3000/  (EndPoint)

app.get("/", ( req: Request, res: Response ) => {
    const messeage = "bienbenido a la API  de tienda"
    console.log( messeage );
    
   res.send( `<h1>${messeage}<h1>`);
});
//http://localhost:3000/home    (EndPoint)
app.get ("/home", (req, res) => {
    const namepage = "home";

    console.log(namepage);
    res.send (`<h1>${namepage}<h1>`);
    
})

app.listen(3000, () =>{
    console.log("servidor lanzado en el puerto 3000 ");
    
})
