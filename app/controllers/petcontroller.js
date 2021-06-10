let pet=require("../models/pets");
let catalogo=require("../../db/catalogo");
module.exports={
    listar:(req,res)=>{
        res.json("{mensaje:'todas las mascotas',pets:"+catalogo.listar()+"}")
    },
    buscar:(req,res)=>{
        let mascota=catalogo.buscar(req.params.id);
        if(mascota==null){
            res.json("{mensaje:'no se encontro la mascota',nombre:'"+req.params.id+"'}")
        }
        else
            res.json(`{mensaje:'buscar una mascota',nombre:'${mascota.nombre}',raza:'${mascota.raza}'}`)
            //res.json("{mensaje:'buscar una mascota',nombre:'"+mascota.nombre+"',raza:'"+mascota.raza+"'}")
    },
    borrar:(req,res)=>{
        res.json("{mensaje:'se elimino una mascota',id:"+req.params.id+"}")
    },
    agregar:(req,res)=>{
        console.log(req.body)
        let nombre=req.body.nombre;
        let raza=req.body.raza;
        let mascota= new pet(nombre,raza);
        catalogo.agregar(mascota);
        res.json("{mensaje:'se agrego una nueva mascota',name:'"+req.body.nombre+"'}")
    },
    modificar:(req,res)=>{
        console.log(req.body)
        res.json("{mensaje:'se modifico',id:"+req.params.id+"}")
    }
}