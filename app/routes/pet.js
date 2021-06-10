const router=require("express").Router()
let petcontroller=require("../controllers/petcontroller");
router.get("/",(req,res)=>{
    petcontroller.listar(req,res)
})
router.get("/:id",(req,res)=>{
    petcontroller.buscar(req,res);
})
router.delete("/:id",(req,res)=>{
    petcontroller.borrar(req,res);
})
router.post("/",(req,res)=>{
    petcontroller.agregar(req,res);
})
router.put("/:id",(req,res)=>{
    petcontroller.modificar(req,res);
})
module.exports=router; 