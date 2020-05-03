exports.lastTwoDigits=(number)=>{
    var numString=JSON.stringify(number);
    return parseInt(numString.slice(numString.length-2,numString.length));
}
