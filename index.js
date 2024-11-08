const hamBurger = document.querySelector('.hamburger');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamBurger.addEventListener('click', () => {
    hamBurger.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
})

const modal = document.querySelector('.modal')
const openModal = document.querySelector('.signup');
const closeModal = document.querySelector('.signup_btn')

openModal.addEventListener('click', () => {
    modal.showModal();
})





