// Adicione a classe ativo a todos os itens do menu
const getElements = document.querySelectorAll('.menu a');
getElements.forEach(element => {
  element.classList.add('ativo');
});

console.log(getElements);

// Remove a classe ativo de todos os itens do menu e mantenha ape
getElements.forEach((element, index) => {
  if(index !== 0){
    element.classList.remove('ativo');
  }
});

console.log(getElements);
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img,index) => {
  console.log(img.hasAttribute('alt'))
})
// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com');