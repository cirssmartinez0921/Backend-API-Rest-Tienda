import  express  from "express";

const app = express();

/**routing: enrutamiento */
//http://localhost:3000/

app.get("/", ( req, res ) => {
    const messeage = "bienbenido a la API  de tienda"
    console.log( messeage );
    
   res.send( `<h1>${messeage}<h1>`);
});
//http://localhost:3000/home
app.get ("/home", (req, res) => {
    const namepage = "home";

    console.log(namepage);
    res.send (`<h1>${namepage}<h1>`);
    
})

app.listen(3000, () =>{
    console.log("servidor lanzado en el puerto 3000 ");
    
})
