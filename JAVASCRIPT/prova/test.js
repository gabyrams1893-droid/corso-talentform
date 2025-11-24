//VARIABILI

let a=10
console.log(a)

//COSTANTI

const anno=2025
console.log(anno)

let prodotti = ["crema","carne","latte","cereali"] //array
prodotti.pop() 
console.log(prodotti)
prodotti.push("cereali")
prodotti.sort()
prodotti.unshift("pesce")

prodotti.forEach(function (item, index) {
  // ciclare array
  console.log(item + " " + index);
});

let  corso={                                      //oggetto
  nome:"Programmatore Java",
  durataOre: 148,
  enteFormazione: "Talentform",
  numeroStudenti: 5,

}
corso.modalita ="aula virtuale"
console.log(corso)

let spesa={
  ambito:"chimico",
  prodotti:15,
  budget:250,
  trasportoTipo:"furgone"
}
spesa.tempoTrasportoMin=80
console.log(spesa)

//calcolare lo stipendio mensile (programmazione funzionale)
function dipendente (retribuzioneOraria,oreLavorate){
return retribuzioneOraria * oreLavorate
}
console.log("Stipendio:",dipendente(10.50,160));



function somma (num1,num2){
  return num1+num2
}
console.log("La somma è: ", somma(5,10));

function maiuscolo (frase){
  return frase.toUpperCase()

}
console.log(maiuscolo("gabriela"));

function lunghezza(valore){
 
  return valore.length
}

console.log(lunghezza([1,2,3,4]));

try {
  let a=5/0
} catch (error) {
  
}finally{
  console.log("eccezione gestita")
}


try {
  let b=[1,5,6,4]
  console.log(b[5])
} catch (error) {
  
}finally{
  console.log("eccezione gestita")
}
/*
alert("Benvenuto");
let nomeAlum = prompt ("Inserisci il tuo nome: ");
if (nomeAlum== null){
  alert("Hai abbandonato la sessione")
} else {
  confirm("Sei sicuro?")
}
alert("Caio " + nomeAlum);
*/

 let arrow = (eta, nome ) => 
         ` ${nome}      ${eta}`
 console.log(arrow("Gabriela", 32));

 let piu = (a,b) =>
  `${a + b}`
 console.log(piu(5,20))

 let numeri =(arr) =>
 arr.length
 console.log(numeri([20,30,40,50]))

let doppio= (x ) =>
  x*2
console.log(doppio(10))

let numeri2 = [1, 2, 3, 4];
let newNumeri = numeri2.map(n => n * 2);
console.log(newNumeri); 

let arrayNomi=["Maurizio", "Elena", "Sergio"];
let arrayLun = arrayNomi.map(arrayNomi =>arrayNomi.length);
console.log(arrayLun)

let arrayNumbers = [36,250,24,18,15,13,36,18,]
let newArrayNumbers= arrayNumbers.filter(n => n % 2==0)
console.log (newArrayNumbers)

let arrayParole = ["scrivania","sedia","computer","mouse"]
let newParole = arrayParole.filter (arrayParole => arrayParole.length>5)
console.log(newParole)

let arrayNum = [20,7,8,10]
let nuovoNum = arrayNum.find (n => n==7)
console.log(nuovoNum)

let parole2 = ["sedia","java","tavolo"]
let nuovaParola = parole2.find (p => p.startsWith ("j"))
console.log(nuovaParola)

let nuovoArray2 = [...arrayNomi,...arrayParole]
console.log (nuovoArray2)

let numeOrdi= new Set (arrayNumbers)
console.log(numeOrdi)

async function fetchAPI() {
        const url =
          "https://mocki.io/v1/cb5e9c02-f171-44e2-8993-6b5f0af43ece";
        const response = await fetch(url);
        const resp = await response.json();
        return resp;
      }
      fetchAPI().then(console.log);