const router= require("express").Router();
router.get("/getblogs",(req,res)=>{
    res.json({
        success:true,
        data:[{title:"myblog"},{title:"second blog"}]
    })
})
router.get("/getoneBlog",(req,res)=>{
    res.json({
        success:true,
        data:{title:"single blog"}
    })
})
module.exports=router;