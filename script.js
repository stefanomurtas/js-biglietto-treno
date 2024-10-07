//costante1
const KmPercorsi= prompt ("numero di km da percorrere");
console.log (KmPercorsi);
// costante 2
const Age= prompt ("età Viaggiatore");
console.log (Age);
// costo per km 
let prezzo= KmPercorsi* 0.21;
// condizione 1(se età non è maggiore di 17 allora applicare sconto 20%)
if ( Age <= 17){
   let UnderAge=prezzo*0.2;
   let UnderPrice=prezzo-UnderAge;
    console.log (UnderPrice);
    alert( UnderPrice.toFixed(1)); 
}else if // condizione 2(se età  è maggiore di 17 e inferiore a 65 prezzo invariato)
 (Age >=18 && Age ===64){
    console.log (prezzo);
    alert( prezzo.toFixed(1) );
// condizione 3(se età  è maggiore o uguale a 65 allora applicare sconto 40%)
}else  (Age >= 65) 
{
    let OverAge=prezzo*0.4;
    let OverPrice=prezzo-OverAge;
    console.log (OverPrice);
    alert( OverPrice.toFixed(1) );
}