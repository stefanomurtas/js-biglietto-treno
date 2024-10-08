//costante1
const kmPercorsi= Number(prompt ("numero di km da percorrere"));
console.log (kmPercorsi);

// costante 2
const eta=Number( prompt ("età Viaggiatore"));
console.log (eta);
// costo per km 
let prezzo= kmPercorsi* 0.21;
// condizione 1(se età non è maggiore di 17 allora applicare sconto 20%)
if ( eta <= 17){
   let underAge=prezzo*0.2;
   let underPrice=prezzo-underAge;
    console.log (underPrice);
    alert( "Il prezzo del biglietto è " + underPrice.toFixed(2)); 
// condizione 3(se età  è maggiore o uguale a 65 allora applicare sconto 40%)
}else if (eta > 65) 
{
    let overAge=prezzo*0.4;
    let overPrice=prezzo-overAge;
    console.log (overPrice);
    alert( "Il prezzo del biglietto è " + overPrice.toFixed(2));
}
else{
    console.log (prezzo);
    alert( "Il prezzo del biglietto è " + prezzo.toFixed(2));

}
// else if // condizione 2(se età  è maggiore di 17 e inferiore a 65 prezzo invariato)
//  (eta >=18|| eta == 64){
    // console.log (prezzo);
    // alert( prezzo.toFixed(2) );