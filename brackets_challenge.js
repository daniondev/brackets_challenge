// Dado un string formado por (), [], {}, escribe un programa que indique si los pares correspondientes son correctos
// ENTRADA: [()]{}{[()()]()} -> CORRECTO
// ENTRADA: [(]) -> INCORRECTO

let test1 = '(())';
let test2 = '({()()}[()])';
let test3 = '{[}()]';
let test4 = '';
let test5 = '({()()}[({)])}';

var eliminaPares = function(cadena){
    const pares = ['()', '[]', '{}']

    if (cadena.length <= 0)        
        return 'CADENA VACIA'

    for (let index = 0; index < cadena.length; index++) {

        if(cadena[index + 1] == undefined)
            return 'CADENA INCORRECTA';

        const element = cadena[index] + cadena[index + 1];
        var existe = pares.find(x => x == element);

        if(existe != undefined){
            cadena = cadena.slice(0, index) + cadena.slice(index + 2);
            index = -1;
        }
    }

    return 'CADENA CORRECTA';
};

console.log(eliminaPares(test1));
console.log(eliminaPares(test2));
console.log(eliminaPares(test3));
console.log(eliminaPares(test4));
console.log(eliminaPares(test5));