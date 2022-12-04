const fromDollarToYen = (a) =>{
   let euro = a / 1.2
   let yen = euro * 127.9
    return yen

}
const fromEuroToDollar = (a) =>{
    let dollar = a *1.2
    return dollar
}
const fromYenToPound = (a)=>{
   euro = a / 127.9
   pound = euro *0.8
   return pound
}
console.log(fromYenToPound(1))
module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}