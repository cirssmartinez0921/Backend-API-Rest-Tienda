// interface: Modela y define la estructura de datos y sus tipos (solo eso)
export  interface Product {
   categoria :string;
   subcategoria: string;
   nombre: string;
   cantidad : number;
   precio : number;
   marca : string;
   imagen :string;
   inventario : number;
   userId: Number;
   fechaDeVencimiento : Number;
}