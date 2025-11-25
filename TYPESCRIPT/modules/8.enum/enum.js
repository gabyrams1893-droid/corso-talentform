var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
    Color[Color["Pink"] = 4] = "Pink";
    Color[Color["White"] = 5] = "White";
})(Color || (Color = {}));
let color = Color.Green;
console.log(color);
var Direction;
(function (Direction) {
    Direction["Up"] = "Su";
    Direction["Down"] = "Gi\u00F9";
    Direction["Left"] = "Sinistra";
    Direction["Right"] = "Destra";
})(Direction || (Direction = {}));
var HeterogeneousEnum;
(function (HeterogeneousEnum) {
    HeterogeneousEnum[HeterogeneousEnum["No"] = 0] = "No";
    HeterogeneousEnum["Yes"] = "YES";
})(HeterogeneousEnum || (HeterogeneousEnum = {}));
let enumeration = Direction.Down;
let heterogeneous = HeterogeneousEnum.Yes;
console.log(enumeration);
console.log(heterogeneous);
var prodotto;
(function (prodotto) {
    prodotto[prodotto["prezzo"] = 1] = "prezzo";
    prodotto[prodotto["modello"] = 2] = "modello";
    prodotto[prodotto["id"] = 3] = "id";
    prodotto[prodotto["brand"] = 4] = "brand";
})(prodotto || (prodotto = {}));
console.log(prodotto.modello);
//# sourceMappingURL=enum.js.map