const fs = require('fs');

fs.writeFile('data.json','Hola mundo',(err)=>{
    if (err) throw err;
    console.log("Se ha creado el archivo");
});

fs.readFile('./dataclear.json',(err, data)=>{
    if(err) throw err;
    console.log("archivo ->"+data);
})