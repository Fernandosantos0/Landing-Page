/* Função para captura o ano atual */
const time = document.querySelector('time#ano');

function anoAtual() {
    const anoAtual = new Date().getFullYear();
    return anoAtual;
}

//Mostrando o ano no rodapé da página
time.innerHTML = parseInt(anoAtual());