const http= require("http");
const redis = require("redis");
console.log(redis);

const server= http.createServer((req,res)=>{

    if(req.url==="/")
    {
        res.end("hello from the Home site");
    }
        
    else if(req.url==="/about")
    {
        res.end("hello from the About site");
    }
        
    else if(req.url==="/contact")
    {
        res.end("hello from the Contact site");
    }
        
    else
    {
        res.end("404 Error!! Page not found");
    }
        
});

server.listen(8000,'127.0.0.1', ()=>{
    console.log("Listening to the port 8000")
});