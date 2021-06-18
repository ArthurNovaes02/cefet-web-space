// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

function openParagraph(idParagraph, idButton) {
    document.getElementById(idParagraph).classList.toggle('expandido');

    if (document.getElementById(idButton).value === "+") {
        document.getElementById(idButton).value = "-";
    } else {
        document.getElementById(idButton).value = "+";
    }
}