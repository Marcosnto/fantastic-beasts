// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImage = document.querySelector('img');
console.log(firstImage.getBoundingClientRect().top);
// Retorne a soma da largura de todas as imagens
const allImages = document.querySelectorAll('img');

let widthSomatory = 0;
allImages.forEach((img) => {
  widthSomatory += img.getBoundingClientRect().y
})

console.log(widthSomatory);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const allLinks = document.querySelectorAll('a');
allLinks.forEach((link) => {
  let linkAttributes = link.getBoundingClientRect();
  let isSmall = linkAttributes.Y === 48 && linkAttributes.X === 48 ? 'possui o padrão' : 'não possui o padrão'; 
  console.log(`O link: ${link} ${isSmall}`)
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const getWindowSize = window.innerWidth; 
if (getWindowSize < 720){
  const getClassMenu = document.querySelector('.menu');
  getClassMenu.classList.add('menu-mobile');
  console.log('é menor')
}