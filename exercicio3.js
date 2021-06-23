// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

function openParagraph(idParagraph, idButton) {
    document.getElementById(idParagraph).classList.toggle('expandido');

    if (document.getElementById(idButton).value === "+") {
        document.getElementById(idButton).value = "-";
    } else {
        document.getElementById(idButton).value = "+";
    }
}