const worker = require('worker_threads');
const { Worker , isMainThread, workerData, parentPort} = worker;

if (isMainThread){
    console.log("es el hilo prinicpal");
    for (let i=0; i<1000; i++){
        const worker = new Worker(__filename, {workerData: { num: 5}});
        worker.once('message',(result)=>{
            console.log('Worker '+worker.threadId+ ' square of 5 is :', result)
        } )
    }
}else{
    console.log('worker ' +worker.threadId+ ' Este eno es el prinicpal');
    parentPort.postMessage(workerData.num * workerData.num);
}
