enum Color {
  Red = 1,
  Green,
  Blue,
  Pink,
  White,
}

let color: Color = Color.Green;
console.log(color);

enum Direction {
  Up = "Su",
  Down = "Giù",
  Left = "Sinistra",
  Right = "Destra",
}

enum HeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

let enumeration: Direction = Direction.Down;
let heterogeneous: HeterogeneousEnum = HeterogeneousEnum.Yes;

console.log(enumeration);
console.log(heterogeneous);

enum prodotto{
  prezzo = 1,
  modello,
  id ,
  brand

}
 console.log(prodotto.modello)