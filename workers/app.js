const worker = require('worker_threads');
const { Worker , isMainThread, workerData} = worker;

if (isMainThread){
    console.log("Este es el hilo prinicpal");
    for ( let i = 0; i<10; i++){
        let w = new Worker(__filename, { workerData: i});
    }
}else{
    console.log("Este no es el hilo principal");
}

