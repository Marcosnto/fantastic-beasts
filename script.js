// Retorne no console todas as imagens do site
console.log(document.querySelectorAll('img'));
// Retorne no console apenas as imagens que começaram com a palav
console.log(document.querySelectorAll('[src^="img/imagem"'))
// Selecione todos os links internos (onde o href começa com #)
console.log(document.querySelectorAll('[href^="#"]'))
// Selecione o primeiro h2 dentro de .animais-descricao
console.log(document.querySelector('.animais-descricao h2'));
// Selecione o último p do site
const allP = document.querySelectorAll('p');
console.log(allP[--allP.length]);