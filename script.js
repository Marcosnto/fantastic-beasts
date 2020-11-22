// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImage = document.querySelector('img');
console.log(firstImage.getBoundingClientRect().top);
//poderia ser também:
console.log(firstImage.offsetTop);

// Retorne a soma da largura de todas as imagens
/** Para resolver essa questão é necessário esperar
 * o navegador carregar a página por completo, pois o JS é executado
 * antes do carregamento, sendo assim, como as larguras das imagens
 * não estão pré-definidas, não é possível obter tal propriedade.
 */

function somaImagens(){
  const allImages = document.querySelectorAll('img');
  
  let widthSomatory = 0;
  allImages.forEach((img) => {
    widthSomatory += img.offsetWidth;
  })
  
  console.log(widthSomatory);
}

window.onload = function() {
  somaImagens();
}


// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const allLinks = document.querySelectorAll('a');
allLinks.forEach((link) => {
  let linkAttributesY = link.offsetHeight;
  let linkAttributesX = link.offsetWidth;
  let isSmall = linkAttributesY >= 48 && linkAttributesX >= 48 ? 'possui o padrão' : 'não possui o padrão'; 
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