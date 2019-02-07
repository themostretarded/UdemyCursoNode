const http = require('http');

http.createServer( (req,res)=>{
    res.writeHead(200,{'Content-type':'application/json'});

    let salida = {
        nombre:'Fernando',
        edad:32,
        url:req.url
    }

    res.write(JSON.stringify(salida))

    res.write('hola mundo');
    res.end();

} )
.listen(8008);

console.log('escuchando en 8008');