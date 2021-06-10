const express = require('express')
const app = express()
let datos=["a","b","c","d","e"];
app.get('/', function (req, res) {
  res.send("Bienvenido a mi Api")
})
app.get('/pets', function (req, res) {
    res.json('{mensaje:"todos los datos",datos:['+ datos +'] }')
  })
app.get('/pets/:id', (req,res)=>{
    let dato=req.params.id;
    console.log(dato);
    res.json("{mensaje:'se regresa una sola mascota',valor:"+datos[dato]+"}")
})
app.put("/pets", (req,res)=>{
  res.json('{mensaje:"es para modificar mascotas"}')
})
app.get('/products', function (req, res) {
  res.json('{mensaje:"todos los productos",datos:['+ datos +'] }')
})
app.get('/products/:id', (req,res)=>{
  let dato=req.params.id;
  console.log(dato);
  res.json("{mensaje:'se regresa un solo producto',valor:"+datos[dato]+"}")
})
console.log("escuchando en el puerto 3000");
app.listen(3000)