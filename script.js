const relogio = document.querySelector('.caixa-relogio')
const rel = document.createElement('div')
rel.className = 'relogio'
relogio.appendChild(rel)

//Função do relógio
window.onload =  setInterval(function relo(){
    let data = new Date

    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    
    hora = zero(hora)
    minutos = zero(minutos)
    segundos = zero(segundos)


    rel.textContent = `${hora} : ${minutos} : ${segundos} `
},10)
//Função que marca os zeros do relógio
function zero(x){
    if (x < 10){
        x = `0 ${x}`
    }
    return x
}

//alteração da leader para transição

const botao = document.querySelector('.clica')
const header = document.querySelector('header')
//Remove o relogio e o botão
function remove(a,b){
    a.parentNode.removeChild(a);
    b.parentNode.removeChild(b);
    adiciona()
}
//adiciona a div com o conteúdo 
function adiciona(){
    const conteudo = document.querySelector('#conteudo')
    conteudo.style.display = 'block'
    
}

botao.addEventListener('click',()=>{
    botao.classList.toggle('animacao') //adiciona se não tiver e remove se tiver
    relogio.classList.toggle('animacao')
    let gera = setInterval(()=>{
        remove(botao,relogio);  
        clearInterval(gera);   
        
    },2000)
})


