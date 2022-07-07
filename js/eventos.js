/*
 * Função JS para preveção de eventos
 * Data: 07 de julho de 2022
 * @Author: Fernando Santos Pereira 
*/

const formulario = document.getElementsByTagName('form')[0];

function submicao() {
    event.preventDefault();
}


formulario.addEventListener('submit',sbmicao);