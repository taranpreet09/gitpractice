const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.json({message:"ok"})
})
app.use("/api/users",require("./routes/user.router"))
app.use("/api/blogs",require("./routes/blog.router"))
mongoose.connect("mongod://127.0.0.1:271017/test")
.then(()=>console.log("db connected"))
app.listen(5565,()=>{
    console.log("server started")
}
)