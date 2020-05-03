const cluster=require('cluster');
const numCPUs=require('os').cpus().length;
const app=require('express')();
const {fork} = require("child_process");  

const {blockingprime}=require('./checkingNumber/blockingPrime');

if(cluster.isMaster){
    console.log("This is the master process:",process.pid);
    for(let i=0;i<numCPUs;i++){
        cluster.fork();
    }
}else{

    app.get("/multiprocessor/blocking/:number", (req, res) => {
        const jsonResponse = blockingprime(parseInt(req.params.number))
        console.log(`Worker :${process.pid}`)
        res.send(jsonResponse);
    })
    
    // app.get('/multiprocessor/nonBlocking/:number',(req,res)=>{
    //     const childProcess = fork('./nonBlockingPrime.js');
    //     childProcess.send({"number": parseInt(req.params.number)})
    //     childProcess.on("message", message =>{
    //         console.log(`Worker :${process.pid}`)
    //         console.log(message);
    //         res.send(message);
    //     })   
    // })

    app.listen(8080,()=>console.log('Listening on 8080'));

}

