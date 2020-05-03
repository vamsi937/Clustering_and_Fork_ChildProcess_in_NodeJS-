const {fork} = require("child_process");  

const app = require ("express")();

const {blockingprime}=require('./checkingNumber/blockingPrime');

app.get("/blocking/:number", (req, res) => {
    const jsonResponse = blockingprime(parseInt(req.params.number))
    res.send(jsonResponse);
})

app.get("/nonBlocking/:number", (req, res) => {
    const childProcess = fork('./checkingNumber/nonBlockingPrime.js');
    childProcess.send({"number": parseInt(req.params.number)})
    childProcess.on("message", message =>{
        console.log(message);
        res.send(message);
    })    
})

app.listen(3000, ()=>console.log("Listening on 3000") )