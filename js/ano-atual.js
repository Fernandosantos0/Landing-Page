/*
 * Função JS para inserir o ano atual
 * Data: 07 de julho de 2022
 * @Author: Fernando Santos Pereira 
*/

const elementoTime = window.document.querySelectorAll('time#ano');

const data = new Date();
const anoAtual = data.getFullYear();

elementoTime[0].textContent = data.getFullYear();