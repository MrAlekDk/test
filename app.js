const express = require("express");
const app = express();

app.get("/",(req,res)=>{

    res.send("Add /time in the browser's URL")
})


app.get("/time",(req, res)=>{

    res.sendFile(__dirname+'/Public/index.html');
});


app.use(express.static(__dirname+'/Public'))
app.listen(process.env.PORT||8080,()=>{
    console.log("Now running on port: ", 8080);
});