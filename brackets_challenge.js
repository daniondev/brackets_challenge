// Dado un string formado por (), [], {}, escribe un programa que indique si los pares correspondientes son correctos
// ENTRADA: [()]{}{[()()]()} -> CORRECTO
// ENTRADA: [(]) -> INCORRECTO

let test1 = '(())';
let test2 = '({()()}[()])';
let test3 = '{[}()]';
let test4 = '';
let test5 = '({()()}[({)])}';

var deletePairs = function(text){
    const pairs = ['()', '[]', '{}']

    if (text.length <= 0)        
        return 'EMPTY STRING'

    for (let index = 0; index < text.length; index++) {

        if(text[index + 1] == undefined)
            return 'WRONG STRING';

        const element = text[index] + text[index + 1];
        var existe = pairs.find(x => x == element);

        if(existe != undefined){
            text = text.slice(0, index) + text.slice(index + 2);
            index = -1;
        }
    }

    return 'CORRECT STRING';
};

console.log(deletePairs(test1));
console.log(deletePairs(test2));
console.log(deletePairs(test3));
console.log(deletePairs(test4));
console.log(deletePairs(test5));