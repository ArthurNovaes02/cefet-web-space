// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

let urlImg = 'http://fegemo.github.io/cefet-web/images/philae-parts.jpg';
document.getElementById('slide').src = urlImg;
let index = 0;

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

function nextImg(idImg) {
  index++;
  if (index >= todasAsImagens.length) {
    index = 0;
  }
  urlImg = servidorDasImagens + todasAsImagens[index];
  document.getElementById(idImg).src = urlImg;
}

function prevImg(idImg) {
  index--;
  if (index < 0) {
    index = todasAsImagens.length - 1;
  }
  urlImg = servidorDasImagens + todasAsImagens[index];
  document.getElementById(idImg).src = urlImg;
}
