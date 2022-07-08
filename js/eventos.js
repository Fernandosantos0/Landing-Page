/*
 * Função JS para preveção de eventos
 * Data: 07 de julho de 2022
 * @Author: Fernando Santos Pereira 
*/

const btnForm = document.getElementById('btnEnviar');

function submicao(event) {
    event.preventDefault();
}


btnForm.addEventListener('submit',sbmicao);