const {Worker} = require('worker_threads');
const request = require('request');


console.log("Este es el hilo principal");

request.get('http://www.google.com',(err, response)=>{
    if (err) console.error(err);
    console.log('Total de bytes recibidos', response.body.length);
})

function empezarWorker(path ,callback){
    let w  = new Worker(path, {workerData: null});

    w.on('message', msg=>{
        callback(null, msg);
    });

    w.on('error', callback);

    w.on('exit',code =>{
        if (code !=0 ) console.error(new Error(`El Worker se ha parado, código de error: ${code}`));
    })

    return w;

}

let miWorker = empezarWorker(
    `./codigoWorker.js`,(error, resultado)=>{
        if (error) return console.error(error);
        console.log("Proceso con gran carga computacional");
        console.log("El  rpimver valor es: "+ resultado.val);
        console.log("Ha tarado "+ resultado.timeDiff /1000 + ' segundos' );
        console.log("Mi mensaje" + resultado.pepito);

    }
);



