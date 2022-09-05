/*
 * Função JS para abrir e fechar o menu mobile 
 * Data: 07 de julho de 2022
 * @Author: Fernando Santos Pereira 
*/

const menuMobile = window.document.getElementById('btnMenu');

const abrirMenuMobile = () => {
    const mobile = window.document.getElementById('menu-mobile');
    
    if(mobile.style.display === 'block') {
        mobile.style.display = 'none';
        menuMobile.src="./img/open-menu.svg";
    } else {
        mobile.style.display = 'block';
        menuMobile.src="./img/close-menu.svg";
    }

    mobile.addEventListener('click',() => {
        mobile.style.display = 'none';
        menuMobile.src="./img/open-menu.svg";
    });

};

menuMobile.addEventListener('click',abrirMenuMobile);