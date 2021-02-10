// Mostre no console cada parágrado do site
const todosParagrafos = document.querySelectorAll('p');
const arrayParagrafos = Array.from(todosParagrafos);

arrayParagrafos.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
arrayParagrafos.forEach((item) => console.log(item.innerHTML));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => {
console.log(item, index);
});

let i = 0;

imgs.forEach(() => {
console.log(i++);
});

imgs.forEach(() => i++);