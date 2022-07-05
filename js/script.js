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

};

menuMobile.addEventListener('click',abrirMenuMobile);