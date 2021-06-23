// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

btnCalc = document.querySelector('#calcular');

btnCalc.addEventListener('click', () => {
    console.log('opa');
    var G = document.querySelector('#constante');
    var M1 = document.querySelector('#massa1');
    var M2 = document.querySelector('#massa2');
    var d = document.querySelector('#distancia');
    var FGrav = document.querySelector('#resultado');

    FGrav.value = ((G.value * M1.value * M2.value) / (d.value**2));
})
