const router=require("express").Router()

let pet=require("./pet")
router.use("/pet",pet)
//let product=require("./product")
//router.use("/product",product)

module.exports=router;