window.onload = main;

function main() {
   nuevoArticulo = {
    "id": 6,
    "descripcion": "gaseosa",
    "cantidad": 60
   }

   fetch("http://localhost:3000/articulos",{
       method: "POST",
       body: JSON.stringify(nuevoArticulo),
       headers: {
           //api key si es necesario
           "Content-type": "application/json"
       }
   })

   fetch("http://localhost:3000/articulos/200",{
       method: "DELETE"
   })
   .then(res => res.json())
   .then(res => console.log(res))
}