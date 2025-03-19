const button = document.querySelector("#add");
const modal = document.querySelector("dialog");
const closeModal = document.querySelector("#cancelar");

button.onclick = function(){
    modal.showModal();
};

closeModal.onclick = function(){
    modal.close();
};