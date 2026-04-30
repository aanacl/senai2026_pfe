
const corpo=document.querySelector('body');
const titulo=document.querySelector('.titulo');
const container=document.querySelector('#container');
const imagem=document.querySelector('#imagem');
const botao=document.querySelector('.botao')
const botao2=document.querySelector('.botao2')

corpo.style.backgroundColor='#821f41';
corpo.style.color='white';
titulo.textContent='Adicionando elementos via JS';
container.style.width='94%';
container.style.margin='0 auto';
container.style.backgroundColor='#9e6292';

let anuncio='<h2> Curso dev com IA- novidade!!! </h2>';
container.innerHTML+=anuncio;

//adicionando atributos
imagem.setAttribute('src', './img/lana.jpeg')
//imagem

//adicionando classes
imagem.classList.add('imagem');

//eventos
let contador=0;
botao.addEventListener('click', ()=>{
    alert('Cliquei no botão'+ contador++);
})
let contador1=0;
botao2.addEventListener('click', ()=>{
    alert('Cliquei no botão'+ contador1++);
})

