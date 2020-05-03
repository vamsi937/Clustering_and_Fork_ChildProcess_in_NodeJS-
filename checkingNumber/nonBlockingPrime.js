const {calcFact}=require('../helperFunctions/calculateFact');
const {lastTwoDigits}=require('../helperFunctions/lastTwoDigitsInNumber');

process.on("message", message => {
    const jsonResponse = isPrime(message.number);
    process.send(jsonResponse);
    process.exit();
})


function isPrime(number) {
    let startTime = new Date();
    let endTime = new Date();
    let isPrime = true;
    const lastTwoDigOfNumber=lastTwoDigits(number);
    const factorial=calcFact(lastTwoDigOfNumber);
    for (let i = 3; i < number; i ++)
    {   
        //it is not a prime break the loop,
        // see how long it took
        if (number % i === 0) 
        {
            endTime = new Date();
            isPrime = false;
            break;
        }
    }

    if (isPrime) endTime = new Date();

    return {
        "number" : number,
        "isPrime": isPrime,
        "timeForCalculation(in_ms)": endTime-startTime,
        "factorialOfLastTwoDigits":factorial
    }
}