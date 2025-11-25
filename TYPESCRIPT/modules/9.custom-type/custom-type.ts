type Combinable = number | string;
type ConversionDescriptor = boolean | string;

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
// if (resultConversion === 'as-number') {
//   return +result;
// } else {
//   return result.toString();
// }

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("custom", "type", "as-text");
console.log(combinedNames);

// assertion type
let code: any = 123;

let employeeCode = <number>code;
console.log(typeof employeeCode);

function custom(description: Combinable, technology: ConversionDescriptor):string {
  
  return description +' '+technology

}


console.log(custom('development','typescript'));

console.log("-----------------------")


type Prodotto = { nome: string; prezzo: number };
type Ordine = { prodotto: Prodotto; quantita: number };

const ordine: Ordine = {
  prodotto: { nome: "Libro", prezzo: 15 },
  quantita: 2
};
console.log(ordine);

type SommaFn = (a: number, b: number) => number;

const somma: SommaFn = (x, y) => x + y;
console.log(somma(5, 3));