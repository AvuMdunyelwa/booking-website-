const modal = document.querySelector('#modal');
const openModal = document.querySelector('.book_now');
const closeModal = document.querySelector('.closemodal',);

openModal.addEventListener('click', () =>{
   modal.showModal();
}) 

closeModal.addEventListener('click', () =>{
   modal.close();
})