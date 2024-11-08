const hamMenu = document.querySelector('.ham_menu');
const offScreenMenu2 = document.querySelector('.off-screen-menu-2');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active')
    offScreenMenu2.classList.toggle('active')
})