
const KmPercorsi= prompt ("numero di km da percorrere");
console.log (KmPercorsi);

const Age= prompt ("età Viaggiatore");
console.log (Age);

let prezzo= KmPercorsi* 0.21;

if ( Age <= 17){
   let UnderAge=prezzo*0.2;
    console.log (UnderAge);
}else if
 (Age >=18 || Age ===65){
    console.log (prezzo);

}else(Age>=65)
{
    let OverAge=prezzo*0.4;
    console.log (OverAge);
}