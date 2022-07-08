/*
 * Função JS para preveção de eventos
 * Data: 07 de julho de 2022
 * @Author: Fernando Santos Pereira 
*/

const form = window.document.getElementsByTagName('form');

/*
function submicao(event) {
    event.preventDefault();
    console.info('Evento submit do formulário prevenido!');
} 

form[0].addEventListener('submit',submicao); */

form[0].addEventListener('submit',function(event) {
    event.preventDefault();
    console.info('Evento submit do formulário prevenido!');
});