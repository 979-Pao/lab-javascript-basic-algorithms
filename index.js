// Iteration 1: Names and Input

let hacker1 = "Paola";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Andrea";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {   
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {  
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '));
console.log(hacker2.split('').reverse().join(''));

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// 3 párrafos de texto
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et sapien eget magna interdum luctus. Nulla facilisi.

Vestibulum et ligula at odio tincidunt pharetra. Fusce et orci et elit feugiat tincidunt nec a arcu. Curabitur et lorem id mauris posuere tristique.

Etiam et justo at purus dapibus cursus. Integer et nunc ut sapien posuere varius. Nam et libero vitae justo vehicula gravida.`;

// Contar el número de palabras
const wordCount = longText.split(/\s+/).filter(word => word.length > 0).length;

// Contar el número de veces que aparece "et"
const etCount = (longText.match(/\bet\b/g) || []).length;

console.log("Número de palabras:", wordCount);
console.log("Número de veces que aparece 'et':", etCount);


function isPalindrome(phrase) {
    // Eliminar caracteres no alfanuméricos y convertir a minúsculas
    let cleanedPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Verificar si la frase es igual a su reverso
    return cleanedPhrase === cleanedPhrase.split('').reverse().join('');
}

// Ejemplos de uso
let phrases = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon"
];

phrases.forEach(phrase => {
    console.log(`"${phrase}" es un palíndromo?:`, isPalindrome(phrase));
});
