let doubleNumber = require('./double.js');
let personita = require('./personita.js');


let result = doubleNumber(2);
console.log(result);

let obPersonita = new personita("Javier","Rodriguez");
console.log(obPersonita.getNombre());
obPersonita.setNombre("Pepe");
console.log(obPersonita.getNombre());

