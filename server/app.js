const http = require('http');
const url = require('url');


const hostname = '127.0.0.1';
const port= 3000;

const serve = http.createServer((req, res)=>{
    let pathName = url.parse(req.url).pathname;
   
    if (pathName=== '/'){
        res.statusCode=200;
        res.setHeader('Content-Type','text-plain');
        res.end('Home\n'); 
    }

    if (pathName ==='/about'){
        res.statusCode=200;
        res.setHeader('Content-Type','json');
        res.end('{"about":"Es una prueba"}');
    }



})

serve.listen(port, hostname,()=>{
    console.log( `Servidor levanta sobre http://${hostname}:${port}/`);
})

