exports.calcFact=( num )=>{
    var i;
    var fact = 1;
    for( i = 1; i <= num; i++ )
    {
    fact = fact * i;
    }
    return fact;
}