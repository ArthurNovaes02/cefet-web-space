// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

btnsExpansion = document.querySelectorAll('.botao-expandir-retrair');

btnsExpansion.forEach(btnExpansion => {
    btnExpansion.addEventListener('click', (event) => {
        document.getElementById(event.path[1].id).classList.toggle('expandido');
        if (event.currentTarget.innerHTML === '+') {
            event.currentTarget.innerHTML = '-';
        } else {
            event.currentTarget.innerHTML = '+';
        }
    })
});